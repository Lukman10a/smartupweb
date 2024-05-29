import Layout from "@/components/Layout";
import Card from "@/components/rightDashboard/card";
import SummaryContainer from "@/components/rightDashboard/cardContainer";
import { Input } from "postcss";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";

export default function PracticeQuestion() {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-2xl font-dm_sans">Practice questions</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>
      <div className="flex bg-white items-center justify-between rounded-md mx-auto p-3">
        <input
          type="text"
          placeholder="Search for courses"
          className="bg-[#F8F9FB] p-2 rounded-md"
        />
        <div className="flex">
          <div className="flex gap-2 bg-[#D32D4426] p-2 rounded-l-md">
            <p className="text-[#D32D44]">Total tests taken:</p>
            <p>53</p>
          </div>

          <p className="bg-[#D32D44] text-white p-2 rounded-md">View results</p>
        </div>
      </div>
      <div>
        <p className="py-4">Select a course to take the test.</p>
      </div>
      <section>
        <div className="grid grid-rows-3 justify-between space-y-4">
          <div className="bg-white grid grid-cols-4 p-3 px-5 gap-12 rounded-md">
            <Card titlePoints={"Mathematics"} subtitle="24 tests available" />
            <Card titlePoints={"English"} subtitle="24 tests available" />
            <Card titlePoints={"Physics"} subtitle="24 tests available" />
            <Card titlePoints={"Chemistry"} subtitle="24 tests available" />
          </div>

          <div className="bg-white grid grid-cols-4 p-3 px-5 gap-12 rounded-md">
            <Card titlePoints={"Mathematics"} subtitle="24 tests available" />
            <Card titlePoints={"English"} subtitle="24 tests available" />
            <Card titlePoints={"Physics"} subtitle="24 tests available" />
            <Card titlePoints={"Chemistry"} subtitle="24 tests available" />
          </div>

          <div className="bg-white grid grid-cols-4 p-3 px-5 gap-12 rounded-md">
            <Card titlePoints={"Mathematics"} subtitle="24 tests available" />
            <Card titlePoints={"English"} subtitle="24 tests available" />
            <Card titlePoints={"Physics"} subtitle="24 tests available" />
            <Card titlePoints={"Chemistry"} subtitle="24 tests available" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
