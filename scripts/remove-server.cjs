#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function removePath(p) {
  if (!fs.existsSync(p)) return false;
  const stat = fs.lstatSync(p);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(p)) {
      removePath(path.join(p, entry));
    }
    fs.rmdirSync(p);
  } else {
    fs.unlinkSync(p);
  }
  return true;
}

const root = path.join(__dirname, '..');
const candidates = ['dist/server', 'server', 'dist/.netlify/server', 'dist/functions/server', 'dist/.server', 'dist/index.html'];

let removedAny = false;
for (const rel of candidates) {
  const abs = path.join(root, rel);
  if (fs.existsSync(abs)) {
    try {
      removePath(abs);
      console.log('Removed:', abs);
      removedAny = true;
    } catch (err) {
      console.error('Failed to remove', abs, err);
      process.exitCode = 1;
    }
  }
}

if (!removedAny) {
  console.log('No server folder found; nothing removed.');
}
