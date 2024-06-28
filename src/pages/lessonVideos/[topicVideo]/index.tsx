import Header from "@/components/header";
import { useRouter } from "next/router";
import React from "react";

export default function TopicVideos() {
  const { query, asPath } = useRouter();

  return (
    <section>
      <Header title={query.subject} fromQuery={true} />

      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for topic here"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <div className="flex">
          <div className="flex gap-2 rounded-l-md bg-[#D32D4426] p-2">
            <p className="text-[#D32D44]">Total videos watched:</p>
            <p>12</p>
          </div>
        </div>
      </div>

      <div>
        <p className="py-4 font-semibold">Select a topic to watch video.</p>
      </div>
    </section>
  );
}
