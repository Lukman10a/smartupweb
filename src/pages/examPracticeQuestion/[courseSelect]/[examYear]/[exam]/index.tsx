import Header from "@/components/header";
import CancelExamModal from "@/components/modal/cancelExamModal";
import CancelModal from "@/components/modal/cancelModal";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Exam() {
  const { query, asPath } = useRouter();

  return (
    <section>
      <Header title={query.title} fromQuery={true} />

      <div className="mx-auto my-4 flex items-center justify-between rounded-lg bg-white p-2 px-6">
        <p className="font-semibold">Year {query.year}</p>
        <CancelExamModal name={""} slug={""} title={query.title}>
          <button className="rounded-md bg-[#D32D4426] p-2 px-4 text-[#D32D44]">
            <p>Cancel Test</p>
          </button>
        </CancelExamModal>
      </div>

      {/* PROGRESS BAR */}

      <div className="mb-4 mt-6 w-full rounded-full bg-[#D32D4426] text-center">
        <div className="w-full rounded-full bg-[#D32D44] text-sm">1/100</div>
      </div>
    </section>
  );
}
