// pages/test.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState, AppDispatch } from "@/store";
import {
  setQuizData,
  nextQuestion,
  previousQuestion,
  selectAnswer,
  updateAnswer,
  SelectedAnswer,
} from "@/store/quizSlice";
import {
  IoNotificationsCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { fetchQuizByTopic } from "@/components/rightDashboard/utils";
import { Question } from "@/type/quiz";
import Loading from "@/components/loading";
import { cn } from "@/lib/utils";
import CancelModal from "@/components/modal/cancelModal";
import Link from "next/link";

const Test: React.FC = () => {
  const { query, asPath } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const quizData = useSelector((state: RootState) => state.quiz.quizData);
  const currentQuestionIndex = useSelector(
    (state: RootState) => state.quiz.currentQuestionIndex,
  );

  const [showSummary, setShowSummary] = useState(false);
  const [selectedAnswerForChange, setSelectedAnswerForChange] =
    useState<SelectedAnswer | null>(null);

  const { data, error, isLoading } = useQuery<Question[], Error>({
    queryKey: ["quiz", query.topicId],
    queryFn: () => fetchQuizByTopic(query.topicId as string),
    enabled: !!query.topicId,
  });

  const selectedAnswers = useSelector(
    (state: RootState) => state.quiz.selectedAnswers,
  );

  useEffect(() => {
    dispatch(setQuizData(data as Question[]));
    console.log({ data, query, asPath });
  }, [dispatch, query.topicId]);

  const handleNextClick = () => {
    if (currentQuestionIndex >= (quizData?.length || 0) - 1) {
      setShowSummary(true);
    } else {
      dispatch(nextQuestion());
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <div>An error has occurred: {error.message}</div>;

  const currentQuestion = quizData?.[currentQuestionIndex];

  const handleAnswerSelect = (
    answerId: string,
    isCorrect: boolean,
    chosenAnswer: string,
    chosenQuestion: string,
    questionName: string,
  ) => {
    if (currentQuestion) {
      dispatch(
        selectAnswer({
          questionId: currentQuestion.id,
          answerId,
          isCorrect,
          chosenAnswer,
          chosenQuestion,
          questionName,
        }),
      );
      console.log(selectedAnswers);
    }
  };

  const handleAnswerChange = (
    answerId: string,
    isCorrect: boolean,
    chosenAnswer: string,
    questionId: string,
  ) => {
    dispatch(
      updateAnswer({
        questionId,
        answerId,
        isCorrect,
        chosenAnswer,
      }),
    );
    setSelectedAnswerForChange(null);
  };

  const getSelectedAnswer = (questionId: string) => {
    const selectedAnswer = selectedAnswers.find(
      (answer) => answer.questionId === questionId,
    );
    return selectedAnswer ? selectedAnswer.answerId : null;
  };

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
        <CancelModal name={""} slug={""}>
          <button className="flex gap-2">
            <p className="rounded-md bg-[#D32D4426] p-2 text-[#D32D44]">
              Cancel Test
            </p>
          </button>
        </CancelModal>
      </div>

      {/* PROGRESS BAR */}

      <div className="mb-4 mt-6 w-full rounded-full bg-[#D32D4426] text-center">
        <div
          className="rounded-full bg-[#D32D44] text-sm"
          style={{
            width: `${
              ((currentQuestionIndex + 1) / (quizData?.length || 1)) * 100
            }%`,
          }}
        >
          {currentQuestionIndex + 1}/{quizData?.length}
        </div>
      </div>

      {/* ANSWER SUMMARY PAGE */}

      {currentQuestionIndex >= (quizData?.length || 0) - 1 && showSummary && (
        <div>
          <section className="mt-5 rounded-md bg-white p-4 text-[#74595D]">
            <p>Review Answers</p>

            <ul>
              {selectedAnswers.map((answer, index) => (
                <li
                  className="m-2 rounded-md bg-[#F8F9FB] py-2"
                  key={answer.questionId}
                >
                  <div className="space-y-2 border-b-2 p-6">
                    <p>Question {index + 1}</p>
                    <p className="text-lg font-normal">
                      {answer.chosenQuestion}
                    </p>
                  </div>
                  <div className="flex justify-between p-6">
                    <p>{`Your answer : ${answer.chosenAnswer}`}</p>
                    <button
                      className="text-[#D32D44]"
                      onClick={() => setSelectedAnswerForChange(answer)}
                    >
                      Change answer
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 gap-2 rounded-md bg-[#D32D44] p-2 text-center text-white"
              onClick={() => null}
            >
              <Link
                href={{
                  pathname: `${asPath}/resultPage`,
                  query: {
                    topic: query.topic,
                    subject: query.subject,
                    topicId: query.topicId,
                  },
                }}
                as={`${asPath}/resultPage`}
              >
                <p>All set, submit</p>
              </Link>
            </button>
          </section>
        </div>
      )}

      {/* QUIZ QUESTION PAGE */}

      {currentQuestion && !showSummary && (
        <section className="mt-5 rounded-md bg-white p-3 text-[#74595D]">
          <p className="my-3">Question {currentQuestionIndex + 1}</p>
          <div>
            <p className="rounded-md bg-[#F8F9FB] p-2">
              {currentQuestion.description}
            </p>
            <div className="mt-8">
              {currentQuestion.answer_options.map((answer) => (
                <button
                  key={answer.id}
                  className={cn(
                    "my-2 flex w-full items-center gap-4 rounded-md bg-[#F8F9FB] p-2",
                    getSelectedAnswer(currentQuestion.id) === answer.id
                      ? "border-2 border-[#D32D44]"
                      : "bg-[#F8F9FB]",
                  )}
                  onClick={() =>
                    handleAnswerSelect(
                      answer.id,
                      answer.correct,
                      answer.content,
                      currentQuestion.description,
                      currentQuestion.name,
                    )
                  }
                >
                  {getSelectedAnswer(currentQuestion.id) === answer.id ? (
                    <FaCheckCircle size={20} color="#D32D44" />
                  ) : (
                    <IoCheckmarkCircleOutline size={20} />
                  )}
                  <p>{answer.content}</p>
                </button>
              ))}
            </div>
          </div>

          {/* NAVIGATION BUTTON PAGE */}

          <div className="my-4 mt-8 flex items-center justify-between text-white">
            <button
              className={cn(
                "flex items-center gap-2 rounded-md bg-[#D32D4426] p-2",
                currentQuestionIndex > 0 && "cursor-pointer bg-[#D32D44]",
              )}
              onClick={() => dispatch(previousQuestion())}
              disabled={currentQuestionIndex === 0}
            >
              <GrFormPrevious />
              <p>Previous</p>
            </button>

            <button
              className={cn(
                "flex items-center gap-2 rounded-md bg-[#D32D44] p-2 px-6",
                currentQuestionIndex + 1 === quizData?.length && "bg-[#D32D44]",
              )}
              onClick={handleNextClick}
              // disabled={quizData?.length === currentQuestionIndex + 1}
            >
              <p>
                {currentQuestionIndex >= (quizData?.length || 0) - 1
                  ? "Review answers"
                  : "Next"}
              </p>
              <MdNavigateNext />
            </button>
          </div>
        </section>
      )}

      {/* ANSWER CHANGING PAGE */}

      {selectedAnswerForChange && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-white p-4">
            <h3>Change your answer</h3>
            <p>{selectedAnswerForChange.chosenQuestion}</p>
            <div>
              {quizData
                ?.find(
                  (question) =>
                    question.id === selectedAnswerForChange.questionId,
                )
                ?.answer_options.map((answer) => (
                  <button
                    key={answer.id}
                    className="my-2 flex w-full items-center gap-4 rounded-md bg-[#F8F9FB] p-2"
                    onClick={() =>
                      handleAnswerChange(
                        answer.id,
                        answer.correct,
                        answer.content,
                        selectedAnswerForChange.questionId,
                      )
                    }
                  >
                    <IoCheckmarkCircleOutline size={20} />
                    <p>{answer.content}</p>
                  </button>
                ))}
            </div>
            <button
              className="mt-4 rounded-md bg-red-500 p-2 text-white"
              onClick={() => setSelectedAnswerForChange(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
