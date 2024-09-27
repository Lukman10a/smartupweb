import Header from "@/components/header";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { IoSearch } from "react-icons/io5";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Link from "next/link";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

export default function Visuals() {
  const [selectedTab, setSelectedTab] = useState("Continuous Assessment");

  const { query, asPath } = useRouter();
  console.log(query, asPath);

  // Data for bar charts
  const barData = {
    labels: ["1st term", "2nd term", "3rd term"],
    datasets: [
      {
        label: "Average Score",
        data: [80, 90, 80],
        backgroundColor: "#D32D44",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  // Data for pie charts
  const pieData = {
    labels: ["1st Term Score: 80", "2nd Term Score: 90", "3rd Term Score: 80"],
    datasets: [
      {
        label: "Scores",
        data: [80, 90, 80],
        backgroundColor: ["#D32D44", "#FF8A92", "#CC434D"],
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <Header
        title="Performance visuals"
        fromQuery={true}
        showNotificationIcon
      />

      {/* Tabs for selecting assessment type */}
      <div className="mt-6">
        <div className="flex justify-between gap-10 border-b-2 border-[#D32D4440]">
          {[
            "Continuous Assessment",
            "Assignment",
            "Examination",
            "Report card",
          ].map((tab) => (
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

      {/* Bar charts */}
      <div className="mt-6 rounded-md bg-white p-6">
        <div className="flex items-center justify-between py-4">
          <p className="text-xl font-medium text-[#0F0204]">Bar Chart</p>
          <div className="flex gap-2">
            <p className="rounded-md border border-[#E4E4E4] p-2 text-[#815259]">
              English - J.S.S. 1
            </p>
            <div className="rounded-md bg-[#D32D441A] p-2 px-8 text-[#D32D44]">
              <span className="text-sm font-semibold text-[#D32D44]">
                Total score:
              </span>
              <span className="text-sm font-bold text-[#0F0204]">100</span>
            </div>

            <button className="rounded-md bg-[#D32D44] p-2 px-8 text-xs text-white">
              Download
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="rounded-md bg-[#FDF2F3] p-4">
            <h2 className="font-semibold text-[#D32D44]">Average score</h2>
            <Bar data={barData} options={barOptions} />
          </div>
          <div className="rounded-md bg-[#FDF2F3] p-4">
            <h2 className="font-semibold text-[#D32D44]">Best score</h2>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>

      {/* Pie charts */}
      <div className="mt-10 rounded-md bg-white p-4">
        <div className="flex items-center justify-between py-4">
          <p className="text-xl font-medium text-[#0F0204]">Pie Chart</p>
          <div className="flex gap-2">
            <p className="rounded-md border border-[#E4E4E4] p-2 text-[#815259]">
              English - J.S.S. 1
            </p>

            <button className="rounded-md bg-[#D32D44] p-2 px-8 text-xs text-white">
              Download
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="rounded-md bg-[#FDF2F3] p-4">
            <h2 className="font-semibold text-[#D32D44]">Average score</h2>
            <Pie data={pieData} options={pieOptions} />
          </div>
          <div className="rounded-md bg-[#FDF2F3] p-4">
            <h2 className="font-semibold text-[#D32D44]">Best score</h2>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
