import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import previous from "@/../public/assets/previous.svg";
import next from "@/../public/assets/next.svg";
import TableButton from "../table/tableButton";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

interface Class {
  id: number;
  name: string;
}

const paymentData = [
  {
    id: 1,
    fullName: "Adetoro Ridwan",
    accessCode: "s-pmp95df3y0",
    class: "J.S.S 2",
    paymentStatus: "Completed",
    actions: "Completed",
  },
  {
    id: 2,
    fullName: "Johnson Tolani",
    accessCode: "s-pmp95df3y0",
    class: "J.S.S 3",
    paymentStatus: "Incomplete",
    actions: "Pending",
  },
  {
    id: 3,
    fullName: "Oyeleke Gabriel",
    accessCode: "s-pmp95df3y0",
    class: "Basic 4",
    paymentStatus: "Incomplete",
    actions: "Incomplete",
  },
  {
    id: 4,
    fullName: "Multiple fees",
    accessCode: "s-pmp95df3y0",
    class: "Basic 4",
    paymentStatus: "Completed",
    actions: "Completed",
  },
  {
    id: 5,
    fullName: "Party fee",
    accessCode: "s-pmp95df3y0",
    class: "Basic 4",
    paymentStatus: "Incomplete",
    actions: "Incomplete",
  },
  {
    id: 6,
    fullName: "Tuition fee",
    accessCode: "s-pmp95df3y0",
    class: "Basic 4",
    paymentStatus: "Completed",
    actions: "Completed",
  },
  {
    id: 7,
    fullName: "Tuition fee",
    accessCode: "s-pmp95df3y0",
    class: "J.S.S 3",
    paymentStatus: "Completed",
    actions: "Completed",
  },
  {
    id: 8,
    fullName: "Tuition fee",
    accessCode: "s-pmp95df3y0",
    class: "J.S.S 3",
    paymentStatus: "Completed",
    actions: "Completed",
  },
  {
    id: 9,
    fullName: "Tuition fee",
    accessCode: "s-pmp95df3y0",
    class: "J.S.S 3",
    paymentStatus: "Completed",
    actions: "Completed",
  },
  {
    id: 10,
    fullName: "Tuition fee",
    accessCode: "s-pmp95df3y0",
    class: "J.S.S 3",
    paymentStatus: "Completed",
  },
];

const Table = () => {
  function handleAction(id: number): void {
    throw new Error("Function not implemented.");
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [classes] = useState<Class[]>([
    { id: 1, name: "Show 10 of 60" },
    { id: 2, name: "Show 20 of 60" },
    { id: 3, name: "Show 30 of 60" },
    { id: 4, name: "Show all classes" },
  ]);

  const handlePress = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClassSelect = (classItem: Class) => {
    setSelectedClass(classItem);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };
  return (
    <div className="my-4 rounded-md bg-white p-6">
      <div className="flex items-center justify-between py-4">
        <p className="font-semibold">All students</p>
        <button
          className="flex items-center gap-2 rounded-md border-2 p-2"
          onClick={handlePress}
        >
          <p>{selectedClass ? selectedClass.name : "Show More"}</p>
          {isDropdownOpen ? (
            <RiArrowDropUpLine size={25} />
          ) : (
            <RiArrowDropDownLine size={25} />
          )}
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-10 mt-2 rounded-md bg-white shadow-lg">
          <ul>
            {classes.map((classItem) => (
              <li
                key={classItem.id}
                className={`border-b p-3 px-10 ${
                  selectedClass?.id === classItem.id
                    ? "bg-[#D32D441A] text-[#D32D44]"
                    : ""
                }`}
              >
                <button
                  className="w-full text-left"
                  onClick={() => handleClassSelect(classItem)}
                >
                  {classItem.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <table className="w-full table-auto border-separate border-spacing-3 rounded-md border border-[#E4E4E4] bg-white p-4 text-sm text-[#74595D]">
        <thead className="">
          <tr className="text-left">
            <th>Id</th>
            <th>Full Name</th>
            <th>Access code</th>
            <th>Class</th>
            <th>PaymentStatus</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {paymentData.map((payment) => (
            <tr key={payment.id} className="border-b border-b-gray-400 py-3">
              <td className="">{payment.id}</td>
              <td className="">{payment.fullName}</td>
              <td className="">{payment.accessCode}</td>
              <td className="">{payment.class}</td>

              <td
                className={cn(
                  payment.paymentStatus === "Completed" && "text-[#00A37D]",
                  payment.paymentStatus === "Pending" && "text-[#FF9F2E]",
                  payment.paymentStatus === "Incomplete" && "text-[#FF0000]",
                )}
              >
                {payment.paymentStatus}
              </td>
              <td>
                <div className="flex gap-4">
                  <button className="rounded-md bg-[#D32D441A] p-2 px-4 font-semibold text-[#D32D44]">
                    Delete
                  </button>
                  <button
                    className="rounded-sm bg-[#F2F5FF] p-2 font-semibold text-black"
                    onClick={() => handleAction(payment.id)}
                  >
                    View detail
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableButton />
    </div>
  );
};

export default Table;
