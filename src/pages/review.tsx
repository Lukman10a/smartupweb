import AnswerReviewPage from "@/components/answerReviewPage";
import { useRouter } from "next/router";
import React from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";

export default function ReviewPage() {
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

      <section className="bg-white mt-5 rounded-md p-4 text-[#74595D]">
        <div className="">
          <p>Review answers</p>
          <AnswerReviewPage />
          <AnswerReviewPage />
          <AnswerReviewPage />
          <AnswerReviewPage />
        </div>
      </section>
    </div>
  );
}
