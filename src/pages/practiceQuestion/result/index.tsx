import Loading from "@/components/loading";
import TopicSubjectResult from "@/components/practiceQuestionComponments/topicSubjectResult";
import { fetchSubjectData } from "@/components/utils";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

export default function Result() {
  const { query, asPath } = useRouter();
  
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
    <div>
      <TopicSubjectResult
        subject="Subject"
        subjectData={subjectData}
        subjectString={""}
        asPath={asPath}
      />
    </div>
  );
}
