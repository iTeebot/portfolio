import fs from 'fs';
import path from 'path';
import { services } from '../lib/data/services';
import { portfolioItems } from '../lib/data/portfolio';
import { caseStudies } from '../lib/data/caseStudies';
import { solutions } from '../lib/data/solutions';
import { industries } from '../lib/data/industries';

const isFull = process.argv.includes('--full');
let totalChecked = 0;
let issueCount = 0;

console.log('\x1b[36m%s\x1b[0m', `=== SEO Metadata Audit (${isFull ? 'Full Output' : 'Warnings Only'}) ===\n`);

function checkItem(category: string, slug: string, title: string, desc: string) {
  totalChecked++;
  let itemIssues: string[] = [];

  if (!title) {
    itemIssues.push('Missing metaTitle/title');
  } else if (title.length < 20) {
    itemIssues.push(`Title too short (${title.length} chars): "${title}"`);
  } else if (title.length > 70) {
    itemIssues.push(`Title too long (${title.length} chars): "${title}"`);
  }

  if (!desc) {
    itemIssues.push('Missing metaDescription');
  } else if (desc.length < 50) {
    itemIssues.push(`Description too short (${desc.length} chars): "${desc}"`);
  } else if (desc.length > 160) {
    itemIssues.push(`Description too long (${desc.length} chars): "${desc}"`);
  }

  if (itemIssues.length > 0) {
    issueCount += itemIssues.length;
    console.log(`\x1b[33m[WARN]\x1b[0m ${category} -> \x1b[1m${slug}\x1b[0m`);
    itemIssues.forEach((issue) => console.log(`       - ${issue}`));
  } else if (isFull) {
    console.log(`\x1b[32m[OK]\x1b[0m ${category} -> ${slug} (Title: ${title.length}c, Desc: ${desc.length}c)`);
  }
}

// 1. Services
services.forEach((s) => checkItem('Services', s.slug, s.metaTitle || s.title, s.metaDescription));

// 2. Portfolio
portfolioItems.forEach((p) => checkItem('Portfolio', p.slug, p.metaTitle || p.title, p.metaDescription));

// 3. Case Studies
caseStudies.forEach((c) => checkItem('Case Studies', c.slug, c.metaTitle || c.title, c.metaDescription));

// 4. Solutions
solutions.forEach((sol) => checkItem('Solutions', sol.slug, sol.metaTitle || sol.title, sol.metaDescription));

// 5. Industries
industries.forEach((ind) => checkItem('Industries', ind.slug, ind.metaTitle || ind.title, ind.metaDescription));

// 6. Static Pages
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

const projectRoot = path.join(__dirname, '..');

staticPages.forEach((relativePath) => {
  const fullPath = path.join(projectRoot, relativePath);
  if (!fs.existsSync(fullPath)) return;

  const content = fs.readFileSync(fullPath, 'utf8');

  const metaExportMatch = content.match(/export const metadata\s*=\s*constructMetadata\(\{([\s\S]*?)\}\);/);
  if (!metaExportMatch) return;

  const metaBlock = metaExportMatch[1];
  const titleMatch = metaBlock.match(/title:\s*["`']([^"`']+)["`']/);
  const descMatch = metaBlock.match(/description:\s*(["'`])([\s\S]*?)\1/);

  const title = titleMatch ? titleMatch[1] : '';
  const desc = descMatch ? descMatch[2].trim().replace(/\s+/g, ' ') : '';

  checkItem('Static Page', relativePath, title, desc);
});

console.log('\n----------------------------------------');
console.log(`Total metadata entries audited: \x1b[1m${totalChecked}\x1b[0m`);
if (issueCount === 0) {
  console.log('\x1b[32m%s\x1b[0m', '✅ SUCCESS: 100% of metadata titles and descriptions meet ideal SEO standards!');
  process.exit(0);
} else {
  console.log('\x1b[31m%s\x1b[0m', `❌ FOUND ${issueCount} METADATA WARNING(S). Please review the logs above.`);
  process.exit(1);
}
