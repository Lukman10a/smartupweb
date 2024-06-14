import Image from "next/image";
import React from "react";

export default function ClassActivityCard() {
  const CLASS_ACTIVITY = [
    {
      id: 1,
      title: "Assessment",
    },
    {
      id: 2,
      title: "Syllabus",
    },
    {
      id: 3,
      title: "Virtual Lectures",
    },
    {
      id: 4,
      title: "Lecture Quizzes",
    },
  ];

  return (
    <div>
      {CLASS_ACTIVITY.map((item) => (
        <div
          className="my-3 flex justify-between rounded-md bg-[#F8F9FB] p-3"
          key={item.id}
        >
          <div className="flex gap-2">
            <Image src={require("../../../public/assets/note.svg")} alt="" />
            <p>{item.title}</p>
          </div>
          <Image src={require("../../../public/assets/forward.svg")} alt="" />
        </div>
      ))}
    </div>
  );
}
