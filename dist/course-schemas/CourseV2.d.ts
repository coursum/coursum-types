declare type Nullish = null | undefined;
interface I18nData<DataType = string | Nullish> {
    ja: DataType;
    en: DataType;
}
interface Lecturer {
    name: I18nData;
}
interface Schedule {
    year: number;
    semester: I18nData;
    times: I18nData<(string | Nullish)[]>;
    span: I18nData;
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
    aspect: I18nData;
    category: I18nData;
    classFormat: I18nData;
    types: I18nData<(string | Nullish)[]>;
    language: I18nData;
    curriculumCode: string | Nullish;
    giga: boolean | Nullish;
}
export interface CourseV2 {
    id: string;
    title: I18nData;
    department: I18nData;
    lecturers: Lecturer[];
    schedule: Schedule;
    location: I18nData;
    credit: number | Nullish;
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
    version: 2;
}
export {};