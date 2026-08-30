import { defineConfig } from '@playwright/test';

/**
 * Visual regression: React app (:5077) vs phoenix-tailwind gold HTML (:5088).
 * Both servers are started automatically. Gold HTML must exist in
 * ../phoenix-tailwind/public (run `npx gulp compile:all` there if not).
 */
export default defineConfig({
  testDir: './tests/visual',
  timeout: 120_000,
  fullyParallel: true,
  workers: 4,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'tests/visual/report' }]],
  outputDir: 'tests/visual/results',
  use: {
    channel: 'chrome',
    viewport: { width: 1540, height: 900 },
    deviceScaleFactor: 1
  },
  webServer: [
    {
      command: 'npx vite --port 5077 --strictPort',
      url: 'http://localhost:5077',
      reuseExistingServer: true,
      timeout: 60_000
    },
    {
      command: 'python3 -m http.server 5088 --directory ../phoenix-tailwind/public',
      url: 'http://localhost:5088/index.html',
      reuseExistingServer: true,
      timeout: 30_000
    }
  ]
});
