const Departments = {
  ja: [
    '政策・メディア研究科',
    '教職課程センター',
    '総合政策・環境情報学部',
  ],
  en: [
    'MEDIA AND GOVERNANCE',
    'POLICY MANAGEMENT / ENVIRONMENT AND INFORMATION STUDIES',
    'TEACHER TRAINING CENTER',
  ],
} as const;

const Years = [
  2020,
  2021,
  2022,
] as const;

const Semesters = {
  ja: [
    '春学期',
    '秋学期',
  ],
  en: [
    'Fall',
    'Spring',
  ],
} as const;

const TimeStrings = {
  ja: [
    '月 1限',
    '月 2限',
    '月 3限',
    '月 4限',
    '月 5限',
    '月 6限',
    '木 1限',
    '木 2限',
    '木 3限',
    '木 4限',
    '木 5限',
    '木 6限',
    '木 7限',
    '未定 未定',
    '水 1限',
    '水 2限',
    '水 3限',
    '水 4限',
    '水 5限',
    '水 6限',
    '水 7限',
    '火 1限',
    '火 2限',
    '火 3限',
    '火 4限',
    '火 5限',
    '火 6限',
    '火 7限',
    '金 1限',
    '金 2限',
    '金 3限',
    '金 4限',
    '金 5限',
    '金 6限',
    '金 7限',
  ],
  en: [
    'Fri 1st',
    'Fri 2nd',
    'Fri 3rd',
    'Fri 4th',
    'Fri 5th',
    'Fri 6th',
    'Fri 7th',
    'Mon 1st',
    'Mon 2nd',
    'Mon 3rd',
    'Mon 4th',
    'Mon 5th',
    'Mon 6th',
    'TBD TBD',
    'Thu 1st',
    'Thu 2nd',
    'Thu 3rd',
    'Thu 4th',
    'Thu 5th',
    'Thu 6th',
    'Thu 7th',
    'Tue 1st',
    'Tue 2nd',
    'Tue 3rd',
    'Tue 4th',
    'Tue 5th',
    'Tue 6th',
    'Tue 7th',
    'Wed 1st',
    'Wed 2nd',
    'Wed 3rd',
    'Wed 4th',
    'Wed 5th',
    'Wed 6th',
    'Wed 7th',
  ],
} as const;

const Days = {
  ja: [
    '月',
    '木',
    '水',
    '火',
    '金',
    null,
  ],
  en: [
    'Fri',
    'Mon',
    'Thu',
    'Tue',
    'Wed',
    null,
  ],
} as const;

const Periods = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  null,
] as const;

const Spans = {
  ja: [
    null,
    '前半',
    '後半',
  ],
  en: [
    'First half',
    'Second half',
    null,
  ],
} as const;

const Locations = {
  ja: [
    'SFC',
    'TTCK',
    'その他',
  ],
  en: [
    'Other',
    'SFC',
    'TTCK',
  ],
} as const;

const Credits = [
  1,
  2,
  4,
] as const;

const Aspects = {
  ja: [
    '01:自然言語',
    '02:人工言語',
    '03:時間の流れ',
    '04:空間の広がり',
    '05:思想・宗教',
    '06:文化・芸術',
    '07:価値・交換',
    '08:役割・関係',
    '09:マネジメント',
    '10:学び',
    '11:ナノ',
    '12:細胞',
    '13:人間',
    '14:生物',
    '15:集団・企業',
    '16:まち・都市',
    '17:地方',
    '18:国',
    '19:地域圏',
    '20:地球・宇宙',
    '21:身体',
    '22:心',
    '23:ことば',
    '24:コミュニケーション',
    '25:システム',
    '26:ルール・制度',
    '27:自然',
    '28:デザイン',
    '29:人工物',
    '30:エネルギー',
    '31:観察・記述する',
    '32:測定・記録する',
    '33:分析・評価する',
    '34:解釈・意味づける',
    '35:モデル化・予測する',
    '36:考える',
    '37:協働する',
    '38:つくる',
    '39:表現する',
    '40:共有する',
  ],
  en: [
    '01:Natural Language',
    '02:Artificial Language',
    '03:Flow of Time',
    '04:Expanse of Space',
    '05:Thought and Religion',
    '06:Culture and Art',
    '07:Value and Exchange',
    '08:Role and Relation',
    '09:Management',
    '10:Learning',
    '11:Nano',
    '12:Cells',
    '13:Humans',
    '14:Living Things',
    '15:Groups and Enterprise',
    '16:Towns and Cities',
    '17:Regions',
    '18:Countries',
    '19:Regional Blocs',
    '20:Earth and Space',
    '21:Body',
    '22:Heart',
    '23:Words',
    '24:Communication',
    '25:Systems',
    '26:Rules and Institutions',
    '27:Nature',
    '28:Design',
    '29:Artifacts',
    '30:Energy',
    '31:Observe and Describe',
    '32:Measure and Record',
    '33:Analyze and Evaluate',
    '34:Interpret and Give Meaning',
    '35:Model and Forecast',
    '36:Think',
    '37:Cooperate',
    '38:Make',
    '39:Express',
    '40:Share',
  ],
} as const;

