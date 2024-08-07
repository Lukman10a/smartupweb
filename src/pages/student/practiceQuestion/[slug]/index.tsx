import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux"; // Import useDispatch
import { setTopicNames } from "@/store/quizSlice"; // Import setTopicNames
import TopicSubjectResult from "@/components/practiceQuestionComponments/topicSubjectResult";
import { fetchTopic } from "@/lib/api";

export default function Practice() {
  const { query, asPath } = useRouter();

  console.log({ query });
  const dispatch = useDispatch();

  const [topicData, setTopicData] = useState<any[]>([]);

  console.log({ query, asPath });

  const subjectString = Array.isArray(query.subject)
    ? query.subject.join(", ")
    : query.subject || "";
  const slug = typeof query.slug === "string" ? query.slug : "";

  const {
    isPending: subjectPending,
    error: subjectError,
    data: subjectData,
  } = useQuery({
    queryKey: ["topics", query.slug],
    queryFn: () => fetchTopic(slug),
  });

  useEffect(() => {
    if (subjectData) {
      setTopicData(subjectData);
      const topicNames = subjectData.map(
        (item: { id: string; name: string }) => {
          return { name: item.name, id: item.id };
        },
      );
      console.log({ TOPIC: topicNames });
      dispatch(setTopicNames(topicNames)); // Dispatch the action to save topic names
    }
  }, [subjectData]);

  if (subjectPending) return <Loading />;

  if (subjectError) return "An error has occurred: " + subjectError?.message;

  return (
    <div>
      <TopicSubjectResult
        subject={query.subject}
        subjectData={subjectData}
        subjectString={subjectString}
        asPath={asPath}
      />
    </div>
  );
}
