import Header from "@/components/header";
import { useRouter } from "next/router";
import React from "react";
export default function ExamYear() {
  const { query, asPath } = useRouter();

  return (
    <div>
      <Header title={query.title} fromQuery={true} />
    </div>
  );
}
