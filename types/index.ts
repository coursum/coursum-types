type Nullish = null | undefined;

interface I18nData {
  ja: string | Nullish;
  en: string | Nullish;
  kana?: string | Nullish;
}

interface Title {
  name: I18nData;
  postscript: I18nData;
}

interface Lecturer {
  id: string | Nullish;
  imgUrl: string | Nullish;
  name: I18nData;
  email: string | Nullish;
  inCharge: boolean | Nullish;
}

interface Schedule {
  year: number | Nullish;
  semester: I18nData;
  times: I18nData;
  span: I18nData;
}

interface Registration {
  number: string | Nullish;
  prerequisite: {
    mandatory: string | Nullish;
    recommended: string | Nullish;
  };
  requirement: I18nData;
  suggestion: I18nData;
}

interface Tag {
  curriculumCode: string | Nullish;
  category: I18nData;
  giga: boolean | Nullish;
}

export interface Course {
  title: Title;
  lecturers: Lecturer[];
  schedule: Schedule;
  classroom: string | Nullish;
  credit: number | Nullish;
  language: I18nData;
  summary: I18nData;
  types: I18nData;
  registration: Registration;
  related: string | Nullish;
  yearClassId: string; // non nullish
  syllabusURL: string | Nullish;
  tag: Tag;
}
