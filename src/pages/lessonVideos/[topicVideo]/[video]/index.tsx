import Header from "@/components/header";
import { useRouter } from "next/router";
import React from "react";
import play from "../../../../../public/assets/play.svg";
import Image from "next/image";
import LessonVideos from "@/components/lessonVideos";

export default function Video() {
  const { query, asPath } = useRouter();
  return (
    <div>
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
            <p>23</p>
          </div>
        </div>
      </div>

      <div>
        <p className="py-4 font-semibold">{query.title}</p>

        <div className="flex rounded-lg bg-white p-4">
          <LessonVideos title={query.title} episode={query.episode} />

          <div></div>
        </div>
      </div>
    </div>
  );
}
