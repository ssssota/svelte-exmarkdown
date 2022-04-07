export const nonNullable = <T>(value: T | null | undefined): value is T => value != null;
