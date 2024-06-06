import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function ResultReviewPage() {
  return (
    <div className="bg-[#F8F9FB] rounded-md p-2">
      <div className="bg-white p-2 m-4 flex items-center justify-between rounded-md">
        <div className="flex items-center gap-4">
          <IoCheckmarkCircleSharp color="#00A37D" />
          <p>Under what conditions are cathode rays produced?</p>
        </div>
        <RiArrowDropDownLine />
      </div>
    </div>
  );
}
