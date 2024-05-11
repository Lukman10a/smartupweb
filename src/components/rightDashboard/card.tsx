import React from "react";
import { TfiCup } from "react-icons/tfi";

export default function Card() {
  return (
    <div className="bg-[#F8F9FB] rounded-md p-5 space-y-2 my-3">
      <div>
        <span>3,924 </span>
        <span>Points</span>
      </div>
      <div className="flex items-center justify-between gap-24">
        <p>Best score</p>
        <TfiCup />
      </div>
    </div>
  );
}
