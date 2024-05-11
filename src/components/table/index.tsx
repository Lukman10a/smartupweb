import { cn } from "@/lib/utils";
import React, { useState } from "react";
import PaymentHistory from "./PaymentHistory";
import Pendingpayments from "./PendingPayment";

// Sample data for the table

export default function TableContainer() {
  const [tabletype, setTabletype] = useState<
    "payment_history" | "pending_payments"
  >("payment_history");

  return (
    <div className="bg-white rounded-md p-3 my-4">
      <div className="flex gap-4 border-b border-b-gray-300 mb-5 w-fit">
        <button
          className={cn(
            "pb-1 font-medium",
            tabletype === "payment_history" && "border-b-red-500 border-b"
          )}
          onClick={() => setTabletype("payment_history")}
        >
          Payment history
        </button>
        <button
          onClick={() => setTabletype("pending_payments")}
          className={cn(
            "pb-1 font-medium",
            tabletype === "pending_payments" && "border-b-red-500 border-b"
          )}
        >
          Pending payments
        </button>
      </div>

      {tabletype === "payment_history" ? (
        <PaymentHistory />
      ) : (
        <Pendingpayments />
      )}
    </div>
  );
}
