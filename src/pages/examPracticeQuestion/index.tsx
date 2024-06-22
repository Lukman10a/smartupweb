import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import alevel from "../../../public/assets/alevel.svg";
import waec from "../../../public/assets/waec.svg";
import Link from "next/link";

type ExamPracticeQuestionProps = {
  titleFromQuery?: boolean;
};

export default function ExamPracticeQuestion({
  titleFromQuery,
}: ExamPracticeQuestionProps) {
  const EXAMS = [
    {
      title: "A Levels",
      img: alevel,
    },
    {
      title: "W.A.E.C",
      img: alevel,
    },
    {
      title: "J.A.M.B",
      img: waec,
    },
  ];

  return (
    <section>
      <Header
        title="Exam practice questions"
        fromQuery={Boolean(titleFromQuery)}
      />

      <div className="space-y-4 rounded-md bg-white p-6">
        <p>Pick an examination body.</p>

        {EXAMS.map((item) => (
          <div
            className="flex items-center justify-between rounded-md bg-[#F8F9FB] p-4"
            key={item.title}
          >
            <div className="flex items-center gap-2">
              <Image src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
            <Link
              href={{
                pathname: "/examPracticeQuestion/[courseSelect]",
                query: { courseSelect: item.title },
              }}
            >
              <button className="rounded-md bg-[#D32D44] p-2 px-6 text-white">
                <p>Start Examination </p>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
