import ClassActivityCard from "@/components/classComponents/classActivityCard";
import React from "react";
import Image from "next/image";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function ClassActivity() {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoChevronBackCircleOutline size={35} />
          <p className="font-dm_sans text-2xl font-medium">English - JSS1</p>
        </div>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <p>Mustapha Ibrahim</p>
        <div>
          <div className="flex items-center gap-2 rounded-md bg-[#D32D4426] p-2">
            <Image
              src={require("../../../../public/assets/people.svg")}
              alt=""
            />
            <p className="text-[#D32D44]">10 participants</p>
          </div>
        </div>
      </div>

      <div className="my-4 rounded-md bg-white p-3">
        <h3>Class activities</h3>
        <ClassActivityCard />
      </div>
    </section>
  );
}
