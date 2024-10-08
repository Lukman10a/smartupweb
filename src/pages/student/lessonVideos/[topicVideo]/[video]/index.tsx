import Header from "@/components/header";
import { useRouter } from "next/router";
import React from "react";
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

        <div className="flex items-center gap-4 rounded-lg bg-white p-4">
          <div className="flex-1">
            <LessonVideos
              title={query.title}
              episode={query.episode}
              className=""
            />
          </div>

          <div className="max-h-96 flex-1 space-y-4 overflow-y-auto">
            <LessonVideos title={query.title} episode={query.episode} />
            <LessonVideos title={query.title} episode={query.episode} />
            <LessonVideos title={query.title} episode={query.episode} />
            <LessonVideos title={query.title} episode={query.episode} />
            <LessonVideos title={query.title} episode={query.episode} />
            <LessonVideos title={query.title} episode={query.episode} />
          </div>
        </div>
      </div>
    </div>
  );
}
