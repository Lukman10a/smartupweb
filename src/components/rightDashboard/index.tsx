import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TfiCrown } from "react-icons/tfi";
import CardContainer from "./cardContainer";
import TableContainer from "../table";

export default function RightDashboard() {
  return (
    <section className="flex-1 p-7">
      <div className="flex justify-between items-center">
        <p className="font-medium text-xl">Dashboard</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 p-2 bg-[#D32D4426] rounded-md">
            <FiRefreshCw color="#D32D44" />
            <p className="text-[#D32D44]">Switch Institution</p>
          </div>
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-white rounded-md my-4">
        <div className="flex items-center gap-3">
          <CgProfile size={30} />
          <p>Adeleke William</p>
        </div>
        <p>Male</p>
        <p>S.S.S 2</p>
        <p>Science department</p>
        <div className="flex items-center p-2 px-6 rounded-md gap-3 bg-[#00A37D26]">
          <TfiCrown color="#00A37D" />
          <p className="text-[#00A37D]">No current pending payment</p>
        </div>
      </div>

      <div className="space-y-4">
        <CardContainer />
        <CardContainer />
      </div>
      <TableContainer />
    </section>
  );
}
