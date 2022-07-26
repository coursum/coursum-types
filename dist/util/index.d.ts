export declare type Nullish = null | undefined;
export declare type Locales = 'ja' | 'en';
export interface I18nData<JaDataType = string | Nullish, EnDataType = JaDataType> {
    ja: JaDataType;
    en: EnDataType;
}
export declare type NumericEnum = readonly number[];
export declare type StringEnum = readonly (string | Nullish)[];
export declare type Enum = readonly unknown[];
export declare type I18nEnum = Record<Locales, StringEnum>;
export declare type GetEnumElementType<T extends Enum> = T extends readonly (infer E)[] ? E : never;
export declare type GetI18nEnumType<T extends I18nEnum> = {
    [locale in Locales]: GetEnumElementType<T[locale]> | Nullish;
};
