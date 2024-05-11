import React, { useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TfiCrown } from "react-icons/tfi";
import CardContainer from "./cardContainer";
import TableContainer from "../table";

export default function RightDashboard() {
  // State to store fetched data
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://smartup-api.herokuapp.com/api/v2/show_user_info?user_id=3d99c36c-3775-49b6-9fd2-4c789bcf0980",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers if needed
            },
            // Add any request body if needed
            body: JSON.stringify({}),
          }
        );
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <section className="flex-1 p-7">
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
          <p className="text-[18px] font-semibold">Adeleke William</p>
        </div>
        <p className="text-[18px] font-semibold">Male</p>
        <p className="text-[18px] font-semibold">S.S.S 2</p>
        <p className="text-[18px] font-medium">Science department</p>
        <div className="flex items-center p-2 px-6 rounded-md gap-3 bg-[#00A37D26]">
          <TfiCrown color="#00A37D" />
          <p className="text-[#00A37D] text-sm font-medium">
            No current pending payment
          </p>
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
