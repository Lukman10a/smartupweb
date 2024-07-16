import Card from "@/components/rightDashboard/card";
import React, { useState } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { fetchSubjectData } from "@/components/utils";
import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { MOCK } from "../../../data";
import Header from "@/components/header";
import ResultButton from "@/components/resultButton";

type ClassesProps = {
  titleFromQuery: boolean;
};

export default function Classes({ titleFromQuery }: ClassesProps) {
  const [currentCard, setCurrentCard] = useState({
    name: "",
    slug: "",
  });

  // const {
  //   isPending: subjectPending,
  //   error: subjectError,
  //   data: subjectData,
  // } = useQuery({
  //   queryKey: ["classesData"],
  //   queryFn: fetchSubjectData,
  // });

  // if (subjectPending) return <Loading />;

  // if (subjectError) return "An error has occurred: " + subjectError?.message;

  return (
    <section>
      <Header title="Mock" fromQuery={false} />
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for a class here"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <ResultButton test={0} />
      </div>

      <div>
        <p className="py-4">Select a course to watch video.</p>
      </div>
      <section>
        <div className="grid grid-rows-3 justify-between space-y-4">
          <div className="grid cursor-pointer grid-cols-4 gap-12 rounded-md bg-white p-3 px-5">
            {MOCK.map((item) => (
              <Link
                href={{
                  pathname: `/mock/[selectExam]`,
                  query: {
                    selectExam: item.subject,
                    exam: item.subject,
                    // topic:
                  },
                }}
                as={`/mock/${item.subject}`}
                key={item.id}
              >
                <Card
                  key={item.id}
                  subtitle={item.noOfExams}
                  titlePoints={item.subject}
                  onClick={() =>
                    setCurrentCard({ name: item.subject, slug: item.subject })
                  }
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
