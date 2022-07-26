// Common types
export type Nullish = null | undefined;

// Locales
export type Locales = 'ja' | 'en';

export interface I18nData<JaDataType = string | Nullish, EnDataType = JaDataType> {
  ja: JaDataType;
  en: EnDataType;
}

// Enum Related
export type NumericEnum = readonly number[];
export type StringEnum = readonly (string | Nullish)[];
export type Enum = readonly unknown[];
export type I18nEnum = Record<Locales, StringEnum>;
export type GetEnumElementType<T extends Enum> = T extends readonly (infer E)[] ? E : never;
export type Checked<T extends Enum> = GetEnumElementType<T> | Nullish;
export type GetI18nEnumType<T extends I18nEnum> = {
  [locale in Locales]: Checked<T[locale]>;
};
export type GetI18nEnumTypeArray<T extends I18nEnum> = {
  [locale in Locales]: Checked<T[locale]>[];
};
