// pages/test.tsx
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState, AppDispatch } from "@/store";
import { setQuizData, nextQuestion, previousQuestion } from "@/store/quizSlice";
import {
  IoNotificationsCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { fetchQuizByTopic } from "@/components/rightDashboard/utils";
import { Question } from "@/type/quiz";
import Loading from "@/components/loading";

const Test: React.FC = () => {
  const { query } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const quizData = useSelector((state: RootState) => state.quiz.quizData);
  const currentQuestionIndex = useSelector(
    (state: RootState) => state.quiz.currentQuestionIndex
  );

  const { data, error, isLoading } = useQuery<Question[], Error>({
    queryKey: ["quiz", query.topicId],
    queryFn: () =>
      fetchQuizByTopic("7ab659c4-e88c-46e5-8dcf-4e19772db8de" as string),
  });

  useEffect(() => {
    dispatch(setQuizData(data as Question[]));
    console.log({ data });
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) return <div>An error has occurred: {error.message}</div>;

  console.log(data);

  const currentQuestion = quizData?.[currentQuestionIndex];

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
        <div className="flex gap-2">
          <p className="bg-[#D32D4426] text-[#D32D44] p-2 rounded-md">
            Cancel Test
          </p>
        </div>
      </div>

      {currentQuestion && (
        <section className="bg-white mt-5 rounded-md p-3 text-[#74595D]">
          <p className="my-3">Question {currentQuestionIndex + 1}</p>
          <div>
            <p className="p-2 bg-[#F8F9FB] rounded-md">
              {currentQuestion.description}
            </p>
            <div className="mt-8">
              {currentQuestion.answer_options.map((answer) => (
                <div
                  key={answer.id}
                  className="flex gap-4 items-center rounded-md p-2 bg-[#F8F9FB] my-2"
                >
                  <IoCheckmarkCircleOutline size={20} />
                  <p>{answer.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 my-4 text-white">
            <div
              className="flex items-center gap-2 bg-[#D32D4426] p-2 rounded-md p6-6 cursor-pointer"
              onClick={() => dispatch(previousQuestion())}
            >
              <GrFormPrevious />
              <p>Previous</p>
            </div>

            <div
              className="flex gap-2 p-2 rounded-md bg-[#D32D44] items-center px-6 cursor-pointer"
              onClick={() => dispatch(nextQuestion())}
            >
              <p>Next</p>
              <MdNavigateNext />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Test;

// import { useRouter } from "next/router";
// import React from "react";
// import { IoNotificationsCircleOutline } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { IoCheckmarkCircleOutline } from "react-icons/io5";
// import { IoCheckmarkCircleSharp } from "react-icons/io5";
// import { GrFormPrevious } from "react-icons/gr";
// import { MdNavigateNext } from "react-icons/md";
// import { ANSWER } from "../../../../data";
// import ProgressBar from "@/components/progress";

// export default function Test() {
//   const { query, asPath } = useRouter();

//   console.log({ topicpath: asPath });

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-3">
//         <p className="font-medium text-2xl font-dm_sans">{query.subject}</p>
//         <div className="flex items-center gap-2">
//           <IoNotificationsCircleOutline size={40} />
//         </div>
//       </div>
//       <div className="flex bg-white items-center justify-between rounded-md mx-auto p-3">
//         <p>{query.topic}</p>
//         <div className="flex gap-2">
//           <p className="bg-[#D32D4426] text-[#D32D44] p-2 rounded-md">
//             Cancel Test
//           </p>
//         </div>
//       </div>

//       <section>
//         <ProgressBar />
//       </section>

//       <section className="bg-white mt-5 rounded-md p-3 text-[#74595D]">
//         <p className="my-3">Question 1</p>
//         <div>
//           <p className="p-2 bg-[#F8F9FB] rounded-md">
//             Under what conditions are cathode rays produced in a discharge
//             tube??
//           </p>
//           <div className="mt-8">
//             {ANSWER.map((answer) => (
//               <div
//                 key={answer.id}
//                 className="flex gap-4 items-center rounded-md p-2 bg-[#F8F9FB] my-2"
//               >
//                 {/* <IoCheckmarkCircleSharp /> */}
//                 <IoCheckmarkCircleOutline size={20} />
//                 <p>Points, lines and planes</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-between items-center mt-8 my-4 text-white">
//           <div className="flex items-center gap-2 bg-[#D32D4426] p-2 rounded-md p6-6">
//             <GrFormPrevious />
//             <p>Previous</p>
//           </div>

//           <div className="flex gap-2 p-2 rounded-md bg-[#D32D44] items-center px-6">
//             <p>Next</p>
//             <MdNavigateNext />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
