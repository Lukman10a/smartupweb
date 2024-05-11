import { cn } from "@/lib/utils";
import React from "react";

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
];

const PaymentHistory = () => {
  function handleAction(id: number): void {
    throw new Error("Function not implemented.");
  }
  return (
    <div>
      <table className="border-separate border-spacing-3 rounded-md p-4 text-[#74595D] text-sm w-full table-auto border border-[#E4E4E4] ">
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
            <tr key={payment.id} className="py-3  border-b border-b-gray-400">
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
                  payment.status === "Failed" && "text-[#FF0000]"
                )}
              >
                {payment.status}
              </td>
              <td>
                <button
                  className="bg-[#F2F5FF] p-2 rounded-sm text-black"
                  onClick={() => handleAction(payment.id)}
                >
                  View detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-5  mt-6">
        <button className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>previous</span>
        </button>

        <button className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
          <span>Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PaymentHistory;
