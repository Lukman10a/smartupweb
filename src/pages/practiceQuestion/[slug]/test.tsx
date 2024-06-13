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

const Test: React.FC = () => {
  const { query } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const quizData = useSelector((state: RootState) => state.quiz.quizData);
  const currentQuestionIndex = useSelector(
    (state: RootState) => state.quiz.currentQuestionIndex
  );
  const [showSummary, setShowSummary] = useState(false);
  const [selectedAnswerForChange, setSelectedAnswerForChange] =
    useState<SelectedAnswer | null>(null);

  const { data, error, isLoading } = useQuery<Question[], Error>({
    queryKey: ["quiz", query.topicId],
    queryFn: () => fetchQuizByTopic(query.topicId as string),
    enabled: !!query.topicId,
  });
  // "7ab659c4-e88c-46e5-8dcf-4e19772db8de"
  const selectedAnswers = useSelector(
    (state: RootState) => state.quiz.selectedAnswers
  );

  useEffect(() => {
    dispatch(setQuizData(data as Question[]));
    console.log({ data });
  }, [data, query.topicId]);

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
    questionName: string
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
        })
      );
      console.log(selectedAnswers);
    }
  };

  const handleAnswerChange = (
    answerId: string,
    isCorrect: boolean,
    chosenAnswer: string,
    questionId: string
  ) => {
    dispatch(
      updateAnswer({
        questionId,
        answerId,
        isCorrect,
        chosenAnswer,
      })
    );
    setSelectedAnswerForChange(null);
  };

  const getSelectedAnswer = (questionId: string) => {
    const selectedAnswer = selectedAnswers.find(
      (answer) => answer.questionId === questionId
    );
    return selectedAnswer ? selectedAnswer.answerId : null;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-2xl font-dm_sans">{query.subject}</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>

      <div className="flex bg-white items-center justify-between rounded-md mx-auto p-3">
        <p>{query.topic}</p>
        <CancelModal name={""} slug={""}>
          <button className="flex gap-2">
            <p className="bg-[#D32D4426] text-[#D32D44] p-2 rounded-md">
              Cancel Test
            </p>
          </button>
        </CancelModal>
      </div>

      {/* PROGRESS BAR */}

      <div className="w-full bg-[#D32D4426] rounded-full text-center mb-4 mt-6">
        <div
          className="bg-[#D32D44] rounded-full text-sm"
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
          <section className="bg-white mt-5 rounded-md p-4 text-[#74595D]">
            <p>Review Answers</p>

            <ul>
              {selectedAnswers.map((answer) => (
                <li
                  className="bg-[#F8F9FB] rounded-md py-2 m-2 "
                  key={answer.questionId}
                >
                  <div className="border-b-2 p-6 space-y-2">
                    <p>{answer.questionName}</p>
                    <p className="font-normal text-lg">
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
              className="text-white text-center p-2 gap-2 bg-[#D32D44] mt-4 rounded-md"
              onClick={() => null}
            >
              <p>All set, submit</p>
            </button>
          </section>
        </div>
      )}

      {/* QUIZ QUESTION PAGE */}

      {currentQuestion && !showSummary && (
        <section className="bg-white mt-5 rounded-md p-3 text-[#74595D]">
          <p className="my-3">Question {currentQuestionIndex + 1}</p>
          <div>
            <p className="p-2 bg-[#F8F9FB] rounded-md">
              {currentQuestion.description}
            </p>
            <div className="mt-8">
              {currentQuestion.answer_options.map((answer) => (
                <button
                  key={answer.id}
                  className={cn(
                    "flex gap-4 items-center rounded-md p-2 bg-[#F8F9FB] my-2 w-full",
                    getSelectedAnswer(currentQuestion.id) === answer.id
                      ? "border-2 border-[#D32D44]"
                      : "bg-[#F8F9FB]"
                  )}
                  onClick={() =>
                    handleAnswerSelect(
                      answer.id,
                      answer.correct,
                      answer.content,
                      currentQuestion.description,
                      currentQuestion.name
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

          <div className="flex justify-between items-center mt-8 my-4 text-white">
            <button
              className={cn(
                "flex items-center gap-2 bg-[#D32D4426] p-2 rounded-md",
                currentQuestionIndex > 0 && "bg-[#D32D44] cursor-pointer"
              )}
              onClick={() => dispatch(previousQuestion())}
              disabled={currentQuestionIndex === 0}
            >
              <GrFormPrevious />
              <p>Previous</p>
            </button>

            <button
              className={cn(
                "flex gap-2 p-2 rounded-md bg-[#D32D44] items-center px-6",
                currentQuestionIndex + 1 === quizData?.length && "bg-[#D32D44]"
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
          <div className="bg-white p-4 rounded-md">
            <h3>Change your answer</h3>
            <p>{selectedAnswerForChange.chosenQuestion}</p>
            <div>
              {quizData
                ?.find(
                  (question) =>
                    question.id === selectedAnswerForChange.questionId
                )
                ?.answer_options.map((answer) => (
                  <button
                    key={answer.id}
                    className="flex gap-4 items-center rounded-md p-2 bg-[#F8F9FB] my-2 w-full"
                    onClick={() =>
                      handleAnswerChange(
                        answer.id,
                        answer.correct,
                        answer.content,
                        selectedAnswerForChange.questionId
                      )
                    }
                  >
                    <IoCheckmarkCircleOutline size={20} />
                    <p>{answer.content}</p>
                  </button>
                ))}
            </div>
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded-md"
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
