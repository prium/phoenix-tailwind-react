#!/usr/bin/env node
/**
 * Bootstrap 5 → Tailwind class converter for this app.
 *
 * Adapted from ../phoenix-tailwind/converter.js (ESM, no Pug handling) and
 * driven by classMap.upstream.mjs + overrides.mjs (overrides win).
 *
 * Usage:
 *   node tools/bs2tw/converter.mjs <file-or-dir> [...more]   (in place)
 *   npm run convert:tw -- src/components/cards
 *
 * What it rewrites (JSX/TSX/TS):
 *   class="…" / className="…" / className={'…'} / className={`…${x}…`}
 *   className={cond ? 'a' : 'b'}  (any {…} expression containing quoted strings)
 *   classNames(…) / clsx(…) / cn(…) calls WITHOUT nested parentheses
 *   class="…" inside template-literal HTML strings (echarts tooltips)
 *
 * What it does NOT touch — review those by hand against the gold markup:
 *   multi-line classNames({ … }) objects with nested calls, class strings
 *   passed through variables/props, variant maps in components/base/*,
 *   props such as variant="phoenix-primary".
 */
import fs from 'node:fs';
import path from 'node:path';
import { classMap as upstream } from './classMap.upstream.mjs';
import { overrides } from './overrides.mjs';

const classMap = { ...upstream, ...overrides };
const SUPPORTED = new Set(['.jsx', '.tsx', '.js', '.ts', '.html']);

function replaceClassInString(classString, conversions) {
  return classString
    .split(/(\s+)/)
    .map(part => {
      if (/^\s+$/.test(part) || part === '') return part;
      const mapped = classMap[part];
      if (mapped) {
        conversions.push({ from: part, to: mapped });
        return mapped;
      }
      return part;
    })
    .join('');
}

function convertClasses(content) {
  const conversions = [];
  let out = content;

  // 1. class="…" / className='…'
  out = out.replace(
    /\b(class(?:Name)?)\s*=\s*(["'])([^"']*)\2/g,
    (_, attr, q, classes) =>
      `${attr}=${q}${replaceClassInString(classes, conversions)}${q}`
  );

  // 2. className=`…`
  out = out.replace(/\b(class(?:Name)?)\s*=\s*`([^`]*)`/g, (_, attr, tpl) => {
    const processed = tpl.replace(/([^${}]+)|\$\{[^}]+\}/g, part =>
      part.startsWith('${') ? part : replaceClassInString(part, conversions)
    );
    return `${attr}=\`${processed}\``;
  });

  // 3. className={'…'}
  out = out.replace(
    /\b(class(?:Name)?)\s*=\s*\{\s*(["'])([^"']*)\2\s*\}/g,
    (_, attr, q, classes) =>
      `${attr}={${q}${replaceClassInString(classes, conversions)}${q}}`
  );

  // 4. className={`…`}
  out = out.replace(
    /\b(class(?:Name)?)\s*=\s*\{\s*`([^`]*)`\s*\}/g,
    (_, attr, tpl) => {
      const processed = tpl.replace(/([^${}]+)|\$\{[^}]+\}/g, part =>
        part.startsWith('${') ? part : replaceClassInString(part, conversions)
      );
      return `${attr}={\`${processed}\`}`;
    }
  );

  // 5. className={ <expr with quoted strings> }
  out = out.replace(/\b(class(?:Name)?)\s*=\s*\{([^}]+)\}/g, (m, attr, expr) => {
    if (!/["'`]/.test(expr)) return m;
    const processed = expr.replace(
      /(["'`])([^"'`]*)\1/g,
      (_, q, str) => `${q}${replaceClassInString(str, conversions)}${q}`
    );
    return `${attr}={${processed}}`;
  });

  // 6. classNames(…)/clsx(…)/cn(…) — single level only
  out = out.replace(
    /\b(clsx|classNames|classnames|cn)\s*\(([^()]+)\)/g,
    (_, fn, args) => {
      const processed = args.replace(
        /(["'`])([^"'`]*)\1/g,
        (__, q, str) => `${q}${replaceClassInString(str, conversions)}${q}`
      );
      return `${fn}(${processed})`;
    }
  );

  return { converted: out, conversions };
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { converted, conversions } = convertClasses(content);
  if (converted !== content) fs.writeFileSync(filePath, converted, 'utf8');
  return { filePath, conversions };
}

function walk(target, results) {
  const stat = fs.statSync(target);
  if (stat.isFile()) {
    if (SUPPORTED.has(path.extname(target))) results.push(processFile(target));
    return;
  }
  for (const entry of fs.readdirSync(target)) {
    walk(path.join(target, entry), results);
  }
}

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.log('Usage: node tools/bs2tw/converter.mjs <file-or-dir> [...more]');
  process.exit(1);
}

const results = [];
for (const t of targets) {
  if (!fs.existsSync(t)) {
    console.error(`Not found: ${t}`);
    process.exit(1);
  }
  walk(t, results);
}

let total = 0;
for (const r of results) {
  if (r.conversions.length === 0) continue;
  total += r.conversions.length;
  console.log(`${r.filePath}: ${r.conversions.length} classes converted`);
}
console.log(`\nDone. ${results.length} file(s) scanned, ${total} classes converted.`);
