import EnumsV3 from '../enums/EnumsV3';
import type { Checked, GetI18nEnumType, GetI18nEnumTypeArray, I18nData, Locales, Nullish } from '../util';
interface Lecturer {
    name: I18nData;
}
declare type Time = {
    [locale in Locales]: ({
        string: Checked<typeof EnumsV3.TimeStrings[locale]>;
        day: Checked<typeof EnumsV3.Days[locale]>;
        period: Checked<typeof EnumsV3.Periods>;
    })[];
};
interface Schedule {
    year: Checked<typeof EnumsV3.Years>;
    semester: GetI18nEnumType<typeof EnumsV3.Semesters>;
    times: Time[];
    span: GetI18nEnumType<typeof EnumsV3.Spans>;
}
interface Registration {
    prerequisite: {
        mandatory: string | Nullish;
        recommended: string | Nullish;
    };
    requirement: I18nData;
    suggestion: I18nData;
    advice: I18nData;
    duplicateCourses: I18nData;
}
interface Screening {
    needScreening: boolean;
    screening: I18nData;
    quota: number | Nullish;
    assignment: I18nData;
}
interface Tag {
    aspects: GetI18nEnumTypeArray<typeof EnumsV3.Aspects>;
    category: GetI18nEnumType<typeof EnumsV3.Categories>;
    classFormat: GetI18nEnumType<typeof EnumsV3.ClassFormats>;
    types: GetI18nEnumTypeArray<typeof EnumsV3.Types>;
    language: GetI18nEnumType<typeof EnumsV3.Languages>;
    curriculumCode: string | Nullish;
    giga: boolean | Nullish;
}
export interface CourseV3 {
    id: string;
    title: I18nData;
    department: GetI18nEnumType<typeof EnumsV3.Departments>;
    lecturers: Lecturer[];
    schedule: Schedule;
    location: GetI18nEnumTypeArray<typeof EnumsV3.Locations>;
    credit: Checked<typeof EnumsV3.Credits>;
    englishSupport: I18nData;
    url: I18nData;
    tools: I18nData;
    teachingMaterials: I18nData;
    summary: I18nData;
    objectives: I18nData;
    grading: I18nData;
    plan: I18nData;
    registration: Registration;
    screening: Screening;
    related: string | Nullish;
    syllabusURL: string | Nullish;
    tag: Tag;
    version: 3;
}
export {};
