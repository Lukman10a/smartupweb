import { title } from "process";

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
  { title: "Lesson videos", logo: "/assets/video.svg", slug: "/lessonVideos" },
  {
    title: "SmartUp syllabus",
    logo: "/assets/smartup.svg",
    slug: "/syllabuses",
  },
  {
    title: "Practice questions",
    logo: "/assets/practice.svg",
    slug: "/practiceQuestion",
  },
  {
    title: "Exam practice questions",
    logo: "/assets/exam.svg",
    slug: "/examPracticeQuestion",
  },
];

interface ClassDataItem {
  title: string;
  id: number;
  subTitle: string;
}
export const CLASS: ClassDataItem[] = [
  { title: "Mathematics", subTitle: "20 participants", id: 1 },
  { title: "English", subTitle: "20 participants", id: 2 },
  { title: "B-Tech", subTitle: "20 participants", id: 3 },
  { title: "Chemistry", subTitle: "20 participants", id: 4 },
  { title: "Economics", subTitle: "20 participants", id: 5 },
  { title: "Agic", subTitle: "20 participants", id: 6 },
  { title: "Engineering", subTitle: "20 participants", id: 7 },
  { title: "Health Science", subTitle: "20 participants", id: 8 },
];

interface ClassSyllabusItem {
  title: string;
  subTitle1: string;
  subTitle2: string;
  subTitle3: string;
  id: number;
}

export const CLASSSYLLABUS_DATA: ClassSyllabusItem[] = [
  {
    title: "Topics",
    subTitle1: "Integration modules",
    subTitle2: "Peace and war dialogue",
    subTitle3: "Moral support and ethical values",
    id: 1,
  },
  {
    title: "Required textbooks",
    subTitle1: "Mastering English Book 1",
    subTitle2: "Junior English Project Book 1",
    subTitle3: "Moral support and ethical values",
    id: 2,
  },
  {
    title: "List of planned assignment",
    subTitle1: "Assessment on integration by Patrick Udoh",
    subTitle2: "Assessment on core values by Patrick Udoh",
    subTitle3: "Assessment on peace and war dialogue by Patrick Udoh",
    id: 3,
  },
];
