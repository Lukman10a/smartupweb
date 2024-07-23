import AllClassCard from "@/components/dashboardComponents/allClassCard";
import Header from "@/components/header";
import ClassModal from "@/components/modal/institutionModal/classModal";
import EducatorModal from "@/components/modal/institutionModal/educatorModal";
import StudentModal from "@/components/modal/institutionModal/studentModal";
import TableButton from "@/components/table/tableButton";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface Class {
  id: number;
  name: string;
}

export default function Classes() {
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
    <div>
      <Header title={"Classes"} fromQuery={false} />

      <div className="my-4 flex justify-between rounded-md bg-white p-4">
        <input
          type="text"
          placeholder="Search for a class"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <div className="space-x-2">
          <ClassModal name={""} slug={""} path={undefined}>
            <button className="rounded-md bg-[#D32D441A] p-2 px-4 text-[#D32D44]">
              Add class
            </button>
          </ClassModal>
          <StudentModal name={""} slug={""} path={undefined}>
            <button className="rounded-md bg-[#D32D441A] p-2 px-4 text-[#D32D44]">
              Assign student
            </button>
          </StudentModal>
          <EducatorModal name={""} slug={""} path={undefined}>
            <button className="rounded-md bg-[#D32D441A] p-2 px-4 text-[#D32D44]">
              Assign educator
            </button>
          </EducatorModal>
        </div>
      </div>

      <section className="rounded-md bg-white p-4">
        <div className="flex items-center justify-between pt-4">
          <p className="font-semibold">All Classes</p>
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

        <div className="my-8">
          <AllClassCard />
        </div>
        <TableButton />
      </section>
    </div>
  );
}
