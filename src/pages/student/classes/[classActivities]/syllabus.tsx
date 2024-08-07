import ClassSyllabusCard from "@/components/classComponents/classSyllabusCard";
import { useRouter } from "next/router";
import React from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";

export default function Syllabus() {
  const { query, asPath } = useRouter();
  console.log({ query, asPath });

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-dm_sans text-2xl font-medium">
          {query.classActivities}
        </p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>

      <div className="rounded-md bg-white p-3">
        <div className="flex justify-between p-2">
          <p>Syllabus</p>
        </div>

        <ClassSyllabusCard />
      </div>
    </div>
  );
}
