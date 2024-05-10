
// interface LeftDataItem {
//     title: string;
//     logo: string;
// }


// export const LEFT_DATA: LeftDataItem[] = [
//     { title: "Profile", logo: "../assets/profile.svg" },
//     { title: "Classes", logo: "../assets/class.svg"},
//     { title: "Mock", logo: "../assets/mock.svg"},
//     { title: "Lesson videos", logo: "../assets/video.svg"},
//     { title: "SmartUp syllabus", logo: "../assets/smartup.svg"},
//     { title: "Practice questions", logo: "../assets/practice.svg"},
//     { title: "Exam practice questions", logo: "../assets/exam.svg"}
// ];


import { StaticImageData } from "next/image";


interface LeftDataItem {
    title: string;
    logo: StaticImageData;
}

export const LEFT_DATA: LeftDataItem[] = [
    { title: "Profile", logo: require("../assets/profile.svg") },
    { title: "Classes", logo: require("../assets/class.svg") },
    { title: "Mock", logo: require("../assets/mock.svg") },
    { title: "Lesson videos", logo: require("../assets/video.svg") },
    { title: "SmartUp syllabus", logo: require("../assets/smartup.svg") },
    { title: "Practice questions", logo: require("../assets/practice.svg") },
    { title: "Exam practice questions", logo: require("../assets/exam.svg") }
];
