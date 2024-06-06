import React from "react";

export default function answerReviewPage() {
  return (
    <div className="bg-[#F8F9FB] rounded-md p-2 m-2 ">
      <div className="border-b-2 p-6">
        <p>Question 1</p>
        <p className="font-normal text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a new form??
        </p>
      </div>
      <div className="flex justify-between p-6">
        <p>Your answer : B</p>
        <p className="text-[#D32D44]">Change answer</p>
      </div>
    </div>
  );
}
