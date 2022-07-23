export const hash = (str: string): string =>
	str
		.split('')
		.reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0)
		.toString(16);
