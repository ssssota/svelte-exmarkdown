import { expect, test } from '@playwright/test';
import { basePath } from './utils';

test('render images with each plugins', async ({ page }) => {
	await page.goto(`${basePath}/math-svg`);
	const textarea = page.getByRole('textbox');

	const getPathNamespace = () => {
		return page.evaluate(() => {
			return window.document.querySelector('path')?.namespaceURI;
		});
	};
	await expect(getPathNamespace()).resolves.toBe('http://www.w3.org/2000/svg');

	await textarea.clear();
	await textarea.fill('$$\\sqrt{2}$$');
	await expect(getPathNamespace()).resolves.toBe('http://www.w3.org/2000/svg');
});
