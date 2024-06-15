import React from "react";

export default function answerReviewPage() {
  const ANSWER_DETAILS = [
    {
      qustion: "question 1",
      answer:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a new form??",
      option: "a",
    },
    {
      qustion: "question 2",
      answer:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a new form??",
      option: "b",
    },
    {
      qustion: "question 3",
      answer:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a new form??",
      option: "a",
    },
  ];
  return (
    <div>
      {ANSWER_DETAILS.map((item) => (
        <div className="m-2 rounded-md bg-[#F8F9FB] p-2" key={item.answer}>
          <div className="border-b-2 p-6">
            <p>{item.qustion}</p>
            <p className="text-base font-normal">{item.answer}</p>
          </div>
          <div className="flex justify-between p-6">
            <p>{`Your answer : ${item.option}`}</p>
            <p className="text-[#D32D44]">Change answer</p>
          </div>
        </div>
      ))}
    </div>
  );
}
