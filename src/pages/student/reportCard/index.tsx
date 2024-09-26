import Header from "@/components/header";
import TableButton from "@/components/table/tableButton";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function ReportCard() {
  const [selectedTab, setSelectedTab] = useState("Approved result");

  // Sample data for each section
  const approvedResult = [
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

  const submittedResult = [
    { id: 1, name: "Sarah Connor", class: "Basic 6", grade: "A", score: 45 },
    { id: 2, name: "Kyle Reese", class: "Basic 6", grade: "B", score: 38 },
    { id: 3, name: "John Connor", class: "Basic 6", grade: "A", score: 50 },
    {
      id: 4,
      name: "Emmanuella Samantha",
      class: "Basic 4",
      grade: "B",
      score: 32,
    },
    { id: 5, name: "Adetoro Richard", class: "Basic 4", grade: "D", score: 18 },
    { id: 6, name: "Oyeleke Gabriel", class: "Basic 4", grade: "A", score: 37 },
  ];

  // Select which data to display based on selectedTab
  const getTableData = () => {
    switch (selectedTab) {
      case "Submitted result":
        return submittedResult;
      default:
        return approvedResult;
    }
  };
  return (
    <div>
      <Header title={"Report Card"} fromQuery={false} showNotificationIcon />

      {/* Tabs for selecting assessment type */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-10 border-b-2 border-[#D32D4440]">
          {["Approved result", "Submitted result"].map((tab) => (
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
      </div>

      {/* Filters */}
      <div className="mt-6 flex items-center justify-between gap-8 rounded-md bg-white p-3">
        <div className="relative">
          <IoSearch
            className="absolute left-3 top-2"
            color="#815259"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for a random result"
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
        <div className="flex items-center justify-between">
          <div className="font-medium text-[##0F0204]">
            <span className="text-sm font-semibold">Total score:</span>{" "}
            <span className="text-sm font-bold text-[#0F0204]">38</span>
          </div>

          <select className="rounded-md border border-[#E4E4E4] p-1 text-[#141515]">
            <option>Show 10 of 20</option>
            <option>Show 20 of 40</option>
          </select>
        </div>

        {/* Table for student results */}
        <div className="mt-4 rounded-md border-2 bg-white p-4">
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
        <div className="flex items-center justify-between py-4">
          <TableButton />
          <button className="rounded-md bg-[#D32D44] p-2 px-14 text-sm font-medium text-white">
            Send all results
          </button>
        </div>
      </div>
    </div>
  );
}
