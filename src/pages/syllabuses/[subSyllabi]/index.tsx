import Header from "@/components/header";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaDotCircle } from "react-icons/fa";
import Loading from "@/components/loading";
import { fetchSyllabusData } from "@/components/utils";
import { useQuery } from "@tanstack/react-query";

export default function SubSyllabi() {
  const { query } = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const handleDropdownClick = (id: number) => {
    setActiveDropdown((prevState) => (prevState === id ? null : id));
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".dropdown-container")) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const {
    isPending: syllabusPending,
    error: syllabusError,
    data: syllabusData,
  } = useQuery({
    queryKey: ["syllabusData"],
    queryFn: fetchSyllabusData,
  });

  if (syllabusPending) return <Loading />;

  if (syllabusError) return "An error has occurred: " + syllabusError?.message;

  return (
    <div>
      <Header title={query.subject} fromQuery={false} />

      <div className="mx-auto my-6 flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for topics here..."
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <div className="flex">
          <div className="flex gap-2 rounded-l-md bg-[#D32D4426] p-2">
            <p className="text-[#D32D44]">Total courses available:</p>
            <p>{syllabusData.class_syllables.length}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="py-6 text-lg font-semibold">
          Select a topic to view a dropdown of sub-syllabi.
        </p>

        <div className="space-y-2 rounded-md bg-white p-3">
          {syllabusData.class_syllables.map(
            (topic: {
              id: React.Key | null | undefined;
              topic:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | Promise<React.AwaitedReactNode>
                | null
                | undefined;
            }) => (
              <div key={topic.id} className="dropdown-container">
                <div
                  className="flex cursor-pointer items-center justify-between rounded-md bg-[#F8F9FB] p-4 text-lg text-[#74595D]"
                  onClick={() => handleDropdownClick(topic.id as number)}
                >
                  <p>{topic.topic}</p>
                  {activeDropdown === topic.id ? (
                    <RiArrowDropUpLine />
                  ) : (
                    <RiArrowDropDownLine />
                  )}
                </div>
                {activeDropdown === topic.id && (
                  <div className="border-t">
                    <div
                      key={topic.id}
                      className="flex items-center gap-2 bg-[#F8F9FB] p-3 px-4 text-lg"
                    >
                      <FaDotCircle />
                      <p>{topic.topic}</p>
                    </div>
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
