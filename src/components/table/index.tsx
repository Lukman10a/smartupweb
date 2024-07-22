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
    <div className="my-4 rounded-md bg-white p-3">
      <div className="mb-5 flex w-fit gap-4 border-b border-b-gray-300">
        <button
          className={cn(
            "pb-1 font-medium",
            tabletype === "payment_history" && "border-b border-b-red-500",
          )}
          onClick={() => setTabletype("payment_history")}
        >
          Payment history
        </button>
        <button
          onClick={() => setTabletype("pending_payments")}
          className={cn(
            "pb-1 font-medium",
            tabletype === "pending_payments" && "border-b border-b-red-500",
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
