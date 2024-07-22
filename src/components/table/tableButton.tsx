import Image from "next/image";
import React from "react";
import previous from "@/../public/assets/previous.svg";
import next from "@/../public/assets/next.svg";

export default function TableButton() {
  return (
    <div className="mt-6 flex items-center gap-5">
      <button className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800">
        <Image src={previous} alt="" />
        <span>previous</span>
      </button>
      <button className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800">
        <span>Next</span>
        <Image src={next} alt="" />
      </button>
    </div>
  );
}
