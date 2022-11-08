import { test, expect } from '@playwright/test';

test('test new page title', async ({ page }) => {
  await page.goto('/testNewTab');

  await expect(page).toHaveTitle('测试页面');
});
