// src/components/ResultReviewPage.jsx
import React, { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { selectedAnswersSelector } from "@/store/selector";

export default function ResultReviewPage() {
  const selectedAnswers = useSelector(selectedAnswersSelector);

  const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>(
    new Array(selectedAnswers.length).fill(false),
  );

  const toggleDropdown = (index: number) => {
    setVisibleAnswers((prevVisibleAnswers) =>
      prevVisibleAnswers.map((visible, i) =>
        i === index ? !visible : visible,
      ),
    );
  };

  return (
    <div>
      {selectedAnswers.map((item, index) => (
        <div className="mb-4 rounded-md bg-[#F8F9FB]" key={item.questionId}>
          <div
            className="m-4 flex cursor-pointer items-center justify-between rounded-md bg-white p-2"
            onClick={() => toggleDropdown(index)}
          >
            <div className="flex items-center gap-4">
              {item.isCorrect ? (
                <IoCheckmarkCircleSharp color={"#00A37D"} />
              ) : (
                <MdCancel color={"#D32D44"} />
              )}
              <p>{item.chosenQuestion}</p>
            </div>
            <RiArrowDropDownLine />
          </div>
          {visibleAnswers[index] && (
            <div className="m-4 rounded-md bg-white p-2 shadow-lg">
              <h3 className="text-[#AEAAABE5]">Answer</h3>
              <p className="py-4 text-[#74595D]">{item.chosenAnswer}</p>
              <p className={item.isCorrect ? "text-green-500" : "text-red-500"}>
                {item.isCorrect ? "Correct" : "Incorrect"}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
