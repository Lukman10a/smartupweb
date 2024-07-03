import { useQueries, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BarChart from "@/components/barChat"; // Assuming correct component name
import Loading from "@/components/loading";
import {
  fetchStudentTests,
  fetchTestResult,
} from "@/components/rightDashboard/utils";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { TestResult } from "@/type/testResult";

export default function PerformanceAnalysis() {
  const { query } = useRouter();
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#D32D441A");

  const {
    data: studentTests,
    isLoading: isLoadingTests,
    error: testsError,
  } = useQuery({
    queryKey: ["studentTests"],
    queryFn: fetchStudentTests,
    select: (tests: TestResult[]) => tests.slice(0, 20),
  });

  useEffect(() => {
    if (studentTests && studentTests.length > 0) {
      const sortedTests = [...studentTests].sort((a, b) => {
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      });

      setStartDate(
        new Date(sortedTests[0].created_at).toISOString().slice(0, 10),
      );
      setEndDate(
        new Date(sortedTests[sortedTests.length - 1].created_at)
          .toISOString()
          .slice(0, 10),
      );
    }
  }, [studentTests]);

  const testResults = useQueries({
    queries: studentTests
      ? studentTests.map((test: TestResult) => ({
          queryKey: ["studentResult", test.id],
          queryFn: () => fetchTestResult(test.id),
        }))
      : [],
  });

  const flattenedTests: TestResult[] = testResults
    .flatMap((result) => result.data)
    .filter(Boolean);

  console.log({ flat: flattenedTests });
  const chartData = {
    labels: flattenedTests.map((item) =>
      new Date(item.created_at).toLocaleDateString(),
    ),
    datasets: [
      {
        label: "Test Scores (%)",
        data: flattenedTests.map(
          (item) =>
            (parseFloat(item?.score) / item?.test?.question_ids?.length) * 100,
        ),
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
          callback: function (value: number) {
            return value + "%";
          },
        },
      },
    },
  };

  const handleTestIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTestId(event.target.value);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
              {flattenedTests.map((test) => (
                <option key={test?.id} value={test?.test?.name}>
                  {test?.test?.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={startDate}
              min={startDate}
              max={endDate}
              onChange={handleStartDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            />
            <input
              type="date"
              value={endDate}
              min={startDate}
              max={endDate}
              onChange={handleEndDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            />
          </div>

          <div>
            <button className="button-2 rounded-md bg-[#D32D44] p-2 text-white">
              Download Analysis
            </button>
          </div>
        </div>

        {testResults && flattenedTests && (
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
