#!/usr/bin/env node
// Rewrites getColor('x') / getThemeColor('x') call sites using tokenMap.
import fs from 'node:fs';
import path from 'node:path';
import { tokenMap } from './tokenMap.mjs';

const RE = /\b(getColor|getThemeColor)\(\s*(['"`])([a-z0-9-]+)\2\s*\)/g;
let total = 0;
const walk = t => {
  if (fs.statSync(t).isDirectory()) return fs.readdirSync(t).forEach(e => walk(path.join(t, e)));
  if (!/\.(tsx?|jsx?)$/.test(t)) return;
  const src = fs.readFileSync(t, 'utf8');
  let n = 0;
  const out = src.replace(RE, (m, fn, q, name) => {
    const to = tokenMap[name];
    if (!to) return m;
    n++;
    return `${fn}(${q}${to}${q})`;
  });
  if (n) { fs.writeFileSync(t, out); total += n; console.log(`${t}: ${n}`); }
};
process.argv.slice(2).forEach(walk);
console.log(`\n${total} token references renamed.`);
