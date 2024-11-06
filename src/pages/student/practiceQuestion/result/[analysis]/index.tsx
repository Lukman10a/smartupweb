import { useQueries, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";
import BarChart from "@/components/barChat";
import Loading from "@/components/loading";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Test, TestResult } from "@/type/testResult";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchStudentTests, fetchTestResult } from "@/lib/api";

export default function Analysis() {
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
  const [filteredChartData, setFilteredChartData] = useState<any>(null);
  const [topicName, setTopicName] = useState<string[]>([]);

  const {
    data: studentTests,
    isLoading: isLoadingTests,
    error: testsError,
  } = useQuery({
    queryKey: ["studentTests"],
    queryFn: fetchStudentTests,
    select: (tests: Test[]) =>
      tests.filter((item) => query.analysis === item.course_name),
  });

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
    setSelectedTopicName(selectedName);
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

  useEffect(() => {
    if (selectedTopicName || (startDate && endDate)) {
      //  const str = "Adjectival Order-za-tke";
      // const wordBeforeDash = str.split('-')[0];
      // console.log(wordBeforeDash); // Output: "Adjectival Order"
      const filteredTests = flattenedTests
        .filter(
          (test) =>
            !selectedTopicName || test.test.name.includes(selectedTopicName),
        )
        .filter(
          (item) =>
            (!startDate || new Date(item.created_at) >= startDate) &&
            (!endDate || new Date(item.created_at) <= endDate),
        );

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
      console.log({ filteredTests });

      setFilteredChartData(filteredChartData);
    } else {
      // Reset filteredChartData when no filters are applied
      setFilteredChartData(null);
    }
  }, [selectedTopicName, startDate, endDate, flattenedTests]);

  useEffect(() => {
    if (studentTests) {
      const uniqueTopics = Array.from(
        new Set(studentTests.map((test) => test.topic_name)),
      );
      setTopicName(uniqueTopics);
    }
  }, [studentTests]);

  if (isLoadingTests) return <Loading />;
  if (testsError) return <p>An error has occurred: {testsError.message}</p>;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-dm_sans text-2xl font-medium">{query.analysis}</p>
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
              className="flex items-center justify-between gap-12 rounded-md border-2 p-2"
            >
              <option value="">Select Topic</option>
              {topicName.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <DatePicker
              placeholderText="Select date Range"
              selectsRange
              startDate={startDate ?? undefined}
              endDate={endDate ?? undefined}
              onChange={(update) => setDateRange(update)}
              minDate={minDate ?? undefined}
              maxDate={maxDate ?? undefined}
              className="flex w-fit items-center justify-between rounded-md border-2 p-2"
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
