// Common types
export type Nullish = null | undefined;

// Locales
export type Locales = 'ja' | 'en';

// Enum Related
export type StringEnum = readonly string[];
export type I18nEnum = Record<Locales, StringEnum>;
export type GetEnumElementType<T extends StringEnum> = T extends readonly (infer E)[] ? E : never;
export type GetEnumType<T extends I18nEnum> = {
  [locale in Locales]: GetEnumElementType<T[locale]> | Nullish;
};
