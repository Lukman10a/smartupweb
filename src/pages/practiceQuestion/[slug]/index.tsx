import { useRouter } from "next/router";
import React from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PRACTICE_DATA } from "../../../../data";
import TopicContainer from "@/components/topicContainer";
import Link from "next/link";
import { fetchTopic } from "@/components/rightDashboard/utils";
import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";

export default function Practice() {
  const { query, asPath } = useRouter();

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

  if (subjectPending) return <Loading />;

  if (subjectError) return "An error has occurred: " + subjectError?.message;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="font-dm_sans text-2xl font-medium">{query.subject}</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>

      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for topics"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <div className="flex gap-2">
          <div className="flex gap-2 rounded-md bg-[#D32D4426] p-2">
            <p className="text-[#D32D44]">Tab view</p>
            <RiArrowDropDownLine />
          </div>

          <p className="rounded-md bg-[#D32D4426] p-2 text-[#D32D44]">
            View analysis
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-md bg-white p-3">
        {subjectData.map(
          (item: {
            id: React.Key | null | undefined | string;
            name: string;
          }) => (
            <TopicContainer
              key={item.id}
              topic={item.name}
              topicId={item.id as string}
              subject={subjectString}
              path={asPath}
            />
          ),
        )}
      </div>
    </div>
  );
}
