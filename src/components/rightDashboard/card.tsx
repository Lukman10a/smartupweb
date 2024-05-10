import React from "react";
import { TfiCup } from "react-icons/tfi";

export default function Card() {
  return (
    <div className="bg-[#F8F9FB] rounded-md p-5">
      <div>
        <span>3,924 </span>
        <span>Points</span>
      </div>
      <div className="flex  items-center px-4">
        <TfiCup />
        <p>Best score</p>
      </div>
    </div>
  );
}
