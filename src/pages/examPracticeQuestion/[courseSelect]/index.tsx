import Header from "@/components/header";
import Card from "@/components/rightDashboard/card";
import { useRouter } from "next/router";
import React from "react";

export default function CourseSelect() {
  const { query, asPath } = useRouter();
  const titleFromQuery = query.courseSelect as string | undefined;

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
        <p className="space-y-6 font-semibold">
          Select a course to take the examination.
        </p>

        <Card titlePoints={"dddd"} subtitle={"fff"} />
      </div>
    </div>
  );
}
