#!/usr/bin/env node

const http = require('http');
const https = require('https');
const { URL } = require('url');

const MAX_REDIRECTS = 5;
const TIMEOUT = 10000; // 10 seconds

// Find the active Next.js dev server
async function findDevServer() {
  // Scan from highest to lowest to prefer most recently started servers
  const commonPorts = [5000, 8080, 8000, 5173, 4000, 3009, 3008, 3007, 3006, 3005, 3004, 3003, 3002, 3001, 3000];

  for (const port of commonPorts) {
    try {
      const url = `http://localhost:${port}`;

      // Check if this looks like a Next.js dev server by testing the root page
      const response = await new Promise((resolve, reject) => {
        const parsedUrl = new URL(url);
        const client = parsedUrl.protocol === 'https:' ? https : http;

        const req = client.request({
          hostname: parsedUrl.hostname,
          port: parsedUrl.port,
          path: '/',
          method: 'GET',
          timeout: 2000,
          headers: {
            'User-Agent': 'LinkChecker/1.0'
          }
        }, (res) => {
          if (res.statusCode === 200) {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
              // Check if this looks like a Next.js page (has typical Next.js content)
              if (data.includes('next') || data.includes('Next.js') || data.includes('__NEXT_DATA__')) {
                resolve({ status: res.statusCode, data });
              } else {
                reject(new Error('Not a Next.js server'));
              }
            });
          } else {
            reject(new Error(`HTTP ${res.statusCode}`));
          }
        });

        req.on('error', reject);
        req.on('timeout', () => {
          req.destroy();
          reject(new Error('Timeout'));
        });
        req.end();
      });

      console.log(`✅ Found active Next.js dev server on port ${port}`);
      return url;

    } catch (error) {
      // Port not available or not a Next.js server, try next one
    }
  }

  throw new Error('No active Next.js dev server found on common ports (3000, 3001, 3002, 3003, 5173, 8000, 8080, 4000, 5000)');
}

let BASE_URL;

function checkUrl(url, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > MAX_REDIRECTS) {
      reject(new Error(`Too many redirects for ${url}`));
      return;
    }

    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;

    const req = client.request({
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'HEAD',
      timeout: TIMEOUT,
      headers: {
        'User-Agent': 'LinkChecker/1.0'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirect
        const redirectUrl = new URL(res.headers.location, url).href;
        console.log(`🔄 ${url} → ${redirectUrl}`);
        checkUrl(redirectUrl, redirectCount + 1).then(resolve).catch(reject);
      } else if (res.statusCode >= 200 && res.statusCode < 400) {
        resolve({ url, status: res.statusCode });
      } else {
        reject(new Error(`${url} returned ${res.statusCode}`));
      }
    });

    req.on('error', (err) => {
      reject(new Error(`${url} failed: ${err.message}`));
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`${url} timed out`));
    });

    req.end();
  });
}

async function crawlAndCheckLinks() {
  console.log('🔗 Starting comprehensive site link checker...\n');

  try {
    // Find and set the dev server URL
    BASE_URL = await findDevServer();
    console.log(`🔍 Using dev server: ${BASE_URL}\n`);

    const visited = new Set();
    const toVisit = [BASE_URL]; // Start with homepage
    const allLinks = new Set();
    const results = { success: 0, failed: 0, pagesChecked: 0 };

    // First pass: crawl and collect all links
    console.log('🕷️ Crawling site to discover all links...\n');

    while (toVisit.length > 0 && visited.size < 100) { // Limit to prevent infinite loops
      const currentUrl = toVisit.shift();
      if (visited.has(currentUrl)) continue;

      visited.add(currentUrl);
      results.pagesChecked++;

      try {
        console.log(`📄 Crawling: ${currentUrl.replace(BASE_URL, '') || '/'}`);

        // Get page HTML
        const html = await new Promise((resolve, reject) => {
          const url = new URL(currentUrl);
          const client = url.protocol === 'https:' ? https : http;

          client.get(currentUrl, (res) => {
            if (res.statusCode !== 200) {
              reject(new Error(`HTTP ${res.statusCode}`));
              return;
            }

            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
          }).on('error', reject);
        });

        // Extract all links from the HTML
        const linkRegex = /href=["']([^"']+)["']/gi;
        let match;

        while ((match = linkRegex.exec(html)) !== null) {
          const link = match[1];

          // Skip external links, anchors, emails, phones
          if (link.startsWith('http') && !link.startsWith(BASE_URL)) continue;
          if (link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('tel:')) continue;
          if (link.includes('javascript:') || link.includes('data:')) continue;

          // Convert relative links to absolute
          const fullUrl = link.startsWith('http') ? link : new URL(link, currentUrl).href;

          // Only include links from our domain
          if (fullUrl.startsWith(BASE_URL)) {
            allLinks.add(fullUrl);

            // Add to crawl queue if it's an internal page we haven't visited
            const pathOnly = fullUrl.replace(BASE_URL, '');
            if (!pathOnly.includes('.') && !pathOnly.includes('?') && !pathOnly.includes('#') &&
                pathOnly !== '/' && !visited.has(fullUrl) && !toVisit.includes(fullUrl)) {
              toVisit.push(fullUrl);
            }
          }
        }

      } catch (error) {
        console.log(`⚠️  Failed to crawl ${currentUrl}: ${error.message}`);
      }
    }

    console.log(`\n🔍 Found ${allLinks.size} unique internal links across ${results.pagesChecked} pages\n`);

    // Second pass: check all collected links
    console.log('🧪 Testing all links...\n');

    for (const link of allLinks) {
      try {
        await checkUrl(link);
        console.log(`✅ ${link.replace(BASE_URL, '')}`);
        results.success++;
      } catch (error) {
        console.log(`❌ ${link.replace(BASE_URL, '')} - ${error.message}`);
        results.failed++;
      }
    }

    console.log(`\n📊 Final Results:`);
    console.log(`   Pages crawled: ${results.pagesChecked}`);
    console.log(`   Links tested: ${allLinks.size}`);
    console.log(`   ✅ Working: ${results.success}`);
    console.log(`   ❌ Broken: ${results.failed}`);

  } catch (error) {
    console.error(`🚨 Error: ${error.message}`);
    console.log('\n💡 Make sure your dev server is running: npm run dev');
    console.log('   The script will automatically scan common ports (3000, 3001, 3002, 5173, 8000, 8080, 4000, 5000)');
    process.exit(1);
  }
}

crawlAndCheckLinks();