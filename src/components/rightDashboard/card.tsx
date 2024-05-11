import React from "react";
import { TfiCup } from "react-icons/tfi";

export default function Card() {
  return (
    <div className="bg-[#F8F9FB] rounded-md p-5 space-y-2 my-3">
      <div>
        <span className="font-semibold text-xl">3,924 </span>
        <span className="font-light text-base">Points</span>
      </div>
      <div className="flex items-center justify-between gap-24">
        <p className="font-light text-base text[#815259]">Best score</p>
        <TfiCup color="#815259" />
      </div>
    </div>
  );
}
