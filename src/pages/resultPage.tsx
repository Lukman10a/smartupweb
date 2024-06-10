import ResultReviewPage from "@/components/resultReviewPage";
import { useRouter } from "next/router";
import React from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";

export default function ResultPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-2xl font-dm_sans">Mathematics</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>
      <div className="flex bg-white items-center justify-between rounded-md mx-auto p-3">
        <p>General mathematics</p>
        <div className="flex gap-2">
          <p className="bg-[#D32D4426] text-[#D32D44] p-2 rounded-md">
            Cancel Test
          </p>
        </div>
      </div>

      <section className="bg-white mt-5 rounded-md p-4">
        <h2>Results</h2>
        <div className="p-2 flex gap-2">
          <div className="bg-[#F8F9FB] rounded-md p-2 ">
            <p>Performance accuracy</p>
          </div>
          <div className="bg-[#F8F9FB] rounded-md flex-grow p-2">
            <p>Review your answers</p>
            <ResultReviewPage />
          </div>
        </div>
      </section>
    </div>
  );
}
