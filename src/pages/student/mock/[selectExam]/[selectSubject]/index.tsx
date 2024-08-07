import ExamInstructions from "@/components/mockComponents/examInstructions";
import { useRouter } from "next/router";
import React from "react";
import {
  IoChevronBackCircleOutline,
  IoNotificationsCircleOutline,
} from "react-icons/io5";

export default function SelectSubject() {
  const { query } = useRouter();
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoChevronBackCircleOutline size={35} />
          <p className="font-dm_sans text-2xl font-medium">{query.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>

      <div className="rounded-md bg-white p-4">
        <div className="space-y-2">
          <p>HI Phil,</p>
          <p>
            You are about to write Math’s examination created by your class
            teacher.
          </p>
          <p className="py-2 text-[#D32D44]">Initiated By smartUp Tech</p>
        </div>
        <div className="space-y-2 rounded-md bg-[#F8F9FB] p-4">
          <p className="font-bold">
            Please read the following instructions before you continue:
          </p>
          <ExamInstructions />
        </div>
        <button className="my-8 mb-12 rounded-md bg-[#D32D44] p-2 px-12 text-white">
          <p>Start Examination</p>
        </button>
      </div>
    </section>
  );
}
