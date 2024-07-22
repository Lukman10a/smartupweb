import AllClassCard from "@/components/dashboardComponents/allClassCard";
import Header from "@/components/header";
import TableButton from "@/components/table/tableButton";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

interface Class {
  id: number;
  name: string;
}

export default function Classes() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [classes, setClasses] = useState<Class[]>([
    { id: 1, name: "Show 10 0f 60" },
    { id: 2, name: "Show 20 0f 60" },
    { id: 3, name: "Show 30 0f 60" },
    { id: 3, name: "Show all classes" },
  ]);

  const handlePress = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <Header title={"Classes"} fromQuery={false} />
      <section className="rounded-md bg-white p-4">
        <div className="flex items-center justify-between pt-4">
          <p className="font-semibold">All Classes</p>
          <button
            className="flex items-center gap-2 rounded-md border-2 p-2"
            onClick={handlePress}
          >
            <p>Show {isDropdownOpen ? "Less" : "More"}</p>
            {isDropdownOpen ? (
              <RiArrowDropUpLine size={25} />
            ) : (
              <RiArrowDropDownLine size={25} />
            )}
          </button>
        </div>

        {isDropdownOpen && (
          <div className="absolute mt-2 bg-white">
            <ul>
              {classes.map((classItem) => (
                <li key={classItem.id} className="border-b p-2">
                  <button>{classItem.name}</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="my-8">
          <AllClassCard />
        </div>
        <TableButton />
      </section>
    </div>
  );
}
