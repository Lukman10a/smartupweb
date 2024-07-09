import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import previous from "@/../public/assets/previous.svg";
import next from "@/../public/assets/next.svg";

const paymentData = [
  {
    id: 1,
    feeType: "Tuition fee",
    paymentType: "Credit Card",
    amount: "200,000.00",
    time: "12:30 PM",
    date: "2024-05-09",
    status: "Successful",
  },
  {
    id: 2,
    feeType: "Lesson fee",
    paymentType: "PayPal",
    amount: "300,000.00",
    time: "10:45 AM",
    date: "2024-05-08",
    status: "Pending",
  },
  {
    id: 3,
    feeType: "Late Fee",
    paymentType: "W.A.E.C fee",
    amount: "100,000.00",
    time: "03:15 PM",
    date: "2024-05-07",
    status: "Failed",
  },
  {
    id: 4,
    feeType: "Multiple fees",
    paymentType: "Bank transfer",
    amount: "500,000.00",
    time: "03:15 PM",
    date: "2024-05-07",
    status: "Successful",
  },
  {
    id: 5,
    feeType: "Party fee",
    paymentType: "Bank transfer",
    amount: "500,000.00",
    time: "03:15 PM",
    date: "2024-05-07",
    status: "Failed",
  },
  {
    id: 6,
    feeType: "Tuition fee",
    paymentType: "Credit Card",
    amount: "200,000.00",
    time: "12:30 PM",
    date: "2024-05-09",
    status: "Successful",
  },
];

const PaymentHistory = () => {
  function handleAction(id: number): void {
    throw new Error("Function not implemented.");
  }
  return (
    <div>
      <table className="w-full table-auto border-separate border-spacing-3 rounded-md border border-[#E4E4E4] p-4 text-sm text-[#74595D]">
        <thead className="mb-4">
          <tr className="">
            <th>Id</th>
            <th>Fee Type</th>
            <th>Payment Type</th>
            <th>Amount</th>
            <th>Time</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {paymentData.map((payment) => (
            <tr key={payment.id} className="border-b border-b-gray-400 py-3">
              <td className="">{payment.id}</td>
              <td className="">{payment.feeType}</td>
              <td className="">{payment.paymentType}</td>
              <td className="">₦{payment.amount}</td>
              <td className="">{payment.time}</td>
              <td className="">{payment.date}</td>
              <td
                className={cn(
                  payment.status === "Successful" && "text-[#00A37D]",
                  payment.status === "Pending" && "text-[#FF9F2E]",
                  payment.status === "Failed" && "text-[#FF0000]",
                )}
              >
                {payment.status}
              </td>
              <td>
                <button
                  className="rounded-sm bg-[#F2F5FF] p-2 font-semibold text-black"
                  onClick={() => handleAction(payment.id)}
                >
                  View detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 flex items-center gap-5">
        <button className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800">
          <Image src={previous} alt="" />
          <span>previous</span>
        </button>
        <button className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800">
          <span>Next</span>
          <Image src={next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PaymentHistory;
