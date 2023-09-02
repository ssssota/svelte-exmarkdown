export const getTitleFromMarkdown = (md: string): string | undefined =>
	md.trim().match(/^# (.+)$/m)?.[1] ?? undefined;
