interface LeftDataItem {
  title: string;
  logo: string;
  slug: string;
}

export const LEFT_DATA: LeftDataItem[] = [
  { title: "Dashboard", logo: "/assets/dashboard.svg", slug: "/" },
  { title: "Profile", logo: "/assets/profile.svg", slug: "/profile" },
  { title: "Classes", logo: "/assets/class.svg", slug: "/classes" },
  { title: "Mock", logo: "/assets/mock.svg", slug: "/mock" },
  { title: "Lesson videos", logo: "/assets/video.svg", slug: "/classes" },
  { title: "SmartUp syllabus", logo: "/assets/smartup.svg", slug: "/classes" },
  {
    title: "Practice questions",
    logo: "/assets/practice.svg",
    slug: "/practiceQuestion",
  },
  {
    title: "Exam practice questions",
    logo: "/assets/exam.svg",
    slug: "/classes",
  },
];

interface PracticeDataItem {
  title: string;
  id: number;
  question: { topic: string }[];
}

export const PRACTICE_DATA: PracticeDataItem[] = [
  {
    title: "Mathematics",
    id: 1,
    question: [
      { topic: "General mathematics" },
      { topic: "Algebra" },
      { topic: "Quadratic equations" },
      { topic: "Circle geometry" },
      { topic: "Points, lines and planes" },
      { topic: "Numeric methods" },
      { topic: "Calculus" },
      { topic: "Linear programming" },
    ],
  },
  {
    title: "English",
    id: 2,
    question: [
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 2" },
      { topic: "new topic 3" },
      { topic: "new topic 4" },
      { topic: "new topic 5" },
    ],
  },
  {
    title: "Physics",
    id: 3,
    question: [
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 2" },
      { topic: "new topic 3" },
      { topic: "new topic 4" },
      { topic: "new topic 5" },
    ],
  },
  {
    title: "Chemistry",
    id: 4,
    question: [
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 1" },
      { topic: "new topic 2" },
      { topic: "new topic 3" },
      { topic: "new topic 4" },
      { topic: "new topic 5" },
    ],
  },
];

interface AnswerDataItem {
  title: string;
  id: number;
}
export const ANSWER: AnswerDataItem[] = [
  { title: "Points, lines and planes", id: 1 },
  { title: "Points, lines and planes", id: 2 },
  { title: "Points, lines and planes", id: 3 },
  { title: "Points, lines and planes", id: 4 },
];

[
  {
    id: "26271705-7378-4024-99e6-6e129f95b211",
    created_at: "2022-11-02T03:23:40.825Z",
    updated_at: "2022-11-02T03:23:40.825Z",
    errors: {},
    score: "0.0",
    name: "Question2",
    plan_ids: [],
    plans: [],
    question_image_url: null,
    solution_image_url: null,
    solution: "",
    description: "What is 11 + 11?",
    topic_id: "7ab659c4-e88c-46e5-8dcf-4e19772db8de",
    survey_id: null,
    study_group_id: null,
    institution_id: null,
    year_id: null,
    answer_options: [
      {
        id: "c71f681c-0789-4acf-b800-80c1c56be1a5",
        created_at: "2022-11-02T03:23:40.915Z",
        updated_at: "2022-11-02T03:23:40.915Z",
        errors: {},
        rank: null,
        content: "0",
        content_image_url: null,
        question_id: "26271705-7378-4024-99e6-6e129f95b211",
        correct: false,
      },
      {
        id: "a21246d6-0f1c-4d78-b0e0-bdfe5583a800",
        created_at: "2022-11-02T03:23:40.899Z",
        updated_at: "2022-11-02T03:23:40.899Z",
        errors: {},
        rank: null,
        content: "22",
        content_image_url: null,
        question_id: "26271705-7378-4024-99e6-6e129f95b211",
        correct: true,
      },
      {
        id: "b8d32619-09db-46d5-a604-60ad36931816",
        created_at: "2022-11-02T03:23:40.882Z",
        updated_at: "2022-11-02T03:23:40.882Z",
        errors: {},
        rank: null,
        content: "11",
        content_image_url: null,
        question_id: "26271705-7378-4024-99e6-6e129f95b211",
        correct: false,
      },
      {
        id: "8fa3de3e-3118-4a89-a124-17b50d08d095",
        created_at: "2022-11-02T03:23:40.838Z",
        updated_at: "2022-11-02T03:23:40.838Z",
        errors: {},
        rank: null,
        content: "12",
        content_image_url: null,
        question_id: "26271705-7378-4024-99e6-6e129f95b211",
        correct: false,
      },
    ],
    question_type: "choice",
    header: null,
    multiple: false,
  },
  {
    id: "702971da-1398-420a-856c-a043ea5c2230",
    created_at: "2022-11-02T03:11:18.793Z",
    updated_at: "2022-11-02T03:11:18.793Z",
    errors: {},
    score: "0.0",
    name: "Question01",
    plan_ids: [],
    plans: [],
    question_image_url: null,
    solution_image_url: null,
    solution: "",
    description:
      "Add the following numbers without carrying or remainder.\n25 and 13",
    topic_id: "7ab659c4-e88c-46e5-8dcf-4e19772db8de",
    survey_id: null,
    study_group_id: null,
    institution_id: null,
    year_id: null,
    answer_options: [
      {
        id: "dbf29c0b-7639-4667-a523-d1c900552e28",
        created_at: "2022-11-02T03:11:18.899Z",
        updated_at: "2022-11-02T03:11:18.899Z",
        errors: {},
        rank: null,
        content: "15",
        content_image_url: null,
        question_id: "702971da-1398-420a-856c-a043ea5c2230",
        correct: false,
      },
      {
        id: "9c99528a-fb8c-4a9b-8084-a7a62e3b7e08",
        created_at: "2022-11-02T03:11:18.878Z",
        updated_at: "2022-11-02T03:11:18.878Z",
        errors: {},
        rank: null,
        content: "12",
        content_image_url: null,
        question_id: "702971da-1398-420a-856c-a043ea5c2230",
        correct: false,
      },
      {
        id: "caf297f3-8bb8-4d33-b8cd-a65aa5b14ded",
        created_at: "2022-11-02T03:11:18.854Z",
        updated_at: "2022-11-02T03:11:18.854Z",
        errors: {},
        rank: null,
        content: "38",
        content_image_url: null,
        question_id: "702971da-1398-420a-856c-a043ea5c2230",
        correct: true,
      },
      {
        id: "9cdaa940-c358-49b4-beaa-2db3088697e2",
        created_at: "2022-11-02T03:11:18.819Z",
        updated_at: "2022-11-02T03:11:18.819Z",
        errors: {},
        rank: null,
        content: "25",
        content_image_url: null,
        question_id: "702971da-1398-420a-856c-a043ea5c2230",
        correct: false,
      },
    ],
    question_type: "choice",
    header: null,
    multiple: false,
  },
];
