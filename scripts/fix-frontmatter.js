/**
 * Fix files that start with --- but have no closing ---
 * Remove the leading --- line from these files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

const brokenFiles = [
  'weidian-consolidation-guide.md',
  'weidian-dashboard-guide.md',
  'weidian-delivery-guide.md',
  'weidian-first-order.md',
  'weidian-getting-started.md',
  'weidian-how-to-buy.md',
  'weidian-how-to-order.md',
  'weidian-new-user-guide.md',
  'weidian-order-guide.md',
  'weidian-ordering-process.md',
  'weidian-payment-guide.md',
  'weidian-platform-guide.md',
  'weidian-purchase-guide.md',
  'weidian-registration-guide.md',
  'weidian-shipping-methods.md',
  'weidian-shipping-options.md',
  'weidian-shopping-guide.md',
  'weidian-top-up-guide.md',
  'weidian-warehouse-guide.md',
];

let fixed = 0;
for (const file of brokenFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove leading ---\n
  if (content.startsWith('---\n')) {
    content = content.substring(4); // remove '---\n'
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixed} files`);
