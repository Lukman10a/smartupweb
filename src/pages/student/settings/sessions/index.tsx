import Header from "@/components/header";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Detail() {
  const { query, asPath } = useRouter();

  const SESSIONS = [
    {
      slug: "/2018sessions",
      session: "2018 / 2019 session",
    },
    {
      slug: "/2019session",
      session: "2019 / 2020 session",
    },
    {
      slug: "/2020session",
      session: "2020 / 2021 session",
    },
    {
      slug: "/2021session",
      session: "2021 / 2022 session",
    },
    {
      slug: "/2022session",
      session: "2022 / 2023 session",
    },
    {
      slug: "/2023session",
      session: "2023 / 2024 session",
    },
  ];

  return (
    <div>
      <Header
        title={query.title}
        fromQuery={true}
        showNotificationIcon={true}
      />

      <div className="space-y-2 rounded-md bg-white p-8">
        {SESSIONS.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-md bg-[#F8F9FB] p-3 px-6"
          >
            <p>{item.session}</p>
            <Link
              href={{
                pathname: `${asPath}/${item.slug}`,
                query: { session: item.session },
              }}
              as={`${asPath}/${item.slug}`}
            >
              <button className="rounded-md bg-[#D32D441A] p-2 px-6 text-[#D32D44]">
                View detail
              </button>
            </Link>
          </div>
        ))}
        <div className="flex justify-center py-10">
          <button className="rounded-lg bg-[#D32D44] p-2 px-24 text-white">
            View detail
          </button>
        </div>
      </div>
    </div>
  );
}
