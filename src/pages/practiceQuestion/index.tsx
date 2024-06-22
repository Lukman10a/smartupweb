import Card from "@/components/rightDashboard/card";
import React, { useState } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { fetchSubjectData } from "@/components/rightDashboard/utils";
import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import SubjectCard from "@/components/modal/subjectModal";
import Header from "@/components/header";

export default function PracticeQuestion() {
  const [currentCard, setCurrentCard] = useState({
    name: "",
    slug: "",
  });

  const {
    isPending: subjectPending,
    error: subjectError,
    data: subjectData,
  } = useQuery({
    queryKey: ["classesData"],
    queryFn: fetchSubjectData,
  });

  if (subjectPending) return <Loading />;

  if (subjectError) return "An error has occurred: " + subjectError?.message;

  return (
    <section>
      <Header title="Practice questions" />
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for courses"
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
        <p className="py-4">Select a course to take the test.</p>
      </div>
      <section>
        <div className="grid grid-rows-3 justify-between space-y-4">
          <SubjectCard name={currentCard.name} slug={currentCard.slug}>
            <div className="grid cursor-pointer grid-cols-4 gap-12 rounded-md bg-white p-3 px-5">
              {subjectData.map(
                (item: {
                  slug: any;
                  name: string;
                  id: React.Key | null | undefined;
                  category: string;
                  description: string;
                }) => (
                  <Card
                    key={item.id}
                    titlePoints={item.name}
                    subtitle={item.description}
                    onClick={() =>
                      setCurrentCard({ name: item.name, slug: item.slug })
                    }
                  />
                ),
              )}
            </div>
          </SubjectCard>
        </div>
      </section>
    </section>
  );
}
