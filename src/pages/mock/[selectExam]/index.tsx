import Header from "@/components/header";
import ExamCard from "@/components/mockComponents/examCard";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  IoChevronBackCircleOutline,
  IoNotificationsCircleOutline,
} from "react-icons/io5";

interface Exam {
  id: number;
  title: string;
  slug: string;
}

export default function SelectExam() {
  const { query, asPath } = useRouter();
  const titleFromQuery = query.selectExam as string | undefined;

  const EXAM: Exam[] = [
    {
      id: 1,
      title: "Quantum Mathematics",
      slug: "/assessment",
    },
    {
      id: 2,
      title: "Chemical Engineering",
      slug: "/syllabus",
    },
    {
      id: 3,
      title: "Engineering",
      slug: "/virtual-lectures",
    },
    {
      id: 4,
      title: "Agric Science",
      slug: "/lecture-quizzes",
    },
  ];

  return (
    <section>
      <Header title={titleFromQuery} fromQuery={true} />
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for courses"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <div className="flex">
          <div className="flex gap-2 rounded-l-md bg-[#D32D4426] p-2">
            <p className="text-[#D32D44]">Total tests taken:</p>
            <p>53</p>
          </div>

          <p className="rounded-md bg-[#D32D44] p-2 text-white">View results</p>
        </div>
      </div>
      <div>
        <p className="py-4">Select an exam for {query.selectExam}.</p>
      </div>
      <div className="my-4 rounded-md bg-white p-3">
        {EXAM.map((item) => (
          <Link
            key={item.id}
            href={{
              pathname: `/mock/[selectExam]${item.slug}`,
              query: { type: item.title, title: item.title },
            }}
          >
            <ExamCard title={item.title} />
          </Link>
        ))}
      </div>
    </section>
  );
}
