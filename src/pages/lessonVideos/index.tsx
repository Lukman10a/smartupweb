import Card from "@/components/rightDashboard/card";
import React, { useState } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { fetchSubjectData } from "@/components/utils";
import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Header from "@/components/header";
import ResultButton from "@/components/resultButton";

interface LessonVideoDataItem {
  subject: string;
  id: number;
  noOfTopics: string;
}

export default function Classes() {
  const [currentCard, setCurrentCard] = useState({
    name: "",
    slug: "",
  });

  const LESSON_VIDEO: LessonVideoDataItem[] = [
    { subject: "Math's - JSS1", noOfTopics: "25 topics", id: 1 },
    { subject: "English - JSS1", noOfTopics: "17 topics", id: 2 },
    { subject: "B. Tech - JSS1", noOfTopics: "20 topics", id: 3 },
    { subject: "Chemistry", noOfTopics: "20 participants", id: 4 },
    { subject: "Economics", noOfTopics: "20 participants", id: 5 },
    { subject: "Agic", noOfTopics: "20 participants", id: 6 },
    { subject: "Engineering", noOfTopics: "20 participants", id: 7 },
    { subject: "Health Science", noOfTopics: "20 participants", id: 8 },
  ];

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
      <Header title="Lesson videos" fromQuery={false} />
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for a course here"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <ResultButton test={20} link={""} />
      </div>

      <div>
        <p className="py-4">Select a course to watch video.</p>
      </div>
      <section>
        <div className="grid grid-rows-3 justify-between space-y-4">
          <div className="grid cursor-pointer grid-cols-4 gap-12 rounded-md bg-white p-3 px-5">
            {LESSON_VIDEO.map((item) => (
              <Link
                href={{
                  pathname: `/lessonVideos/${item.id}`,
                  query: { subject: item.subject },
                }}
                key={item.id}
              >
                <Card
                  key={item.id}
                  subtitle={item.noOfTopics}
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
