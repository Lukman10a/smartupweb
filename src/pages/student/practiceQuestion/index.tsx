import Card from "@/components/rightDashboard/card";
import React, { useState } from "react";
import { fetchSubjectData } from "@/lib/api";
import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import SubjectCard from "@/components/modal/subjectModal";
import Header from "@/components/header";
import ResultButton from "@/components/resultButton";
import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";

export default function PracticeQuestion() {
  const { query, asPath } = useRouter();
  const [currentCard, setCurrentCard] = useState({
    name: "",
    slug: "",
  });

  const {
    isPending: subjectPending,
    error: subjectError,
    data: subjectData,
  } = useQuery({
    queryKey: ["subjectData"],
    queryFn: fetchSubjectData,
  });

  if (subjectPending) return <Loading />;

  if (subjectError) return "An error has occurred: " + subjectError?.message;

  return (
    <section>
      <Header title="Practice questions" fromQuery={false} />
      <div className="relative mx-auto flex items-center justify-between rounded-md bg-white p-3">
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
        <ResultButton test={40} link="practiceQuestion/result" />
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
