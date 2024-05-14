import React, { useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TfiCrown, TfiCup } from "react-icons/tfi";
import TableContainer from "../table";
import { useQuery } from "@tanstack/react-query";
import Card from "./card";
import SummaryContainer from "./cardContainer";
import { fetchClassesData, fetchData } from "./utils";
import Image from "next/image";

export default function RightDashboard() {
  const { isPending, error, data } = useQuery({
    queryKey: ["userData"],
    queryFn: fetchData,
  });
  const {
    isPending: classesPending,
    error: classesError,
    data: classesData,
  } = useQuery({
    queryKey: ["classesData"],
    queryFn: fetchClassesData,
  });

  if (isPending || classesPending) return "Loading...";

  if (error) return "An error has occurred: " + error?.message;
  if (classesError) return "An error has occurred: " + classesError?.message;

  return (
    <section className="flex-1 p-7 bg-[#F8F9FB]">
      <div className="flex justify-between items-center">
        <p className="font-medium text-2xl">Dashboard</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 p-2 bg-[#D32D4426] rounded-md">
            <FiRefreshCw color="#D32D44" />
            <p className="text-[#D32D44] font-medium text-sm">
              Switch Institution
            </p>
          </div>
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-white rounded-md my-4">
        <div className="flex items-center gap-3">
          {/* <Image src={require("../../../public/assets/class.svg")} alt="" /> */}
          <CgProfile size={30} />
          <p className="text-[18px] font-['Mulish'] text-[#0F0204] font-bold">
            {data.full_name}
          </p>
        </div>
        <p className="text-[18px] font-['Mulish'] text-[#0F0204] font-bold capitalize">
          {data.sex}
        </p>
        <p className="text-[18px] font-['Mulish'] text-[#0F0204] font-bold uppercase">
          {data.level}
        </p>
        <p className="text-[18px] font-['Mulish'] text-[#0F0204] font-bold">
          Science department
        </p>
        <div className="flex items-center p-2 px-6 rounded-md gap-3 bg-[#00A37D26]">
          <TfiCrown color="#00A37D" />
          <p className="text-[#00A37D] text-sm font-medium font-['Mulish']">
            No current pending payment
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <SummaryContainer
          sectionTitle="Progress report"
          summaryAction="Take a test"
        >
          <div className="grid grid-cols-4 justify-between gap-4">
            <Card
              titlePoints={data.best_score}
              subtitle="Best score"
              subTitleIcon={<TfiCup />}
              subscript="Points"
            />
            <Card
              titlePoints={data.average_score}
              subtitle="Average score"
              subTitleIcon={<TfiCup />}
              subscript="Points"
            />
            <Card
              titlePoints={data.videos_watched}
              subTitleIcon={<TfiCup />}
              subscript="Videos"
              subtitle="Videos Watched"
            />
            <Card
              titlePoints={data.tests_taken}
              subtitle="Test Taken"
              subTitleIcon={<TfiCup />}
              subscript="Tests"
            />
          </div>
        </SummaryContainer>

        <SummaryContainer
          sectionTitle="Classes"
          summaryAction="See all classes"
        >
          <div className="grid grid-cols-4 justify-between gap-4">
            {classesData.map((classData: any) => (
              <Card
                key={classData.id}
                titlePoints={classData.name}
                subtitle={`${classData.students_list_count} attendants`}
              />
            ))}
          </div>
        </SummaryContainer>
      </div>
      <TableContainer />
    </section>
  );
}
