// import BarChart from "@/components/barChat";
import Image from "next/image";
import React from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";


export default function PerformanceAnalysis() {

  // const data = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  //   datasets: [
  //     {
  //       label: 'My First dataset',
  //       backgroundColor: 'rgba(75,192,192,0.4)',
  //       borderColor: 'rgba(75,192,192,1)',
  //       borderWidth: 1,
  //       hoverBackgroundColor: 'rgba(75,192,192,0.4)',
  //       hoverBorderColor: 'rgba(75,192,192,1)',
  //       data: [65, 59, 80, 81, 56, 55],
  //     },
  //   ],
  // };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-2xl font-dm_sans">Mathematics</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>

      <div className=" bg-white rounded-md mx-auto p-4">
        <div className="flex items-center justify-between gap-2">
          <p>Performance analysis</p>
          <Image src={require("../../public/assets/cancel.svg")} alt="" />
        </div>

        <div className="flex justify-between my-8">
          <div className="flex gap-2">
            <div className="flex justify-between items-center gap-12 p-2 border-2 rounded-md">
              <p>Algebra</p>
              <RiArrowDropDownLine />
            </div>
            <div className="flex justify-between items-center gap-12 p-2 border-2 rounded-md">
              <p>From April, 2020 </p>
              <RiArrowDropDownLine />
            </div>
            <div className="flex justify-between items-center gap-12 p-2 border-2 rounded-md">
              <p>To May, 2020 </p>
              <RiArrowDropDownLine />
            </div>
          </div>

          <div>
            <p className="text-white p-2 bg-[#D32D44] rounded-md">
              Download Analysis
            </p>
          </div>
        </div>

        {/* <BarChart data={data}/> */}
      </div>
    </div>
  );
}
