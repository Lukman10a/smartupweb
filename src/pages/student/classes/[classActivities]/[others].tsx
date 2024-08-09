import AssesmentCard from "@/components/classComponents/assesmentCard";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  IoChevronBackCircleOutline,
  IoNotificationsCircleOutline,
} from "react-icons/io5";

export default function Others() {
  const { query, asPath } = useRouter();

  return (
    <div className="">
      <div>
        {query.type === "Assessment" ? "viewAssesment" : "showSyllabus"}
      </div>

      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoChevronBackCircleOutline size={35} />
          <p className="font-dm_sans text-2xl font-medium">
            {query.classActivities}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={require("../../../../../public/assets/cancel.svg")}
            alt=""
          />
        </div>
      </div>

      <div className="rounded-md bg-white p-3">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-dm_sans text-2xl font-medium">{query.type}</p>
          <div className="flex items-center gap-2">
            <IoNotificationsCircleOutline size={40} />
          </div>
        </div>
        <AssesmentCard />
      </div>
    </div>
  );
}
