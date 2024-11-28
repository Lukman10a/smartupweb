import Header from "@/components/header";
import Image from "next/image";
import React, { useState } from "react";
import note500 from "../../../public/assets/note500.svg";

// Interfaces
interface Question {
  id: number;
  question: string;
  options: string[];
}

interface QuestionsByClass {
  [classKey: string]: Question[];
}

interface QuestionsBySubject {
  [subjectKey: string]: QuestionsByClass;
}

export default function Mock() {
  const [activeButton, setActiveButton] = useState<string>(
    "Local repo questions",
  );
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");

  const questions: QuestionsBySubject = {
    math: {
      class1: [
        { id: 1, question: "What is 2 + 2?", options: ["2", "3", "4", "5"] },
        { id: 2, question: "What is 5 - 3?", options: ["1", "2", "3", "4"] },
      ],
      class2: [
        { id: 1, question: "What is 10 / 2?", options: ["2", "3", "4", "5"] },
        { id: 2, question: "What is 3 * 3?", options: ["6", "7", "8", "9"] },
      ],
    },
    science: {
      class1: [
        {
          id: 1,
          question: "What is H2O?",
          options: ["Oxygen", "Water", "Gas", "Carbon"],
        },
        {
          id: 2,
          question: "What is the sun?",
          options: ["Planet", "Star", "Gas", "Asteroid"],
        },
      ],
      class2: [
        {
          id: 1,
          question: "What is the boiling point of water?",
          options: ["90°C", "100°C", "80°C", "110°C"],
        },
        {
          id: 2,
          question: "What is photosynthesis?",
          options: ["Making food", "Eating food", "Sleeping", "Walking"],
        },
      ],
    },
  };

  const handleButtonClick = (text: string): void => {
    setActiveButton(text);
  };

  const handleSubjectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setSelectedSubject(e.target.value);
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedClass(e.target.value);
  };

  const displayedQuestions: Question[] =
    selectedSubject && selectedClass
      ? questions[selectedSubject]?.[selectedClass] || []
      : [];

  return (
    <div>
      <Header title={"Mock"} fromQuery={false} showNotificationIcon />
      <section className="flex justify-around rounded-lg bg-white p-4">
        {[
          "Local repo questions",
          "Create questions",
          "Create examination",
          "View results",
        ].map((buttonText, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(buttonText)}
            className={`rounded-md p-2 px-8 ${
              activeButton === buttonText
                ? "bg-[#D32D441A] text-[#D32D44]"
                : "bg-[#F3F4F6] text-black"
            }`}
          >
            {buttonText}
          </button>
        ))}
      </section>

      {/* Render based on activeButton */}
      <section className="my-8 rounded-lg bg-white p-8">
        {activeButton === "Local repo questions" && (
          <div className="flex justify-between gap-4">
            <h2 className="mb-4 text-lg font-semibold">{activeButton}</h2>

            <div className="space-x-4">
              <select
                className="w-72 rounded-lg bg-[#F9FAFB] p-3 text-sm text-[#9CA3AF] shadow-sm focus:border-[#D32D44] focus:outline-none focus:ring-1 focus:ring-[#D32D44]"
                value={selectedSubject}
                onChange={handleSubjectChange}
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="math">Math</option>
                <option value="science">Science</option>
              </select>

              <select
                className="w-72 rounded-lg bg-[#F9FAFB] p-3 text-sm text-[#9CA3AF] shadow-sm focus:border-[#D32D44] focus:outline-none focus:ring-1 focus:ring-[#D32D44]"
                value={selectedClass}
                onChange={handleClassChange}
              >
                <option value="" disabled>
                  Select a class
                </option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
              </select>
            </div>
          </div>
        )}

        {activeButton === "Local repo questions" &&
        displayedQuestions.length > 0 ? (
          <div className="mt-8">
            {displayedQuestions.map((q) => (
              <div
                key={q.id}
                className="mb-6 rounded-lg bg-[#F8F9FB] p-4 shadow-sm"
              >
                <h3 className="mb-2 text-sm font-medium text-[#9D9C9CE5]">
                  Question {q.id}
                </h3>
                <p className="mb-4 text-base text-[#3B2D2F]">{q.question}</p>
                <h3 className="mb-2 border-t-2 pt-6 text-sm font-medium text-[#9D9C9CE5]">
                  Options
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {q.options.map((option, index) => (
                    <div
                      key={index}
                      className="rounded-lg p-3 text-sm font-medium"
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center text-center">
            <div className="rounded-full bg-[#F8F9FB] p-6">
              <Image src={note500} alt="note500" className="h-20 w-20" />
            </div>
            <p className="mt-6 text-lg">About 500 questions available</p>
            <p className="mt-2 text-sm text-[#7D8590]">
              Select a class and subject to access our plethora of local
              repository questions.
            </p>
          </div>
        )}

        {/* CREATE QUESTIONS */}
        {activeButton === "Create questions" && (
          <div>
            <h3 className="mb-6 text-lg font-medium">Create Questions</h3>
            <div className="flex gap-4">
              {/* Subject dropdown */}
              <select
                className="w-72 rounded-lg bg-[#F9FAFB] p-3 text-sm text-[#9CA3AF] shadow-sm focus:border-[#D32D44] focus:outline-none focus:ring-1 focus:ring-[#D32D44]"
                value={selectedSubject}
                onChange={handleSubjectChange}
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="math">Math</option>
                <option value="science">Science</option>
              </select>
              {/* Class dropdown */}
              <select
                className="w-72 rounded-lg bg-[#F9FAFB] p-3 text-sm text-[#9CA3AF] shadow-sm focus:border-[#D32D44] focus:outline-none focus:ring-1 focus:ring-[#D32D44]"
                value={selectedClass}
                onChange={handleClassChange}
              >
                <option value="" disabled>
                  Select a class
                </option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
              </select>
            </div>

            {selectedSubject && selectedClass && (
              <div className="mt-8">
                <h4 className="text-sm font-medium text-[#7D8590]">
                  Question Detail
                </h4>
                <textarea
                  className="mt-2 w-full rounded-lg bg-[#F9FAFB] p-3 shadow-sm focus:border-[#D32D44] focus:outline-none focus:ring-1 focus:ring-[#D32D44]"
                  rows={4}
                  placeholder="Type in the details of the question here..."
                ></textarea>

                <h4 className="mt-6 text-sm font-medium text-[#7D8590]">
                  Solution
                </h4>
                <textarea
                  className="mt-2 w-full rounded-lg bg-[#F9FAFB] p-3 shadow-sm focus:border-[#D32D44] focus:outline-none focus:ring-1 focus:ring-[#D32D44]"
                  rows={4}
                  placeholder="Type in the solution of the question here..."
                ></textarea>

                <div className="mt-6 flex justify-end gap-4">
                  <button className="rounded-md bg-[#F8F9FB] px-4 py-2 text-[#D32D44]">
                    Preview
                  </button>
                  <button className="rounded-md bg-[#D32D44] px-4 py-2 text-white">
                    Create
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
