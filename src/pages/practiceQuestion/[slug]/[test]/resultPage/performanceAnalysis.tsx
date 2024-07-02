// // PerformanceAnalysis.tsx

import BarChart from "@/components/barChat";
import Loading from "@/components/loading";
import {
  user_id,
  fetchStudentTests,
  fetchTestResult,
} from "@/components/rightDashboard/utils";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";

// import React, { useState, useEffect } from "react";
// import { IoNotificationsCircleOutline } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import Image from "next/image";
// import cancel from "../../../../../../public/assets/cancel.svg";
// import { useRouter } from "next/router";
// import BarChart from "@/components/barChat"; // Adjust the path based on your project structure

// export default function PerformanceAnalysis() {
//   const { query, asPath } = useRouter();
//   const [selectedTopic, setSelectedTopic] = useState(query.topic);
//   const [startDate, setStartDate] = useState("march 01, 2020");
//   const [endDate, setEndDate] = useState("july 30, 2020");
//   const [backgroundColor, setBackgroundColor] = useState("#D32D441A");

//   useEffect(() => {
//     console.log({ myquerry: query });
//   }, [query]);

//   const dateOptions = [
//     "march 01, 2020",
//     "April 05, 2020",
//     "April 10, 2020",

//     "April 05, 2020",
//     "April 10, 2020",
//     "june 15, 2020",
//     "April 20, 2020",
//     "july 30, 2020",
//   ];

//   const data = {
//     labels: dateOptions.slice(
//       dateOptions.indexOf(startDate),
//       dateOptions.indexOf(endDate) + 1,
//     ),
//     datasets: [
//       {
//         label: "Scores",
//         backgroundColor: "#D32D44",
//         borderRadius: 5,
//         data: [65, 59, 80, 81, 56, 55, 30, 60, 80].slice(
//           dateOptions.indexOf(startDate),
//           dateOptions.indexOf(endDate) + 1,
//         ),
//       },
//     ],
//   };

//   const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedTopic(event.target.value);
//   };

//   const handleStartDateChange = (
//     event: React.ChangeEvent<HTMLSelectElement>,
//   ) => {
//     setStartDate(event.target.value);
//   };

//   const handleEndDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setEndDate(event.target.value);
//   };

//   const handleBackgroundColorChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setBackgroundColor(event.target.value);
//   };

//   return (
//     <div>
//       <div className="mb-3 flex items-center justify-between">
//         <p className="font-dm_sans text-2xl font-medium">{query.subject}</p>
//         <div className="flex items-center gap-2">
//           <IoNotificationsCircleOutline size={40} />
//         </div>
//       </div>

//       <div className="mx-auto rounded-md bg-white p-4">
//         <div className="flex items-center justify-between gap-2">
//           <p>Performance analysis</p>
//           <Image src={cancel} alt="" />
//         </div>

//         <div className="my-8 flex justify-between">
//           <div className="flex gap-2">
//             <select
//               value={selectedTopic}
//               onChange={handleTopicChange}
//               className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
//             >
//               <option value="Algebra">Algebra</option>
//               <option value="Geometry">Geometry</option>
//               <option value="Calculus">Calculus</option>
//             </select>
//             <select
//               value={startDate}
//               onChange={handleStartDateChange}
//               className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
//             >
//               {dateOptions.map((date) => (
//                 <option key={date} value={date}>
//                   From {date}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={endDate}
//               onChange={handleEndDateChange}
//               className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
//             >
//               {dateOptions.map((date) => (
//                 <option key={date} value={date}>
//                   To {date}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <button className="button-2 rounded-md bg-[#D32D44] p-2 text-white">
//               Download Analysis
//             </button>
//           </div>
//         </div>

//         {/* <div className="mb-4">
//           <label htmlFor="backgroundColor">Background Color: </label>
//           <input
//             type="color"
//             id="backgroundColor"
//             value={backgroundColor}
//             onChange={handleBackgroundColorChange}
//           />
//         </div> */}

//         <BarChart data={data} backgroundColor={backgroundColor} />
//       </div>
//     </div>
//   );
// }

export interface TestData {
  test_id: string;
  date: string;
  score: number;
}

export default function PerformanceAnalysis() {
  const base_url = "https://smartup-api.herokuapp.com/api/v2/";
  // const user_id = "54486a85-cd9f-400d-ab4f-f097ca905903";
  const { query } = useRouter();
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>("2020-03-01");
  const [endDate, setEndDate] = useState<string>("2020-07-30");
  const [backgroundColor, setBackgroundColor] = useState<string>("#D32D441A");

  const {
    data: studentTests,
    isLoading: isLoadingTests,
    error: testsError,
  } = useQuery({
    queryKey: ["studentTests", base_url, user_id],
    queryFn: () => fetchStudentTests(base_url, user_id),
  });

  const [testResults, setTestResults] = useState<TestData[]>([]);

  useEffect(() => {
    if (studentTests) {
      const fetchTestResults = async () => {
        try {
          const results = await Promise.all(
            studentTests.map((test: { id: string }) =>
              fetchTestResult(base_url, test.id),
            ),
          );
          const formattedResults = results.map((result: any) => ({
            test_id: result.test.id,
            date: result.test.created_at,
            score: parseFloat(result.score),
          }));
          setTestResults(formattedResults);
        } catch (error) {
          console.error("Error fetching test results:", error);
        }
      };

      fetchTestResults();
    }
  }, [studentTests]);

  const filteredResults = testResults.filter(
    (result) =>
      new Date(result.date) >= new Date(startDate) &&
      new Date(result.date) <= new Date(endDate),
  );

  const data = {
    labels: filteredResults.map((result) => result.date),
    datasets: [
      {
        label: "Scores",
        backgroundColor: "#D32D44",
        borderRadius: 5,
        data: filteredResults.map((result) => result.score),
      },
    ],
  };

  const handleTestIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTestId(event.target.value);
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

  if (isLoadingTests) return <Loading />;
  if (testsError) return <p>An error has occurred: {testsError.message}</p>;

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
        </div>

        <div className="my-8 flex justify-between">
          <div className="flex gap-2">
            <select
              value={selectedTestId || ""}
              onChange={handleTestIdChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              <option value="">Select Test</option>
              {testResults.map((test) => (
                <option key={test.test_id} value={test.test_id}>
                  {test.date}
                </option>
              ))}
            </select>
            <select
              value={startDate}
              onChange={handleStartDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              {testResults.map((test) => (
                <option key={test.test_id} value={test.date}>
                  From {test.date}
                </option>
              ))}
            </select>
            <select
              value={endDate}
              onChange={handleEndDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              {testResults.map((test) => (
                <option key={test.test_id} value={test.date}>
                  To {test.date}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button className="button-2 rounded-md bg-[#D32D44] p-2 text-white">
              Download Analysis
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="backgroundColor">Background Color: </label>
          <input
            type="color"
            id="backgroundColor"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>

        <BarChart data={data} backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}
