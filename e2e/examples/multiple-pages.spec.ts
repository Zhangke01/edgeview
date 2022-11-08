import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
  test('Open a new tab', async ({ page }) => {
    await page.goto('/');
    const toNewPageBtn = page.locator('#toNewPageBtn');
    await toNewPageBtn.click();
  });

  test('new tab', async ({ page }) => {
    await page.goto('/testNewTab');
    await expect(page).toHaveURL(/.*testNewTab/);
    // await page.locator('#wrapper', { hasText: 'This is a new test page' });

    // const wrapper = page.locator('#wrapper');
    // console.log('wrapper--->', wrapper);
    // await expect(wrapper).toHaveText('This is a new test page');
    // await expect(wrapper).toContainText('This is a new test page');

    // await expect(page).toHaveTitle('测试页面');
  });
});
