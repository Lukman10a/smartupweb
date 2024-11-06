import { useQueries, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import BarChart from "@/components/barChat";
import Loading from "@/components/loading";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Test, TestResult } from "@/type/testResult";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchStudentTests, fetchTestResult } from "@/lib/api";

export default function PerformanceAnalysis() {
  const { query } = useRouter();

  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
  const [selectedTopicName, setSelectedTopicName] = useState<string | null>(
    null,
  );
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
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

  console.log({ studentTests });

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

  const minDate = useMemo(() => {
    if (flattenedTests.length === 0) return null;
    return new Date(
      Math.min(
        ...flattenedTests.map((item) => new Date(item.created_at).getTime()),
      ),
    );
  }, [flattenedTests]);

  const maxDate = useMemo(() => {
    if (flattenedTests.length === 0) return null;
    return new Date(
      Math.max(
        ...flattenedTests.map((item) => new Date(item.created_at).getTime()),
      ),
    );
  }, [flattenedTests]);

  // useEffect(() => {
  //   console.log({ before: filteredChartData });
  //   if (startDate && endDate && filteredChartData) {
  //     console.log({ after: filteredChartData });

  //     const filteredTests = filteredChartData.filter(
  //       (item: { created_at: string | number | Date }) =>
  //         new Date(item.created_at) >= startDate &&
  //         new Date(item.created_at) <= endDate,
  //     );

  //     const filteredChartDateData = {
  //       labels: filteredTests.map(
  //         (item: { created_at: string | number | Date }) =>
  //           new Date(item.created_at).toLocaleDateString(),
  //       ),
  //       datasets: [
  //         {
  //           label: "Test Scores (%)",
  //           data: filteredTests.map(
  //             (item: {
  //               score: string;
  //               test: { question_ids: string | any[] };
  //             }) =>
  //               (parseFloat(item?.score) / item?.test?.question_ids?.length) *
  //               100,
  //           ),
  //           backgroundColor: "#D32D44",
  //           borderColor: "rgba(54, 162, 235, 1)",
  //           borderWidth: 1,
  //         },
  //       ],
  //     };

  //     setFilteredChartData(filteredChartDateData);
  //   }
  // }, [startDate, endDate, flattenedTests, filteredChartData]);

  // useEffect(() => {
  //   if (selectedTopicName && startDate && endDate) {
  //     const filteredTests = flattenedTests
  //       .filter((test) => {
  //         return test.test.topic_id === selectedTopicName;
  //       })
  //       .filter(
  //         (item: { created_at: string | number | Date }) =>
  //           new Date(item.created_at) >= startDate &&
  //           new Date(item.created_at) <= endDate,
  //       );

  //     const filteredChartData = {
  //       labels: filteredTests.map((item) =>
  //         new Date(item.created_at).toLocaleDateString(),
  //       ),
  //       datasets: [
  //         {
  //           label: "Test Scores (%)",
  //           data: filteredTests.map(
  //             (item) =>
  //               (parseFloat(item?.score) / item?.test?.question_ids?.length) *
  //               100,
  //           ),
  //           backgroundColor: "#D32D44",
  //           borderColor: "rgba(54, 162, 235, 1)",
  //           borderWidth: 1,
  //         },
  //       ],
  //     };

  //     setFilteredChartData(filteredChartData);
  //   } else {
  //     // Reset filteredChartData when no topic is selected
  //     setFilteredChartData(null);
  //   }
  // }, [selectedTopicName, startDate, endDate]);

  useEffect(() => {
    const fiveMinutesInMillis = 23 * 59 * 59 * 1000;

    if (selectedTopicName || (startDate && endDate)) {
      const filteredTests = flattenedTests
        .filter(
          (test) =>
            !selectedTopicName || test.test.topic_id === selectedTopicName,
        )
        .filter(
          (item: { created_at: string | number | Date }) =>
            (!startDate || new Date(item.created_at) >= startDate) &&
            (!endDate || new Date(item.created_at) <= endDate),
        );

      // console.log(filteredTests[0].created_at);
      // console.log(new Date(filteredTests[0].created_at));

      // console.log(startDate);
      // console.log(endDate?.setTime(endDate?.getTime() + fiveMinutesInMillis));

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
      // Reset filteredChartData when no filters are applied
      setFilteredChartData(null);
    }
  }, [selectedTopicName, startDate, endDate, flattenedTests]);

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
              <option value="">All Topics</option>
              {topicNames.map((name, index) => (
                <option key={index} value={name.id}>
                  {name.name}
                </option>
              ))}
            </select>
            <DatePicker
              placeholderText="Select Date Range"
              selectsRange
              startDate={startDate ?? undefined}
              endDate={endDate ?? undefined}
              allowSameDay={false}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
              minDate={minDate ?? undefined}
              maxDate={maxDate ?? undefined}
              className="flex items-center justify-between rounded-md border-2 p-2"
            />
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
