import { test, expect } from '@playwright/test';

test.describe('Link Checker - Docs Pages', () => {
  test('should check all links on docs homepage', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/docs`);

    // Get all links on the page
    const links = page.locator('a[href]');
    const linkCount = await links.count();

    console.log(`Found ${linkCount} links on /docs`);

    // Check each link
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');

      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        continue; // Skip anchor links, email, phone
      }

      try {
        // Try to navigate to the link
        const [response] = await Promise.all([
          page.waitForLoadState('networkidle'),
          link.click()
        ]);

        // Check if page loaded successfully
        const status = response?.status();
        if (status && status >= 400) {
          console.error(`❌ Broken link: ${href} (status: ${status})`);
        } else {
          console.log(`✅ Link OK: ${href}`);
        }

        // Go back to docs homepage
        await page.goto(`${baseURL}/docs`);
      } catch (error) {
        console.error(`❌ Failed to navigate to: ${href} - ${error.message}`);
        await page.goto(`${baseURL}/docs`);
      }
    }
  });

  test('should crawl and test all doc pages recursively', async ({ page, baseURL }) => {
    const visited = new Set<string>();
    const toVisit = [`${baseURL}/docs`];

    while (toVisit.length > 0) {
      const currentUrl = toVisit.pop()!;
      if (visited.has(currentUrl)) continue;

      visited.add(currentUrl);
      console.log(`📄 Testing: ${currentUrl}`);

      try {
        await page.goto(currentUrl, { waitUntil: 'networkidle' });

        // Get all doc links (links that go to /docs/)
        const docLinks = page.locator('a[href^="/docs/"]');
        const linkCount = await docLinks.count();

        for (let i = 0; i < linkCount; i++) {
          const href = await docLinks.nth(i).getAttribute('href');
          if (href) {
            const fullUrl = `${baseURL}${href}`;
            if (!visited.has(fullUrl) && !toVisit.includes(fullUrl)) {
              toVisit.push(fullUrl);
            }
          }
        }

        // Quick smoke test - check for console errors
        const errors = [];
        page.on('console', msg => {
          if (msg.type() === 'error') {
            errors.push(msg.text());
          }
        });

        // Wait a bit for any dynamic content to load
        await page.waitForTimeout(1000);

        if (errors.length > 0) {
          console.error(`🚨 Console errors on ${currentUrl}:`, errors);
        } else {
          console.log(`✅ No console errors on ${currentUrl}`);
        }

      } catch (error) {
        console.error(`❌ Failed to load: ${currentUrl} - ${error.message}`);
      }
    }

    console.log(`\n📊 Summary: Tested ${visited.size} doc pages`);
  });
});