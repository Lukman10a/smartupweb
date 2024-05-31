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
  question: String[];
}

export const PRACTICE_DATA: PracticeDataItem[] = [
  {
    title: "Mathematics",
    id: 1,
    question: [
      "General mathematics",
      "Algebra",
      "Quadratic equations",
      "Circle geometry",
      "Points, lines and planes",
      "Numeric methods",
      "Calculus",
      "Linear programming",
    ],
  },
  {
    title: "English",
    id: 2,
    question: [
      "new topic 1",
      "new topic 1",
      "new topic 1",
      "new topic 1",
      "new topic 2",
      "new topic 3",
      "new topic 4",
      "new topic 5",
    ],
  },
  {
    title: "Physics",
    id: 3,
    question: [
      "new topic 1",
      "new topic 1",
      "new topic 1",
      "new topic 1",
      "new topic 2",
      "new topic 3",
      "new topic 4",
      "new topic 5",
    ],
  },
  {
    title: "Chemistry",
    id: 4,
    question: [
      "new topic 1",
      "new topic 1",
      "new topic 1",
      "new topic 1",
      "new topic 2",
      "new topic 3",
      "new topic 4",
      "new topic 5",
    ],
  },
];
