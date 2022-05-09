import { test, expect } from '@playwright/test';

test('Should navigate to the products page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Shop all');
  await expect(page).toHaveURL('/products');
});
