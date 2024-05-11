import React, { useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TfiCrown, TfiCup } from "react-icons/tfi";
import TableContainer from "../table";
import { useQuery } from "@tanstack/react-query";
import Card from "./card";
import SummaryContainer from "./cardContainer";

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://smartup-api.herokuapp.com/api/v2/show_user_info?user_id=3d99c36c-3775-49b6-9fd2-4c789bcf0980"
    );

    if (!response.ok) {
      console.log({ response });
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

export default function RightDashboard() {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["userData"],
  //   queryFn: fetchData,
  // });

  // if (isPending) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

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
          <CgProfile size={30} />
          <p className="text-[18px] text-[#0F0204] font-medium">
            Adeleke William
          </p>
        </div>
        <p className="text-[18px] text-[#0F0204] font-medium">Male</p>
        <p className="text-[18px] text-[#0F0204] font-medium">S.S.S 2</p>
        <p className="text-[18px] text-[#0F0204] font-medium">
          Science department
        </p>
        <div className="flex items-center p-2 px-6 rounded-md gap-3 bg-[#00A37D26]">
          <TfiCrown color="#00A37D" />
          <p className="text-[#00A37D] text-sm font-medium">
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
              titlePoints="3,924"
              subtitle="Best score"
              subTitleIcon={<TfiCup />}
              subscript="Points"
            />
            <Card
              titlePoints="800"
              subtitle="Average score"
              subTitleIcon={<TfiCup />}
              subscript="Points"
            />
            <Card
              titlePoints="72"
              subTitleIcon={<TfiCup />}
              subscript="Videos"
              subtitle="Average score"
            />
            <Card
              titlePoints="53"
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
            <Card titlePoints="Mathematics" subtitle="24 attendants" />
            <Card titlePoints="English" subtitle="14 attendants" />
            <Card titlePoints="Physics" subtitle="12 attendants" />
            <Card titlePoints="Chemistry" subtitle="12 attendants" />
          </div>
        </SummaryContainer>
      </div>
      <TableContainer />
    </section>
  );
}
