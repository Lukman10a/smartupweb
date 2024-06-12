import React, { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function ResultReviewPage() {
  const RESULT_DATA = [
    {
      question: "Under what conditions are cathode rays produced?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "what are the conditions of cathode rays ?",
      answer:
        " established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Under what conditions are cathode rays produced?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Under what conditions are cathode rays produced?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  const [showDropdown, setShowDropdown] = useState(false); // State to track dropdown visibility

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown visibility
  };

  return (
    <div>
      {RESULT_DATA.map((item) => (
        <div className="bg-[#F8F9FB] rounded-md" key={item.question}>
          <div
            className="bg-white p-2 m-4 flex items-center justify-between rounded-md cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="flex items-center gap-4">
              <IoCheckmarkCircleSharp color="#00A37D" />
              <p>{item.question}</p>
            </div>
            <RiArrowDropDownLine />
          </div>
          {showDropdown && ( // Conditionally render the dropdown content
            <div className="bg-white p-2 mt-2 rounded-md shadow-lg">
              <h3>Answer</h3>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
