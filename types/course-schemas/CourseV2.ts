import EnumsV2 from '../enums/EnumsV2';
import type { GetEnumType, Nullish } from '../util';

interface I18nData<JaDataType = string | Nullish, EnDataType = JaDataType> {
  ja: JaDataType;
  en: EnDataType;
}

interface Lecturer {
  // Column: Lecturer Name
  name: I18nData;
}

interface Schedule {
  // Column: Year/Semester
  year: number;
  // Column: Year/Semester
  semester: I18nData;
  // Column: Day of Week・Period
  times: I18nData<(string | Nullish)[]>;
  // Title 1st Half / 2nd Half
  span: I18nData<
    '前半' | '後半' | Nullish,
    'First half' | 'Second half' | Nullish
  >;
}

interface Registration {
  prerequisite: {
    // Column: Prerequisites -> Prerequisite Courses
    // Courses that must be taken beforehand
    mandatory: string | Nullish;
    // Column: Prerequisites -> Prerequisite Courses(Recommended)
    // Courses that are recommend to be taken beforehand
    recommended: string | Nullish;
  };
  // Column: Prerequisites
  requirement: I18nData;
  // Column: Prerequisite Knowledge
  suggestion: I18nData;
  advice: I18nData;
  // Column: Duplicate Course
  // No id, only course title
  duplicateCourses: I18nData;
}

interface Screening {
  needScreening: boolean;
  screening: I18nData;
  // Column: Expected Number of Students
  quota: number | Nullish;
  // Column: Screening Assignment
  assignment: I18nData;
}

interface Tag {
  // Column: Aspect name
  aspect: I18nData;
  // Column: Field (Undergraduate)
  category: I18nData;
  // Column: Class Format
  // Online / On campus
  classFormat: I18nData;
  // Column: Class Style
  // Enum: Lecture / Group Work / Workshop / Connecting to Other Sites
  types: I18nData<(string | Nullish)[]>;
  language: I18nData;
  // Column: Subject Sort
  curriculumCode: string | Nullish; // ???
  // Column: GIGA Certificate
  giga: boolean | Nullish;
}

// Available time: 2020 Autumn ~ Now (2021 Autumn)
// Data source: SYLLABUS SEARCH
// URL: syllabus.sfc.keio.ac.jp
export interface CourseV2 {
  id: string; // non nullish
  // For seminar, it will be Column: Study Group Theme
  title: I18nData;
  // Column: Department Name
  department: GetEnumType<typeof EnumsV2.Departments>;
  lecturers: Lecturer[];
  schedule: Schedule;
  // Campus
  location: I18nData;
  // Column: Unit
  credit: number | Nullish;
  englishSupport: I18nData;
  url: I18nData;
  // Column: Equipments & Software
  tools: I18nData;
  // Column: Materials & Reading List
  teachingMaterials: I18nData;
  // Detail -> Course Summary
  summary: I18nData;
  // Detail -> Objectives / Intended Learning Outcome
  objectives: I18nData;
  // Detail -> Assignments, Examination & Grade Evaluation
  grading: I18nData;
  // Class Schedule
  plan: I18nData;
  registration: Registration;
  screening: Screening;
  // Column: Prerequisites -> Related Courses
  related: string | Nullish;
  // Original URL of the syllabus page
  syllabusURL: string | Nullish;
  tag: Tag;
  version: 2;
}
