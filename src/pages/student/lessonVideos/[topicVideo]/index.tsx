import Header from "@/components/header";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import play from "../../../../../public/assets/play.svg";
import Link from "next/link";

export default function TopicVideos() {
  const { query, asPath } = useRouter();

  const VIDEO = [
    { id: 1, title: "Working with fractions", episodes: "7 episodes" },
    { id: 2, title: "Introduction to Algebra", episodes: "5 episodes" },
    { id: 3, title: "Geometry Basics", episodes: "8 episodes" },
    { id: 4, title: "Understanding Calculus", episodes: "10 episodes" },
    { id: 5, title: "Statistics for Beginners", episodes: "6 episodes" },
    { id: 6, title: "Physics: Motion and Forces", episodes: "9 episodes" },
    { id: 7, title: "Chemistry: Periodic Table", episodes: "7 episodes" },
    { id: 8, title: "Biology: Cell Structure", episodes: "8 episodes" },
    { id: 9, title: "Environmental Science", episodes: "5 episodes" },
    { id: 10, title: "Earth Science: Geology", episodes: "6 episodes" },
    { id: 11, title: "Computer Science Basics", episodes: "4 episodes" },
    { id: 12, title: "Economics: Supply and Demand", episodes: "5 episodes" },
  ];

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
            <p>{VIDEO.length}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="py-4 font-semibold">Select a topic to watch video.</p>

        <div className="grid grid-cols-4 gap-4">
          {VIDEO.map((video) => (
            <Link
              key={video.id}
              href={{
                pathname: `/student/lessonVideos/${query.subject}/${video.id}`,
                query: {
                  subject: query.subject,
                  title: video.title,
                  episode: video.episodes,
                },
              }}
              as={`/student/lessonVideos/${query.subject}/${video.id}`}
            >
              <div className="flex flex-col items-center justify-center rounded-md border-2 p-4">
                <Image src={play} alt={video.title} />
                <div className="flex w-full items-center justify-between">
                  <p>{video.title}</p>
                  <p>{video.episodes}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
