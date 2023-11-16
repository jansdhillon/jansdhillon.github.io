import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    //use amplify url
  await page.goto('https://d1tsmojco1w7hc.cloudfront.net/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("");
});

