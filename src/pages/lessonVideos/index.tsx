import Card from "@/components/rightDashboard/card";
import React, { useState } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { fetchSubjectData } from "@/components/rightDashboard/utils";
import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { LESSON_VIDEO } from "../../../data";
import Header from "@/components/header";

export default function Classes() {
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
      <Header title="Lesson videos" />
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for a course here"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <div className="flex">
          <div className="flex gap-2 rounded-l-md bg-[#D32D4426] p-2">
            <p className="text-[#D32D44]">Total tests taken:</p>
            <p>53</p>
          </div>

          <p className="rounded-md bg-[#D32D44] p-2 text-white">View results</p>
        </div>
      </div>

      <div>
        <p className="py-4">Select a course to watch video.</p>
      </div>
      <section>
        <div className="grid grid-rows-3 justify-between space-y-4">
          <div className="grid cursor-pointer grid-cols-4 gap-12 rounded-md bg-white p-3 px-5">
            {LESSON_VIDEO.map((item) => (
              // <Link
              //   href={{
              //     pathname: `/classes/[classActivities]`,
              //     query: {
              //       classActivities: item.subject,
              //       class: item.subject,
              //       subject: "subject",
              //     },
              //   }}
              //   as={`/classes/${item.subject}`}
              // >
              <Card
                key={item.id}
                subtitle={item.noOfTopics}
                titlePoints={item.subject}
                onClick={() =>
                  setCurrentCard({ name: item.subject, slug: item.subject })
                }
              />
              // </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
