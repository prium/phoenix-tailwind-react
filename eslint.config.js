import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

/**
 * ESLint 9 flat config.
 *
 * Only packages that are actually in devDependencies are imported here — the
 * previous revision pulled in `typescript-eslint` and
 * `eslint-plugin-react-refresh`, neither of which is installed, so
 * `npm run lint` crashed before linting a single file. `.eslintignore` is not
 * read by flat config either; its one entry (`*.cjs`) now lives in `ignores`.
 */
export default [
  {
    ignores: [
      'dist',
      'build',
      'public',
      '**/*.cjs',
      // legacy Bootstrap SCSS + the react-bootstrap compatibility shim, both
      // pending deletion with the Tailwind migration
      'src/assets/scss',
      'src/react-bootstrap'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // TypeScript resolves globals and types itself; core `no-undef`
      // false-positives on DOM lib types inside .ts/.tsx.
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
];
