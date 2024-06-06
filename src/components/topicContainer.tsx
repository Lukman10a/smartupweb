import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";
import React from "react";

interface TopicContainerProps {
  topic: string;
  subject: string;
  path: string;
}

export default function TopicContainer({
  topic,
  subject,
  path,
}: TopicContainerProps) {
  return (
    <div className="flex justify-between p-2 my-2 items-center bg-[#F8F9FB] rounded-md">
      <p className="text-[#74595D]">{topic}</p>
      <Link
        href={{
          pathname: `${path}/test`,
          query: { topic: topic, subject: subject },
        }}
        as={`${path}/test?topic=${topic}`}
      >
        <button className="bg-[#D32D44] rounded-md text-white p-2">
          Take Test
        </button>
      </Link>
    </div>
  );
}
