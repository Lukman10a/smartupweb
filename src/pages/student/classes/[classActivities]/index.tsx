import ClassActivityCard from "@/components/classComponents/classActivityCard";
import React from "react";
import Image from "next/image";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Header from "@/components/header";

export default function ClassActivity() {
  const { query, asPath } = useRouter();
  const titleFromQuery = query.classActivities as string | undefined;

  // console.log({ query, asPath });

  return (
    <section>
      {/* <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoChevronBackCircleOutline size={35} />
          <p className="font-dm_sans text-2xl font-medium">
            {query.classActivities}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div> */}

      <Header title={titleFromQuery} fromQuery={Boolean(titleFromQuery)} />
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <p>Mustapha Ibrahim</p>
        <div>
          <div className="flex items-center gap-2 rounded-md bg-[#D32D4426] p-2">
            <Image
              src={require("../../../../../public/assets/people.svg")}
              alt=""
            />
            <p className="text-[#D32D44]">10 participants</p>
          </div>
        </div>
      </div>

      <div className="my-4 rounded-md bg-white p-3">
        <h3>Class activities</h3>
        <ClassActivityCard path={asPath} />
      </div>
    </section>
  );
}
