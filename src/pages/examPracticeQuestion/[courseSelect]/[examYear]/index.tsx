import Header from "@/components/header";
import ResultButton from "@/components/resultButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import React from "react";

interface Year {
  id: number;
  year: number;
  yearSlug: string;
}
export default function ExamYear() {
  const { query, asPath } = useRouter();

  const YEAR_DATA: Year[] = [
    {
      id: 1,
      year: 2015,
      yearSlug: "/2015",
    },
    {
      id: 2,
      year: 2016,
      yearSlug: "/2016",
    },
    {
      id: 3,
      year: 2017,
      yearSlug: "/2017",
    },
    {
      id: 4,
      year: 2018,
      yearSlug: "/2018",
    },
    {
      id: 5,
      year: 2019,
      yearSlug: "/2019",
    },
    {
      id: 6,
      year: 2020,
      yearSlug: "/2020",
    },
    {
      id: 7,
      year: 2021,
      yearSlug: "/2021",
    },
    {
      id: 8,
      year: 2022,
      yearSlug: "/2022",
    },
    {
      id: 9,
      year: 2023,
      yearSlug: "/2023",
    },

    {
      id: 10,
      year: 2024,
      yearSlug: "/2024",
    },
    {
      id: 11,
      year: 2025,
      yearSlug: "/2025",
    },
    {
      id: 12,
      year: 2026,
      yearSlug: "/2026",
    },
  ];

  return (
    <div>
      <Header title={query.title as string} fromQuery={true} />

      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for courses"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <ResultButton test={20} />
      </div>
      <div>
        <p className="py-4">Select an exam for {query.title}.</p>
      </div>

      <div className="grid grid-cols-4 place-items-center gap-6 rounded-md bg-white p-3 py-6">
        {YEAR_DATA.map((item) => (
          <Link
            href={{
              pathname: `${path}${item.yearSlug}`,
              query: { title: query.title, year: item.year },
            }}
            as={`${path}${item.yearSlug}`}
          >
            <button className="rounded-md bg-[#F8F9FB] p-8 px-16" key={item.id}>
              <p className="font-semibold">{item.year}</p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