const Categories = {
  ja: [
    'プログラム科目',
    'プログラム科目-併設科目',
    'プロジェクト科目',
    '他学部等設置科目',
    '先端科目-環境情報系',
    '先端科目-総合政策系',
    '基盤科目-ウェルネス科目',
    '基盤科目-データサイエンス科目-データサイエンス１',
    '基盤科目-データサイエンス科目-データサイエンス２',
    '基盤科目-共通科目',
    '基盤科目-情報技術基礎科目',
    '基盤科目-総合講座科目',
    '基盤科目-言語コミュニケーション科目',
    '教職課程教科に関する科目',
    '特設科目',
    '研究プロジェクト科目',
    '研究支援科目−先端研究科目',
    '研究支援科目−概念科目',
    '自由科目',
  ],
  en: [
    'Advanced Subjects - Series of Environment And Information Studies',
    'Advanced Subjects - Series of Policy Management',
    'Courses Offered at Other Faculties',
    'Fundamental Subjects - Interdisciplinary Subjects',
    'Fundamental Subjects - Introductory Subjects',
    'Fundamental Subjects - Subjects of Data Science - Data Science 1',
    'Fundamental Subjects - Subjects of Data Science - Data Science 2',
    'Fundamental Subjects - Subjects of Fundamentals of Information Technology',
    'Fundamental Subjects - Subjects of Language Communication',
    'Fundamental Subjects - Wellness Subjects',
    'Optional Subjects',
    'Program Courses',
    'Program Courses - Heisetsu',
    'Project Courses',
    'Research Concept and Methodology Courses - Conceptual Framework',
    'Research Concept and Methodology Courses -Advanced Research Methods',
    'Research Seminars',
    'Special Courses',
    'Special Subjects',
    'Specialized Subjects in Teacher Training',
  ],
} as const;

const ClassFormats = {
  ja: [
    'オンライン（オンデマンド）',
    'オンライン（ライブ）',
    '対面',
  ],
  en: [
    'Face-to-face',
    'Online (Live)',
    'Online (On-demand)',
  ],
} as const;

const Types = {
  ja: [
    'グループワーク',
    '演習',
    '講義',
    '遠隔あり',
  ],
  en: [
    'Connecting to Other Sites',
    'Group Work',
    'Lecture',
    'Workshop',
  ],
} as const;

const Languages = {
  ja: [
    'その他外国語',
    'アラビア語',
    'イタリア語',
    'スペイン語',
    'ドイツ語',
    'フランス語',
    'マレーインドネシア語',
    'ロシア語',
    '中国語',
    '日本語',
    '朝鮮語',
    '英語',
  ],
  en: [
    'Arabic',
    'Chinese',
    'English',
    'French',
    'German',
    'Indonesia + Melayu',
    'Italian',
    'Japanese',
    'Korean',
    'Other Languages',
    'Russian',
    'Spanish',
  ],
}as const;

const EnumsV3 = {
  Departments,
  Years,
  Semesters,
  TimeStrings,
  Days,
  Periods,
  Spans,
  Locations,
  Credits,
  Aspects,
  Categories,
  ClassFormats,
  Types,
  Languages,
};

export default EnumsV3;
