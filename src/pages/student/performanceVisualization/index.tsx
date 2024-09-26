import Header from "@/components/header";
import TableButton from "@/components/table/tableButton";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function PerformanceVisualization() {
  const [selectedTab, setSelectedTab] = useState("Continuous Assessment");

  //   const Visual = [
  //     {
  //       title: "Performance visuals",
  //     },
  //   ];
  // Sample data for each section
  const continuousAssessmentData = [
    { id: 1, name: "Adetoro Richard", class: "Basic 4", grade: "B", score: 34 },
    { id: 2, name: "Johnson Taiwo", class: "Basic 4", grade: "C", score: 28 },
    { id: 3, name: "Oyeleke Gabriel", class: "Basic 4", grade: "A", score: 39 },
    {
      id: 4,
      name: "Emmanuella Samantha",
      class: "Basic 4",
      grade: "B",
      score: 32,
    },
    { id: 5, name: "Adetoro Richard", class: "Basic 4", grade: "D", score: 18 },
    { id: 6, name: "Oyeleke Gabriel", class: "Basic 4", grade: "A", score: 37 },
    { id: 7, name: "Adeniyi Mumeen", class: "Basic 4", grade: "B", score: 30 },
    { id: 8, name: "Adelani Stephen", class: "Basic 4", grade: "D", score: 20 },
    { id: 9, name: "Johnson Taiwo", class: "Basic 4", grade: "C", score: 29 },
    {
      id: 10,
      name: "Emmanuella Samantha",
      class: "Basic 4",
      grade: "C",
      score: 29,
    },
  ];

  const assignmentData = [
    { id: 1, name: "John Doe", class: "Basic 5", grade: "A", score: 40 },
    { id: 2, name: "Jane Doe", class: "Basic 5", grade: "B", score: 35 },
    { id: 3, name: "Jim Beam", class: "Basic 5", grade: "C", score: 30 },
  ];

  const examinationData = [
    { id: 1, name: "Sarah Connor", class: "Basic 6", grade: "A", score: 45 },
    { id: 2, name: "Kyle Reese", class: "Basic 6", grade: "B", score: 38 },
    { id: 3, name: "John Connor", class: "Basic 6", grade: "A", score: 50 },
  ];

  // Select which data to display based on selectedTab
  const getTableData = () => {
    switch (selectedTab) {
      case "Assignment":
        return assignmentData;
      case "Examination":
        return examinationData;
      default:
        return continuousAssessmentData;
    }
  };

  return (
    <div className="p-6">
      <Header
        title={"Performance Visualization"}
        fromQuery={false}
        showNotificationIcon
      />

      {/* Tabs for selecting assessment type */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-10 border-b-2 border-[#D32D4440]">
          {["Continuous Assessment", "Assignment", "Examination"].map((tab) => (
            <button
              key={tab}
              className={`border-b-2 py-2 ${
                selectedTab === tab
                  ? "border-[#D32D44] text-black"
                  : "border-[#D32D4440] text-[#0F020466]"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <Link
          href={{
            pathname: `/student/performanceVisualization/visuals`,
            query: { title: "Performance visuals" },
          }}
        >
          <button className="ml-auto rounded-md bg-[#D32D44] px-6 py-2 text-white">
            Check Performance Visuals
          </button>
        </Link>
      </div>

      {/* Filters */}
      <div className="mt-6 flex items-center gap-8 rounded-md bg-white p-3">
        <div className="relative flex-1">
          <IoSearch
            className="absolute left-3 top-2"
            color="#815259"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for a student result"
            className="w-full rounded-md bg-[#F8F9FB] p-2 px-10 text-sm text-[#815259]"
          />
        </div>
        <div className="space-x-2">
          <select className="rounded-md border border-[#E4E4E4] p-1 px-2 text-[#815259]">
            <option>Select class</option>
            <option>Basic 4</option>
            <option>Basic 5</option>
          </select>
          <select className="rounded-md border border-[#E4E4E4] p-1 px-2 text-[#815259]">
            <option>Select subject</option>
            <option>Mathematics</option>
            <option>English</option>
          </select>
          <select className="rounded-md border border-[#E4E4E4] p-1 px-2 text-[#815259]">
            <option>Select term</option>
            <option>First Term</option>
            <option>Second Term</option>
          </select>
          <select className="rounded-md border border-[#E4E4E4] p-1 px-2 text-[#815259]">
            <option>Select year</option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>
      </div>

      {/* Summary statistics */}
      <div className="mt-8 rounded bg-white p-4">
        <div className="flex justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-[#D32D441A] p-2 px-8 text-[#D32D44]">
              <span className="text-sm font-semibold text-[#D32D44]">
                Total score:
              </span>{" "}
              <span className="text-sm font-bold text-[#0F0204]">38</span>
            </div>

            <div className="rounded-md bg-[#D32D441A] p-2 px-8 text-[#D32D44]">
              <span className="text-sm font-semibold text-[#D32D44]">
                Best score:
              </span>{" "}
              <span className="text-sm font-bold text-[#0F0204]">38</span>
            </div>

            <div className="rounded-md bg-[#D32D441A] p-2 px-8 text-[#D32D44]">
              <span className="text-sm font-semibold text-[#D32D44]">
                Average score:
              </span>{" "}
              <span className="text-sm font-bold text-[#0F0204]">38</span>
            </div>
          </div>
          <select className="rounded-md border border-[#E4E4E4] p-1 text-[#141515]">
            <option>Show 10 of 20</option>
            <option>Show 20 of 40</option>
          </select>
        </div>

        {/* Table for student results */}
        <div className="mt-6 rounded-md border-2 bg-white p-4">
          <table className="w-full">
            <thead className="">
              <tr className="text-left">
                <th className="text-sm text-[#0F0204]">Id</th>
                <th className="text-sm text-[#0F0204]">Full name</th>
                <th className="text-sm text-[#0F0204]">Class</th>
                <th className="text-sm text-[#0F0204]">Grade</th>
                <th className="text-sm text-[#0F0204]">Score</th>
                <th className="text-sm text-[#0F0204]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {getTableData().map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="py-2">{student.id}</td>
                  <td className="font-[#815259] text-sm">{student.name}</td>
                  <td className="font-[#815259] text-sm">{student.class}</td>
                  <td className="font-[#815259] text-sm">{student.grade}</td>
                  <td className="font-[#815259] text-sm">{student.score}</td>
                  <td>
                    <button className="rounded-md bg-[#D32D441A] p-1 px-4 text-xs text-[#D32D44]">
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="rounded-md bg-[#F2F5FF] p-1 px-4 text-xs text-[#0F0204]">
                      View detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-4">
          <TableButton />
        </div>
      </div>
    </div>
  );
}
