import Header from "@/components/header";
import Table from "@/components/institutionComponents/table";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

export default function Student() {
  return (
    <section>
      <Header title={"Students"} fromQuery={false} />

      <div className="relative flex justify-between rounded-md bg-white p-4">
        <div>
          <input
            type="text"
            placeholder="Search for a student"
            className="w-96 rounded-md bg-[#F8F9FB] p-2 pl-10 text-[#815259CC] placeholder-[#815259CC]"
          />
          <CiSearch
            size={25}
            className="absolute left-6 top-1/2 -translate-y-1/2 transform text-[#815259CC]"
          />
        </div>
        <Link href={"/institutionPages/student/addStudent"}>
          <button className="flex items-center gap-2 rounded-md bg-[#D32D4426] p-2 px-10 text-[#D32D44]">
            <FaPlus />
            <p>Add new student</p>
          </button>
        </Link>
      </div>
      <div className="container mx-auto px-4">
        <Table title="All Students" />
      </div>
    </section>
  );
}
