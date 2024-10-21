import { expect, test } from '@playwright/test';
import testcases from './commonmark';
import { basePath } from './utils';

test('commonmark tests', async ({ page }) => {
	await page.goto(`${basePath}/no-plugin`);
	const textarea = page.getByRole('textbox');
	const output = page.getByRole('status'); // <output /> has role=status by default
	const skipExamples = [
		12, // &quote; unmatched
		14, // &quote; unmatched
		21, // not allowed tags
		25, // &nbsp; unmatched
		27, // &quote; unmatched
		31, // not allowed tags
		41, // &quote; unmatched
		91, // &quote; unmatched
		201, // not allowed tags
		209, // &quote; unmatched
		210, // &quote; unmatched
		211, // &quote; unmatched
		333, // &nbsp; unmatched
		334, // &nbsp; unmatched
		343, // &quote; unmatched
		344, // not allowed tags
		352, // &quote; unmatched
		353, // &nbsp; unmatched
		358, // &quote; unmatched
		362, // &quote; unmatched
		379, // &quote; unmatched
		384, // &quote; unmatched
		394, // &quote; unmatched
		474, // not allowed tags
		475, // not allowed tags
		476, // not allowed tags
		490, // not allowed tags
		493, // not allowed tags
		507, // &quote; unmatched
		516, // &quote; unmatched
		523, // not allowed tags
		535, // not allowed tags
		589, // &quote; unmatched
		642, // not allowed tags
		643 // not allowed tags
	];
	const skipSections = ['HTML blocks', 'Raw HTML'];

	for (const testcase of testcases) {
		if (skipExamples.includes(testcase.example)) continue;
		if (skipSections.includes(testcase.section)) continue;
		await textarea.fill(testcase.markdown);
		const expected = testcase.html
			.replace(/<hr \/>/g, '<hr>')
			.replace(/<br \/>/g, '<br>')
			.replace(/<img\s+(.+)\s+\/>/g, '<img $1>')
			.trim();
		const actual = (await output.innerHTML())
			.replace(/&lt;!--/g, '<!--')
			.replace(/--&gt;/g, '-->')
			.replace(/<!--[[\]]?-->/g, '') // Ignore hydration markers
			.trim();
		expect(actual).toBe(expected);
	}
});
