const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const isFull = process.argv.includes('--full');

const dataFiles = [
  { path: 'lib/data/services.ts', key: 'services' },
  { path: 'lib/data/portfolio.ts', key: 'portfolioItems' },
  { path: 'lib/data/caseStudies.ts', key: 'caseStudies' },
  { path: 'lib/data/solutions.ts', key: 'solutions' },
  { path: 'lib/data/industries.ts', key: 'industries' },
];

const staticPages = [
  'app/page.tsx',
  'app/about/page.tsx',
  'app/blog/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/contact/page.tsx',
  'app/industries/page.tsx',
  'app/portfolio/page.tsx',
  'app/privacy/page.tsx',
  'app/resources/page.tsx',
  'app/services/page.tsx',
  'app/solutions/page.tsx',
  'app/terms/page.tsx',
];

let totalChecked = 0;
let issueCount = 0;

console.log('\x1b[36m%s\x1b[0m', `=== SEO Metadata Audit (${isFull ? 'Full Output' : 'Warnings Only'}) ===\n`);

function auditDataFile({ path: relativePath }) {
  const fullPath = path.join(projectRoot, relativePath);
  if (!fs.existsSync(fullPath)) return;

  const content = fs.readFileSync(fullPath, 'utf8');

  // Split top-level array elements by matching `{` at appropriate depth
  // Extract slug, metaTitle or title, and metaDescription for each primary item
  const slugRegex = /slug:\s*["`']([^"`']+)["`']/g;
  let match;
  const slugsSeen = new Set();

  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    // Ignore duplicates from nested relatedServices or sub-arrays
    if (slugsSeen.has(slug)) continue;
    slugsSeen.add(slug);

    // Find block surrounding this slug
    const startIndex = Math.max(0, match.index - 50);
    const endIndex = Math.min(content.length, match.index + 800);
    const snippet = content.slice(startIndex, endIndex);

    const metaTitleMatch = snippet.match(/metaTitle:\s*["`']([^"`']+)["`']/);
    const titleMatch = snippet.match(/title:\s*["`']([^"`']+)["`']/);
    const descMatch = snippet.match(/metaDescription:\s*(["'`])([\s\S]*?)\1/);

    const title = metaTitleMatch ? metaTitleMatch[1] : titleMatch ? titleMatch[1] : '';
    const desc = descMatch ? descMatch[2].trim().replace(/\s+/g, ' ') : '';

    totalChecked++;
    let itemIssues = [];

    // Title Check
    if (!title) {
      itemIssues.push('Missing metaTitle/title');
    } else if (title.length < 20) {
      itemIssues.push(`Title too short (${title.length} chars): "${title}"`);
    } else if (title.length > 70) {
      itemIssues.push(`Title too long (${title.length} chars): "${title}"`);
    }

    // Meta Description Check
    if (!desc) {
      itemIssues.push('Missing metaDescription');
    } else if (desc.length < 50) {
      itemIssues.push(`Description too short (${desc.length} chars): "${desc}"`);
    } else if (desc.length > 160) {
      itemIssues.push(`Description too long (${desc.length} chars): "${desc}"`);
    }

    if (itemIssues.length > 0) {
      issueCount += itemIssues.length;
      console.log(`\x1b[33m[WARN]\x1b[0m ${relativePath} -> \x1b[1m${slug}\x1b[0m`);
      itemIssues.forEach((issue) => console.log(`       - ${issue}`));
    } else if (isFull) {
      console.log(`\x1b[32m[OK]\x1b[0m ${relativePath} -> ${slug} (Title: ${title.length}c, Desc: ${desc.length}c)`);
    }
  }
}

function auditStaticPage(relativePath) {
  const fullPath = path.join(projectRoot, relativePath);
  if (!fs.existsSync(fullPath)) return;

  const content = fs.readFileSync(fullPath, 'utf8');

  // Match constructMetadata object inside metadata export
  const metaExportMatch = content.match(/export const metadata\s*=\s*constructMetadata\(\{([\s\S]*?)\}\);/);
  if (!metaExportMatch) return;

  const metaBlock = metaExportMatch[1];
  const titleMatch = metaBlock.match(/title:\s*["`']([^"`']+)["`']/);
  const descMatch = metaBlock.match(/description:\s*(["'`])([\s\S]*?)\1/);

  const title = titleMatch ? titleMatch[1] : '';
  const desc = descMatch ? descMatch[2].trim().replace(/\s+/g, ' ') : '';

  totalChecked++;
  let itemIssues = [];

  if (!title) {
    itemIssues.push('Missing title in constructMetadata');
  } else if (title.length < 15) {
    itemIssues.push(`Title too short (${title.length} chars): "${title}"`);
  } else if (title.length > 70) {
    itemIssues.push(`Title too long (${title.length} chars): "${title}"`);
  }

  if (!desc) {
    itemIssues.push('Missing description in constructMetadata');
  } else if (desc.length < 50) {
    itemIssues.push(`Description too short (${desc.length} chars): "${desc}"`);
  } else if (desc.length > 160) {
    itemIssues.push(`Description too long (${desc.length} chars): "${desc}"`);
  }

  if (itemIssues.length > 0) {
    issueCount += itemIssues.length;
    console.log(`\x1b[33m[WARN]\x1b[0m ${relativePath}`);
    itemIssues.forEach((issue) => console.log(`       - ${issue}`));
  } else if (isFull) {
    console.log(`\x1b[32m[OK]\x1b[0m ${relativePath} (Title: ${title.length}c, Desc: ${desc.length}c)`);
  }
}

dataFiles.forEach(auditDataFile);
staticPages.forEach(auditStaticPage);

console.log('\n----------------------------------------');
console.log(`Total metadata entries audited: \x1b[1m${totalChecked}\x1b[0m`);
if (issueCount === 0) {
  console.log('\x1b[32m%s\x1b[0m', '✅ SUCCESS: 100% of metadata titles and descriptions meet ideal SEO standards!');
  process.exit(0);
} else {
  console.log('\x1b[31m%s\x1b[0m', `❌ FOUND ${issueCount} METADATA WARNING(S). Please review the logs above.`);
  process.exit(1);
}
