import Header from "@/components/header";
import ExamPracticeModal from "@/components/modal/examPracticeModal";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function CourseSelect() {
  const { query, asPath } = useRouter();
  const titleFromQuery = query.courseSelect as string | undefined;

  console.log(asPath);

  const [currentCard, setCurrentCard] = useState({
    title: "",
    slug: "",
  });

  const COURSE_DATA = [
    {
      id: 1,
      title: "Mathematics",
      slug: "/mathematics",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 2,
      title: "English Language",
      slug: "/english",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 3,
      title: "Chemistry",
      slug: "/chemistry",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 4,
      title: "Economics",
      slug: "/economics",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 5,
      title: "Government",
      slug: "/government",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 6,
      title: "Literature in English",
      slug: "/literature",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 7,
      title: "Geography",
      slug: "/geography",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 8,
      title: "Commerce",
      slug: "/commerce",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 9,
      title: "Financial Account",
      slug: "/finance",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 10,
      title: "Account",
      slug: "/account",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 11,
      title: "Physiology",
      slug: "/physiology",
      image: require("../../../../../public/assets/jamb.svg"),
    },
    {
      id: 12,
      title: "Further Mathematics",
      slug: "/further-mathematics",
      image: require("../../../../../public/assets/jamb.svg"),
    },
  ];

  return (
    <div>
      <Header title={titleFromQuery} fromQuery={Boolean(titleFromQuery)} />

      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for courses"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <div className="flex">
          <div className="flex gap-2 rounded-l-md bg-[#D32D4426] p-2">
            <p className="text-[#D32D44]">Total courses available:</p>
            <p>12</p>
          </div>
        </div>
      </div>

      <div>
        <p className="py-4 font-semibold">
          Select a course to take the examination.
        </p>

        <ExamPracticeModal
          name={currentCard.title}
          slug={currentCard.slug}
          path={query.courseSelect}
        >
          <div className="grid grid-cols-4 gap-6 rounded-md bg-white p-3">
            {COURSE_DATA.map((item) => (
              <button
                className="flex flex-col items-center justify-center gap-2 rounded-md bg-[#F8F9FB] p-4 px-10"
                key={item.id}
                onClick={() =>
                  setCurrentCard({ title: item.title, slug: item.slug })
                }
              >
                <Image
                  src={require("../../../../../public/assets/jamb.svg")}
                  alt=""
                />
                <p className="font-semibold">{item.title}</p>
              </button>
            ))}
          </div>
        </ExamPracticeModal>
      </div>
    </div>
  );
}
