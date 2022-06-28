export declare type Nullish = null | undefined;
export declare type Locales = 'ja' | 'en';
export declare type StringEnum = readonly string[];
export declare type I18nEnum = Record<Locales, StringEnum>;
export declare type GetEnumElementType<T extends StringEnum> = T extends readonly (infer E)[] ? E : never;
export declare type GetEnumType<T extends I18nEnum> = {
    [locale in Locales]: GetEnumElementType<T[locale]> | Nullish;
};
