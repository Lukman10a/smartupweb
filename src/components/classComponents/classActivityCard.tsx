import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ClassActivityCard({ path }: { path: string }) {
  const CLASS_ACTIVITY = [
    {
      id: 1,
      title: "Assessment",
      slug: "/assessment",
    },
    {
      id: 2,
      title: "Syllabus",
      slug: "/syllabus",
    },
    {
      id: 3,
      title: "Virtual Lectures",
      slug: "/virtual-qectures",
    },
    {
      id: 4,
      title: "Lecture Quizzes",
      slug: "/lecture-quizzes",
    },
  ];

  return (
    <div>
      {CLASS_ACTIVITY.map((item) => (
        <Link
          href={{
            pathname: `${path}${item.slug}`,
            query: { type: item.title },
          }}
          className="my-3 flex justify-between rounded-md bg-[#F8F9FB] p-3"
          key={item.id}
        >
          <div className="flex gap-2">
            <Image src={require("../../../public/assets/note.svg")} alt="" />
            <p>{item.title}</p>
          </div>
          <Image src={require("../../../public/assets/forward.svg")} alt="" />
        </Link>
      ))}
    </div>
  );
}
