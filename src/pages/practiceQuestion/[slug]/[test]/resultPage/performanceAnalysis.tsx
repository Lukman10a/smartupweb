import { useQueries, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import BarChart from "@/components/barChat";
import Loading from "@/components/loading";
import {
  fetchStudentTests,
  fetchTestResult,
} from "@/components/rightDashboard/utils";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Test, TestResult } from "@/type/testResult";

export default function PerformanceAnalysis() {
  const { query } = useRouter();
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
  const [selectedTopicName, setSelectedTopicName] = useState<string | null>(
    null,
  );
  const [latestDate, setLatestDate] = useState<string>("");
  const [recentDate, setRecentDate] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#D32D441A");
  const [filteredChartData, setFilteredChartData] = useState<any>(null); // State to hold filtered chart data

  const topicNames = useSelector((state: RootState) => state.quiz.topicNames);

  const {
    data: studentTests,
    isLoading: isLoadingTests,
    error: testsError,
  } = useQuery({
    queryKey: ["studentTests"],
    queryFn: fetchStudentTests,
    select: (tests: Test[]) =>
      tests
        // .slice(0, 20)
        .filter((item) =>
          topicNames.some((topic) => topic.name === item.topic_name),
        ),
  });

  console.log({ STUDENT: studentTests });
  console.log({ FILTER: filteredChartData });

  useEffect(() => {
    if (studentTests && studentTests.length > 0) {
      const sortedTests = [...studentTests].sort((a, b) => {
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      });

      setLatestDate(
        new Date(sortedTests[sortedTests.length - 1]?.created_at)
          ?.toISOString()
          .slice(0, 10),
      );
      setRecentDate(
        new Date(sortedTests[sortedTests.length - 2]?.created_at)
          ?.toISOString()
          .slice(0, 10),
      );
    }
  }, [studentTests]);

  const testResults = useQueries({
    queries: studentTests
      ? studentTests.map((test: Test) => ({
          queryKey: ["studentResult", test.id],
          queryFn: () => fetchTestResult(test.id),
        }))
      : [],
  });

  const flattenedTests: TestResult[] = testResults
    .flatMap((result) => result.data)
    .filter(Boolean);

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
        backgroundColor: "#D32D44",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 10,
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
    const selectedName = event.target.value;
    setSelectedTestId(selectedName);
    setSelectedTopicName(selectedName); // Set the selected topic name
  };

  const handleLatestDateChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setEndDate(event.target.value);
  };

  const handleRecentDateChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setStartDate(event.target.value);
  };

  useEffect(() => {
    if (startDate && endDate) {
      const filteredTests = flattenedTests.filter(
        (item) =>
          new Date(item.created_at) >= new Date(startDate) &&
          new Date(item.created_at) <= new Date(endDate),
      );

      console.log({ filteredTests });

      const filteredChartData = {
        labels: filteredTests.map((item) =>
          new Date(item.created_at).toLocaleDateString(),
        ),
        datasets: [
          {
            label: "Test Scores (%)",
            data: filteredTests.map(
              (item) =>
                (parseFloat(item?.score) / item?.test?.question_ids?.length) *
                100,
            ),
            backgroundColor: "#D32D44",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      };

      setFilteredChartData(filteredChartData);
    }
  }, [startDate, endDate, flattenedTests, filteredChartData]);

  useEffect(() => {
    if (selectedTopicName) {
      const filteredTests = flattenedTests.filter((test) => {
        console.log({ test });
        return test.test.topic_id === selectedTopicName;
      });

      console.log({ selectedTopicName, filteredTests, flattenedTests });

      const filteredChartData = {
        labels: filteredTests.map((item) =>
          new Date(item.created_at).toLocaleDateString(),
        ),
        datasets: [
          {
            label: "Test Scores (%)",
            data: filteredTests.map(
              (item) =>
                (parseFloat(item?.score) / item?.test?.question_ids?.length) *
                100,
            ),
            backgroundColor: "#D32D44",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      };

      setFilteredChartData(filteredChartData);
    } else {
      // Reset filteredChartData when no topic is selected
      setFilteredChartData(null);
    }
  }, [selectedTopicName]);

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
              <option value="">Select Topic</option>
              {topicNames.map((name, index) => (
                <option key={index} value={name.id}>
                  {name.name}
                </option>
              ))}
            </select>
            <select
              value={endDate}
              onChange={handleLatestDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              <option value="">{latestDate}</option>
              <option value="">{recentDate}</option>
            </select>
            <select
              value={startDate}
              onChange={handleRecentDateChange}
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2 px-6"
            >
              <option value="">{recentDate}</option>
              <option value="">{latestDate}</option>
            </select>
          </div>

          <div>
            <button className="button-2 rounded-md bg-[#D32D44] p-2 text-white">
              Download Analysis
            </button>
          </div>
        </div>

        {chartData && (
          <BarChart
            data={filteredChartData || chartData}
            backgroundColor={backgroundColor}
            options={options}
          />
        )}
      </div>
    </div>
  );
}
