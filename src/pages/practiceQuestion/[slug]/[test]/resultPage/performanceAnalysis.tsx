// PerformanceAnalysis.tsx

import React, { useState, useEffect } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import cancel from "../../../../../../public/assets/cancel.svg";
import { useRouter } from "next/router";
import BarChart from "@/components/barChat"; // Adjust the path based on your project structure

export default function PerformanceAnalysis() {
  const { query, asPath } = useRouter();
  const [selectedTopic, setSelectedTopic] = useState(query.topic);
  const [startDate, setStartDate] = useState("April 01, 2020");
  const [endDate, setEndDate] = useState("April 25, 2020");
  const [backgroundColor, setBackgroundColor] = useState("#D32D441A");

  useEffect(() => {
    console.log({ myquerry: query });
  }, [query]);

  const dateOptions = [
    "April 01, 2020",
    "April 05, 2020",
    "April 10, 2020",
    "April 15, 2020",
    "April 20, 2020",
    "April 25, 2020",
  ];

  const data = {
    labels: dateOptions.slice(
      dateOptions.indexOf(startDate),
      dateOptions.indexOf(endDate) + 1,
    ),
    datasets: [
      {
        label: "Scores",
        backgroundColor: "#D32D44",
        borderRadius: 5,
        data: [65, 59, 80, 81, 56, 55].slice(
          dateOptions.indexOf(startDate),
          dateOptions.indexOf(endDate) + 1,
        ),
      },
    ],
  };

  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(event.target.value);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEndDate(event.target.value);
  };

  const handleBackgroundColorChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-dm_sans text-2xl font-medium">{query.subject}</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>

      <div className="mx-auto rounded-md bg-white p-4">
        <div className="flex items-center justify-between gap-2">
          <p>Performance analysis</p>
          <Image src={cancel} alt="" />
        </div>

        <div className="my-8 flex justify-between">
          <div className="flex gap-2">
            <select
              value={selectedTopic}
              onChange={handleTopicChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              <option value="Algebra">Algebra</option>
              <option value="Geometry">Geometry</option>
              <option value="Calculus">Calculus</option>
            </select>
            <select
              value={startDate}
              onChange={handleStartDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  From {date}
                </option>
              ))}
            </select>
            <select
              value={endDate}
              onChange={handleEndDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  To {date}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="rounded-md bg-[#D32D44] p-2 text-white">
              Download Analysis
            </p>
          </div>
        </div>

        {/* <div className="mb-4">
          <label htmlFor="backgroundColor">Background Color: </label>
          <input
            type="color"
            id="backgroundColor"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div> */}

        <BarChart data={data} backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}
