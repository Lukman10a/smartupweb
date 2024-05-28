import Layout from "@/components/layout";
import Card from "@/components/rightDashboard/card";
import SummaryContainer from "@/components/rightDashboard/cardContainer";
import TableContainer from "@/components/table";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";

const Profile = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-2xl font-dm_sans">Profile</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>
      <div className="flex bg-white items-center justify-between rounded-md mx-auto p-3">
        <div className="flex items-center gap-3">
          <CgProfile size={30} />
          <p className="text-[18px] text-[#0F0204] font-medium">
            Adeleke William
          </p>
        </div>

        <div className="flex items-center p-2 px-6 rounded-md gap-3 bg-[#D32D4426]">
          <p className="text-[#D32D44] text-sm font-medium">Reset password</p>
        </div>
      </div>
      <section className="grid grid-cols-2 my-3 gap-5">
        <div className="bg-white p-4 rounded-md ">
          <p className="font-bold mb-3">Personal information</p>
          <ul className="space-y-4">
            <li className="bg-[#F8F9FB] text-[#0F0204]  p-3 rounded-sm flex items-center justify-between">
              <p className="text-[#0F0204]">Username</p>
              <p className="text-[#0F0204] font-medium">davidthomas142</p>
            </li>
            <li className="bg-[#F8F9FB] text-[#0F0204]  p-3 rounded-sm flex items-center justify-between">
              <p className="">Level</p>
              <p className="font-medium">S.S.S 2</p>
            </li>
            <li className="bg-[#F8F9FB] text-[#0F0204]  p-3 rounded-sm flex items-center justify-between">
              <p className="">Sex</p>
              <p className=" font-medium">Male</p>
            </li>

            <li className="bg-[#F8F9FB] text-[#0F0204]  p-3 rounded-sm flex items-center justify-between">
              <p className="">Class</p>
              <p className="font-medium">Science department</p>
            </li>
          </ul>
        </div>
        <SummaryContainer
          sectionTitle="Progress report"
          summaryAction="Take a test"
        >
          <div className="grid grid-cols-2 justify-between gap-4">
            <Card
              titlePoints={"3,924"}
              subtitle="Best score"
              subTitleIcon={<TfiCup />}
              subscript="Points"
            />
            <Card
              titlePoints={"800"}
              subtitle="Average score"
              subTitleIcon={<TfiCup />}
              subscript="Points"
            />
            <Card
              titlePoints={"72"}
              subTitleIcon={<TfiCup />}
              subscript="Videos"
              subtitle="Videos Watched"
            />
            <Card
              titlePoints={"53"}
              subtitle="Test Taken"
              subTitleIcon={<TfiCup />}
              subscript="Tests"
            />
          </div>
        </SummaryContainer>
      </section>

      <TableContainer />
    </Layout>
  );
};

export default Profile;
