const { test, expect, chromium } = require('@playwright/test');
const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');

test('popup carrega e exibe UI (sanity)', async () => {
  const context = await chromium.launchPersistentContext('', {
    headless: true,
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`
    ]
  });

  const [page] = context.pages();
  await page.goto('https://example.com');

  const link = await page.$('a');
  expect(link).toBeTruthy();

  await context.close();
});


