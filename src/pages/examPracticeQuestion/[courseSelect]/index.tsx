import Header from "@/components/header";
import { useRouter } from "next/router";
import React from "react";

export default function CourseSelect() {
  const { query, asPath } = useRouter();
  const titleFromQuery = query.courseSelect as string | undefined;

  return (
    <div>
      <Header title={titleFromQuery} fromQuery={Boolean(titleFromQuery)} />
    </div>
  );
}
