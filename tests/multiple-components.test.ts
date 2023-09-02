import { expect, test } from '@playwright/test';
import { basePath } from './utils';

test('render images with each plugins', async ({ page }) => {
	await page.goto(`${basePath}/multiple-components`);
	const textarea = page.getByRole('textbox');
	await textarea.fill('![svelte](/favicon.png)\n\nThis is favicon.');

	const paragraphs = page.getByText('This is favicon.');
	await expect(paragraphs).toHaveCount(3); // 3 components

	const images = await page.$$('img');
	expect(images).toHaveLength(2); // 3 components, but 1 is skipped
	expect(await images[0]?.getAttribute('alt')).toBe('svelte');
	expect(await images[1]?.getAttribute('alt')).toBe('Injected!'); // injected by plugin
});
