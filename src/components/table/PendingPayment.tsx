import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import previous from "@/../public/assets/previous.svg";
import next from "@/../public/assets/next.svg";

const paymentData = [
  {
    id: 1,
    feeType: "Tuition fee",
    amount: "200,000.00",
    expiryTime: "12:30 PM",
    expiryDate: "2024-05-09",
  },
  {
    id: 2,
    feeType: "Lesson fee",
    amount: "300,000.00",
    expiryTime: "10:45 AM",
    expiryDate: "2024-05-08",
  },
  {
    id: 3,
    feeType: "Late Fee",
    amount: "100,000.00",
    expiryTime: "03:15 PM",
    expiryDate: "2024-05-07",
  },
  {
    id: 4,
    feeType: "Multiple fees",
    amount: "500,000.00",
    expiryTime: "03:15 PM",
    expiryDate: "2024-05-07",
  },
  {
    id: 5,
    feeType: "Late Fee",
    amount: "100,000.00",
    expiryTime: "03:15 PM",
    expiryDate: "2024-05-07",
  },
  {
    id: 6,
    feeType: "Lesson fee",
    amount: "300,000.00",
    expiryTime: "10:45 AM",
    expiryDate: "2024-05-08",
  },
];

const Pendingpayments = () => {
  function handleAction(id: number): void {
    throw new Error("Function not implemented.");
  }
  return (
    <div>
      <table className="w-full table-auto border-separate border-spacing-3 rounded-md border border-[#E4E4E4] p-4 text-sm text-[#74595D]">
        <thead>
          <tr className="">
            <th className="text-left">Id</th>
            <th className="text-left">Fee Type</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Expiry Time</th>
            <th className="text-left">Expiry Date</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {paymentData.map((payment) => (
            <tr key={payment.id} className="border-b-3 border-b-gray-400 py-3">
              <td className="">{payment.id}</td>
              <td className="">{payment.feeType}</td>
              <td className="">₦{payment.amount}</td>
              <td className="">{payment.expiryTime}</td>
              <td className="">{payment.expiryDate}</td>
              <td>
                <button
                  className="rounded-sm bg-[#D32D4426] p-2 font-semibold text-[#D32D44]"
                  onClick={() => handleAction(payment.id)}
                >
                  Pay now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 flex w-full items-center justify-between gap-5">
        <div className="flex gap-4">
          <button className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800">
            <Image src={previous} alt="" />
            <span>previous</span>
          </button>

          <button className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800">
            <span>Next</span>
            <Image src={next} alt="" />
          </button>
        </div>
        <button
          className="self-end rounded-md bg-[#D32D44] px-6 py-2 text-white"
          onClick={() => {}}
        >
          Pay All
        </button>
      </div>
    </div>
  );
};

export default Pendingpayments;
