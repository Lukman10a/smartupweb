import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";
import React from "react";

interface TopicContainerProps {
  topic: string;
  subject: string;
  path: string;
  topicId: string;
  subjectId: string;
}

export default function TopicContainer({
  topic,
  subject,
  path,
  topicId,
  subjectId,
}: TopicContainerProps) {
  return (
    <div className="my-2 flex items-center justify-between rounded-md bg-[#F8F9FB] p-2">
      <p className="text-[#74595D]">{topic}</p>
      <Link
        href={{
          pathname: `${path}/${topic}`,
          query: {
            topic: topic,
            subject: subject,
            topicId: topicId,
            subjectId: subjectId,
          },
        }}
        as={`${path}/${topic}`}
      >
        <button className="rounded-md bg-[#D32D44] p-2 text-white">
          Take Test
        </button>
      </Link>
    </div>
  );
}
