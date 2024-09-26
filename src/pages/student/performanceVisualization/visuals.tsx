import Header from "@/components/header";
import { useRouter } from "next/router";
import React from "react";

export default function Visuals() {
  const { query, asPath } = useRouter();
  console.log(query, asPath);
  return (
    <div>
      <Header
        title={"Performance visuals"}
        fromQuery={true}
        showNotificationIcon
      />
    </div>
  );
}
