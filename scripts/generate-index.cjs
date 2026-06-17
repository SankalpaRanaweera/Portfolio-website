#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const clientDir = path.join(root, 'dist', 'client');
const clientAssetsDir = path.join(clientDir, 'assets');
const distDir = path.join(root, 'dist');

if (!fs.existsSync(clientAssetsDir)) {
  console.error('Client assets directory not found:', clientAssetsDir);
  process.exit(0);
}

const files = fs.readdirSync(clientAssetsDir).filter(f => !f.endsWith('.map'));
const cssFiles = files.filter(f => f.endsWith('.css')).sort();
const jsFiles = files.filter(f => f.endsWith('.js')).sort();

const title = 'Portfolio';

const parts = [];
parts.push('<!doctype html>');
parts.push('<html lang="en">');
parts.push('<head>');
parts.push('  <meta charset="utf-8">');
parts.push('  <meta name="viewport" content="width=device-width,initial-scale=1">');
parts.push(`  <title>${title}</title>`);

for (const f of cssFiles) {
  parts.push(`  <link rel="stylesheet" href="./assets/${f}">`);
}

parts.push('</head>');
parts.push('<body>');
parts.push('  <div id="root"></div>');

for (const f of jsFiles) {
  parts.push(`  <script type="module" src="./assets/${f}"></script>`);
}

parts.push('</body>');
parts.push('</html>');

const outPath = path.join(clientDir, 'index.html');
fs.mkdirSync(clientDir, { recursive: true });
fs.writeFileSync(outPath, parts.join('\n'));
console.log('Wrote index.html to', outPath);
