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