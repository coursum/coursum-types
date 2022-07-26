import EnumsV3 from '../enums/EnumsV3';
import type {
  GetEnumElementType, GetI18nEnumType, I18nData, Locales, Nullish,
} from '../util';

// TODO: make a more strict type to ensure that Enum Array does not have duplicate

interface Lecturer {
  // Column: Lecturer Name
  name: I18nData;
}

// TODO: seperate type definition for the case of TBD (To be decided) time
type Time = {
  [locale in Locales]: ({
    string: GetEnumElementType<typeof EnumsV3.TimeStrings[locale]>;
    day: GetEnumElementType<typeof EnumsV3.Days[locale]>;
    period: GetEnumElementType<typeof EnumsV3.Periods>;
  } | Nullish)[];
};

interface Schedule {
  // Column: Year/Semester
  year: GetEnumElementType<typeof EnumsV3.Years>;
  // Column: Year/Semester
  semester: GetI18nEnumType<typeof EnumsV3.Semesters>;
  // Column: Day of Week・Period
  times: Time[];
  // Title 1st Half / 2nd Half
  span: GetI18nEnumType<typeof EnumsV3.Spans>;
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

type Aspect<locale extends Locales> = GetEnumElementType<typeof EnumsV3.Aspects[locale]>
type Type<locale extends Locales> = GetEnumElementType<typeof EnumsV3.Types[locale]>

interface Tag {
  // Column: Aspect name
  aspects: { [locale in Locales]: Aspect<locale>[] | Nullish };
  // Column: Field (Undergraduate)
  category: GetI18nEnumType<typeof EnumsV3.Categories>;
  // Column: Class Format
  // Online / On campus
  classFormat: GetI18nEnumType<typeof EnumsV3.ClassFormats>;
  // Column: Class Style
  types: { [locale in Locales]: Type<locale>[] | Nullish };
  language: GetI18nEnumType<typeof EnumsV3.Languages>;
  // Column: Subject Sort
  curriculumCode: string | Nullish; // ???
  // Column: GIGA Certificate
  giga: boolean | Nullish;
}

type Locations<locale extends Locales> = GetEnumElementType<typeof EnumsV3.Locations[locale]>

// Available time: 2020 Autumn ~ Now (2021 Autumn)
// Data source: SYLLABUS SEARCH
// URL: syllabus.sfc.keio.ac.jp
export interface CourseV3 {
  id: string; // non nullish
  // identicalCourses:
  // For seminar, it will be Column: Study Group Theme
  title: I18nData;
  // Column: Department Name
  department: GetI18nEnumType<typeof EnumsV3.Departments>;
  lecturers: Lecturer[];
  schedule: Schedule;
  // Campus
  location: { [locale in Locales]: Locations<locale>[] | Nullish };
  // Column: Unit
  credit: GetEnumElementType<typeof EnumsV3.Credits>;
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
  version: 3;
}
