import fs from 'fs';
import readline from 'readline';

async function loadJSONL(filepath) {
  const records = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(filepath)
  });
  
  for await (const line of rl) {
    if (line.trim()) {
      records.push(JSON.parse(line));
    }
  }
  return records;
}

async function build() {
  console.log('Loading dataset...');
  const records = await loadJSONL('./src/content/dataset/cgm_dataset_main.jsonl');
  
  // Build search index from JSONL records
  const index = {
    version: 1,
    created: new Date().toISOString(),
    count: records.length,
    items: records.map(record => ({
      ...record
    }))
  };

  // Extract unique values for filters
  index.facets = {
    categories: [...new Set(records.map(r => r.category))].sort(),
    types: [...new Set(records.map(r => r.type))].sort(),
    importance: [...new Set(records.map(r => r.importance))],
    tags: [...new Set(records.flatMap(r => r.tags || []))].sort()
  };

  fs.mkdirSync('./public/search-index', { recursive: true });
  fs.writeFileSync(
    './public/search-index/index.json',
    JSON.stringify(index)
  );

  console.log(`✅ Built index with ${index.count} items`);
  console.log(`   Categories: ${index.facets.categories.join(', ')}`);
  console.log(`   Types: ${index.facets.types.join(', ')}`);
  console.log(`   Tags: ${index.facets.tags.length} unique tags`);
}

build();