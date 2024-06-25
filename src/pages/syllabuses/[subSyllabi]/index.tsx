import Header from "@/components/header";
import { useRouter } from "next/router";
import React from "react";

export default function SubSyllabi() {
  const { query } = useRouter();
  return (
    <div>
      <Header title={query.subject} fromQuery={false} />

      <div className="mx-auto my-6 flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for topics here..."
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
        <p className="py-6 font-semibold">
          Select a topic to view a dropdown of sub-syllabi.
        </p>

        <div className="rounded-md bg-white p-3">
          <div className="rounded-md bg-[#AEAAABE5] p-3"></div>
        </div>
      </div>
    </div>
  );
}
