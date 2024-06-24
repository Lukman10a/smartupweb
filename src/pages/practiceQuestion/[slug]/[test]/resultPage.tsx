import CircularProgressBar from "@/components/quizComponents/progressBar";
import ResultReviewPage from "@/components/resultReviewPage";
import { selectTotalScore } from "@/store/selector";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function ResultPage() {
  const { query, asPath } = useRouter();
  const { totalQuestions, correctAnswers, scorePercentage } =
    useSelector(selectTotalScore);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-dm_sans text-2xl font-medium">{query.subject}</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <p>{query.topic}</p>
        <div className="flex gap-2">
          <Link
            href={{
              pathname: `${asPath}/resultPage/performanceAnalysis`,
              query: {
                topic: query.topic,
                subject: query.subject,
                topicId: query.topicId,
              },
            }}
            as={`${asPath}/resultPage/performanceAnalysis`}
          >
            <p className="rounded-md bg-[#D32D4426] p-2 text-[#D32D44]">
              Performance analysis
            </p>
          </Link>
        </div>
      </div>

      <section className="mt-5 rounded-md bg-white p-4">
        <h2>Results</h2>
        <div className="flex gap-2 p-2">
          <div className="space-y-4 self-start rounded-md bg-[#F8F9FB] p-4">
            <p>Performance accuracy</p>
            <div className="flex items-center justify-center">
              <CircularProgressBar
                percentage={parseInt(scorePercentage.toFixed(2))}
              />
            </div>
          </div>
          <div className="flex-grow rounded-md bg-[#F8F9FB] p-2">
            <p>Review your answers</p>
            <ResultReviewPage />
            <div className="flex items-center justify-between p-3">
              <button className="rounded-md bg-[#D32D4426] p-2 text-[#D32D44]">
                <p>View course video</p>
              </button>
              <Link href={`/practiceQuestion`}>
                <button className="rounded-md bg-[#D32D44] p-2 text-white">
                  <p>Take another test</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
