import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import React from "react";
import smart from "../../../../public/assets/smart.svg";
import Loading from "@/components/loading";
import { fetchSyllabusData } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

interface syllabus {
  id: number;
  class: string;
  subject: string;
}

export default function Syllabuses() {
  const { query, asPath } = useRouter();

  console.log({ query, path: asPath });

  const {
    isPending: syllabusPending,
    error: syllabusError,
    data: syllabusData,
  } = useQuery({
    queryKey: ["syllabusData"],
    queryFn: fetchSyllabusData,
  });

  console.log({ sylabus: syllabusData });

  if (syllabusPending) return <Loading />;

  if (syllabusError) return "An error has occurred: " + syllabusError?.message;

  return (
    <section>
      <Header title="Smartup syllabus" fromQuery={false} />

      <div className="mx-auto my-6 flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for course here..."
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <div className="flex">
          <div className="flex gap-2 rounded-l-md bg-[#D32D4426] p-2">
            <p className="text-[#D32D44]">Total courses available:</p>
            <p>{syllabusData.length}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="py-6 font-semibold"> Search for topics here...</p>
        <div className="grid grid-cols-4 place-items-center gap-6 rounded-md bg-white p-3 py-6">
          <Link
            href={{
              pathname: `/student/syllabuses/${syllabusData.id}`,
              query: { subject: syllabusData.summary },
            }}
            as={`/student/syllabuses/${syllabusData.id}`}
          >
            <button
              className="rounded-md bg-[#F8F9FB] p-6"
              key={syllabusData.id}
            >
              <Image src={smart} alt="" className="pb-2" />
              <p className="text-left">{syllabusData.class}</p>
              <p className="font-semibold">{syllabusData.summary}</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
