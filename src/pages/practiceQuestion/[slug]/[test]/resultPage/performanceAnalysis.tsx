import BarChart from "@/components/barChat";
import Loading from "@/components/loading";
import {
  fetchStudentTests,
  fetchTestResult,
} from "@/components/rightDashboard/utils";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";

export default function PerformanceAnalysis() {
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
    queryKey: ["studentTests"],
    queryFn: () => fetchStudentTests(),
    select: (tests) =>
      tests.slice(0, 10).map((test: { id: string }) => test.id),
  });
  console.log({ test: studentTests });

  const testResults = useQueries({
    queries: studentTests
      ? studentTests.map((id: string) => {
          return {
            queryKey: ["studentResult", id],
            queryFn: () => fetchTestResult(id),
          };
        })
      : [],
  });

  console.log({ results: testResults.flatMap((item) => item.data) });

  const flattendTest = testResults?.flatMap((item) => item.data);

  const chartData = {
    labels: flattendTest?.map((item) =>
      new Date(item?.created_at).toLocaleDateString(),
    ), // x-axis labels (dates)
    datasets: [
      {
        label: "Test Scores (%)",
        data: flattendTest?.map(
          (item) =>
            parseFloat(item?.score / item?.test?.question_ids.length) * 100,
        ), // y-axis data (scores converted to percentage)
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%"; // Display as percentage
          },
        },
      },
    },
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
              {flattendTest.map((test) => (
                <option key={test?.id} value={test?.test?.name}>
                  {test?.test?.name}
                </option>
              ))}
            </select>
            <select
              value={startDate}
              onChange={handleStartDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              {flattendTest.map((test) => (
                <option
                  key={test?.id}
                  value={new Date(test?.created_at).toLocaleDateString()}
                >
                  {new Date(test?.created_at).toLocaleDateString()}
                </option>
              ))}
            </select>
            <select
              value={endDate}
              onChange={handleEndDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              {flattendTest?.map((test) => (
                <option
                  key={test?.id}
                  value={new Date(test?.created_at).toLocaleDateString()}
                >
                  {new Date(test?.created_at).toLocaleDateString()}
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

        {testResults && flattendTest && (
          <BarChart
            data={chartData}
            backgroundColor={backgroundColor}
            options={options}
          />
        )}
      </div>
    </div>
  );
}
