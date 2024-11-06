interface LeftDataItem {
  title: string;
  logo: string;
  slug: string;
}

export const LEFT_DATA: LeftDataItem[] = [
  {
    title: "Dashboard",
    logo: "/assets/dashboard.svg",
    slug: "/student/dashboard",
  },
  { title: "Profile", logo: "/assets/profile.svg", slug: "/student/profile" },
  { title: "Classes", logo: "/assets/class.svg", slug: "/student/classes" },
  { title: "Mock", logo: "/assets/mock.svg", slug: "/student/mock" },
  {
    title: "Lesson videos",
    logo: "/assets/video.svg",
    slug: "/student/lessonVideos",
  },
  {
    title: "SmartUp syllabus",
    logo: "/assets/smartup.svg",
    slug: "/student/syllabuses",
  },
  {
    title: "Practice questions",
    logo: "/assets/practice.svg",
    slug: "/student/practiceQuestion",
  },
  {
    title: "Exam practice questions",
    logo: "/assets/exam.svg",
    slug: "/student/examPracticeQuestion",
  },
  {
    title: "Settings",
    logo: "/assets/exam.svg",
    slug: "/student/settings",
  },
  {
    title: "Performance Visualization",
    logo: "/assets/visuals.svg",
    slug: "/student/performanceVisualization",
  },
  {
    title: "Report Card",
    logo: "/assets/award.svg",
    slug: "/student/reportCard",
  },
];

export const INSTITUTION_SIDEBAR = [
  {
    title: "Dashboard",
    logo: "/assets/dashboard.svg",
    slug: "/institution/dashboard",
  },
  {
    title: "Classes",
    logo: "/assets/class.svg",
    slug: "/institution/classes",
  },
  {
    title: "Smartup",
    logo: "/assets/smart-up.svg",
    slug: "/institution/smartup",
  },
  {
    title: "Students",
    logo: "/assets/exam.svg",
    slug: "/institution/student",
  },
  {
    title: "Educator",
    logo: "/assets/educator.svg",
    slug: "/institution/educator",
  },
  {
    title: "Performance visualization",
    logo: "/assets/performance.svg",
    slug: "/institution/performance",
  },
];

export const EDUCATOR_SIDEBAR: LeftDataItem[] = [
  {
    title: "Dashboard",
    logo: "/assets/dashboard.svg",
    slug: "/educator/dashboard",
  },
  { title: "Classes", logo: "/assets/class.svg", slug: "/educator/classes" },
  { title: "Mock", logo: "/assets/mock.svg", slug: "/educator/mock" },
  {
    title: "Test questions",
    logo: "/assets/test.svg",
    slug: "/educator/testQuestions",
  },
  {
    title: "Training videos",
    logo: "/assets/training.svg",
    slug: "/educator/trainingVideos",
  },
  {
    title: "Exam questions",
    logo: "/assets/exam.svg",
    slug: "/educator/syllabuses",
  },
  {
    title: "Performance history",
    logo: "/assets/exam.svg",
    slug: "/educator/performance",
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
  { title: "Agric", subTitle: "20 participants", id: 6 },
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

interface MockDataItem {
  subject: string;
  id: number;
  noOfExams: string;
}

export const MOCK: MockDataItem[] = [
  { subject: "Math's - JSS1", noOfExams: "25 topics", id: 1 },
  { subject: "English - JSS1", noOfExams: "17 topics", id: 2 },
  { subject: "B. Tech - JSS1", noOfExams: "20 topics", id: 3 },
  { subject: "Chemistry", noOfExams: "20 participants", id: 4 },
  { subject: "Economics", noOfExams: "20 participants", id: 5 },
  { subject: "Agic", noOfExams: "20 participants", id: 6 },
  { subject: "Engineering", noOfExams: "20 participants", id: 7 },
  { subject: "Health Science", noOfExams: "20 participants", id: 8 },
];

export const PROFILE = [
  {
    id: 1,
    name: "Adams Benjamin",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    content:
      "Good afternoon sir, I’m texting to notify you that I have not ...",
    time: "30 mins ago",
  },
  {
    id: 2,
    name: "Adams Benjamin",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    content:
      "Good afternoon sir, I’m texting to notify you that I have not ...",
    time: "30 hours ago",
  },
  {
    id: 3,
    name: "Adams Benjamin",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    content:
      "Good afternoon sir, I’m texting to notify you that I have not ...",
    time: "04:22 PM",
  },
  {
    id: 4,
    name: "Veronica Thomas",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    content:
      "Good afternoon sir, I’m texting to notify you that I have not ...",
    time: "2 days ago",
  },
  {
    id: 5,
    name: "Adams Benjamin",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    content:
      "Good afternoon sir, I’m texting to notify you that I have not ...",
    time: "5 days ago",
  },
  {
    id: 6,
    name: "Adams Benjamin",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    content:
      "Good afternoon sir, I’m texting to notify you that I have not ...",
    time: "5 days ago",
  },
  {
    id: 7,
    name: "Veronica Thomas",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    content:
      "Good afternoon sir, I’m texting to notify you that I have not ...",
    time: "2 days ago",
  },
  {
    id: 8,
    name: "Adams Benjamin",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    content:
      "Good afternoon sir, I’m texting to notify you that I have not ...",
    time: "30 hours ago",
  },
];

export const ANNOUNCEMENTS = [
  {
    id: 1,
    title:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
    description:
      "It is a long established fact that a reader will be distracted by the of letters, as opposed to using 'Content here, content here', making it look like readable letters, as opposed to using English.",
    date: "30 mins ago | 24-05-2024",
  },
  {
    id: 1,
    title:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
    description:
      "It is a long established fact that a reader will be distracted by the of letters, as opposed to using 'Content here, content here', making it look like readable letters, as opposed to using English.",
    date: "30 mins ago | 24-05-2024",
  },
  {
    id: 1,
    title:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
    description:
      "It is a long established fact that a reader will be distracted by the of letters, as opposed to using 'Content here, content here', making it look like readable letters, as opposed to using English.",
    date: "30 mins ago | 24-05-2024",
  },
  {
    id: 1,
    title:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
    description:
      "It is a long established fact that a reader will be distracted by the of letters, as opposed to using 'Content here, content here', making it look like readable letters, as opposed to using English.",
    date: "30 mins ago | 24-05-2024",
  },
  {
    id: 1,
    title:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
    description:
      "It is a long established fact that a reader will be distracted by the of letters, as opposed to using 'Content here, content here', making it look like readable letters, as opposed to using English.",
    date: "30 mins ago | 24-05-2024",
  },
  {
    id: 1,
    title:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
    description:
      "It is a long established fact that a reader will be distracted by the of letters, as opposed to using 'Content here, content here', making it look like readable letters, as opposed to using English.",
    date: "30 mins ago | 24-05-2024",
  },
];
