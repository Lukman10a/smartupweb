import Header from "@/components/header";
import { useRouter } from "next/router";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Questions() {
  const QUESTION = [
    {
      id: 1,
      question: "Question 1",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a new form??",
      answers: {
        a: "It is a long established fact that a reader",
        b: "It is a long established fact that a reader",
        c: "It is a long established fact that a reader",
        d: "It is a long established fact that a reader",
      },
    },
    {
      id: 2,
      question: "Question 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a new form??",
      answers: {
        a: "It is a long established fact that a reader",
        b: "It is a long established fact that a reader",
        c: "It is a long established fact that a reader",
        d: "It is a long established fact that a reader",
      },
    },
    {
      id: 3,
      question: "Question 3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a new form??",
      answers: {
        a: "It is a long established fact that a reader",
        b: "It is a long established fact that a reader",
        c: "It is a long established fact that a reader",
        d: "It is a long established fact that a reader",
      },
    },
    {
      id: 4,
      question: "Question 4",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a new form??",
      answers: {
        a: "It is a long established fact that a reader",
        b: "It is a long established fact that a reader",
        c: "It is a long established fact that a reader",
        d: "It is a long established fact that a reader",
      },
    },
  ];
  const { query, asPath } = useRouter();
  return (
    <div>
      <Header title={query.title} fromQuery={false} />

      <section className="relative flex items-center justify-between rounded-md bg-white p-4">
        <div>
          <input
            type="text"
            placeholder="Search for a student"
            className="w-96 rounded-md bg-[#F8F9FB] p-2 pl-10 text-[#815259CC] placeholder-[#815259CC]"
          />
          <CiSearch
            size={25}
            className="absolute left-6 top-1/2 -translate-y-1/2 transform text-[#815259CC]"
          />
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-md border-2 p-2 px-4 text-[#815259]">
            <p>Select class</p>
            <RiArrowDropDownLine size={25} />
          </button>
          <button className="flex items-center gap-2 rounded-md border-2 p-2 px-4 text-[#815259]">
            <p>Select subject</p>
            <RiArrowDropDownLine size={25} />
          </button>
          <button className="flex items-center gap-2 rounded-md border-2 p-2 px-4 text-[#815259]">
            <p>Select year</p>
            <RiArrowDropDownLine size={25} />
          </button>
        </div>
      </section>

      <section>
        <div className="my-4 rounded-md bg-white p-4">
          <p className="py-4 text-lg font-medium">J.S.S. 2 - Physics - 2002</p>
          <div className="space-y-2">
            {QUESTION.map((item) => (
              <div className="rounded-md bg-[#F8F9FB] p-4" key={item.id}>
                <div className="space-y-2 border-b-2 pb-4">
                  <p className="text-[#D32D44]">{item.question}</p>
                  <p>{item.description}</p>
                </div>
                <div className="space-y-4 py-2">
                  <p>A. {item.answers.a}</p>
                  <p>B. {item.answers.b}</p>
                  <p>C. {item.answers.c}</p>
                  <p>D. {item.answers.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
