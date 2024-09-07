import Dropdown from "@/components/dropdown";
import Header from "@/components/header";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Announcement from "@/components/classComponents/announcement";
import { PROFILE } from "../../../../data";

interface Class {
  id: number;
  name: string;
}

export default function Notification() {
  const [activeTab, setActiveTab] = useState("notifications");

  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const classes = [
    { id: 1, name: "Show 10 of 60" },
    { id: 2, name: "Show 20 of 60" },
    { id: 3, name: "Show 30 of 60" },
    { id: 4, name: "Show all classes" },
  ];

  return (
    <section>
      <Header title={"Notifications & Announcements"} fromQuery={true} />
      <div className="mb-2 flex gap-2 rounded-md bg-white p-4">
        <button
          className={`${
            activeTab === "notifications"
              ? "text-lg font-bold"
              : "text-lg font-bold text-[#0F020466]"
          } border-b-2 pb-2`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>

        <div className="flex w-full justify-between">
          <button
            className={`${
              activeTab === "announcements"
                ? "text-lg font-bold"
                : "text-lg font-bold text-[#0F020466]"
            } border-b-2 pb-2`}
            onClick={() => setActiveTab("announcements")}
          >
            Announcements
          </button>

          <Dropdown
            items={classes}
            selectedItem={selectedClass}
            onSelect={setSelectedClass}
          />
        </div>
      </div>

      {activeTab === "notifications" ? (
        <article className="space-y-2">
          <div className="space-y-2 rounded-md bg-white p-4">
            {PROFILE.map((item) => (
              <div
                className="flex w-full items-center justify-between gap-4 rounded-md bg-[#F8F9FB] p-4"
                key={item.id}
              >
                <div className="flex items-center gap-4 rounded-md">
                  <CgProfile size={50} />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <p className="inline-block h-2 w-2 rounded-full bg-[#D32D44]"></p>
                      <p>{item.name}</p>
                    </div>
                    <p className="text-[#787A7C]">{item.content}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <p>{item.time}</p>
                  <button className="rounded-md bg-[#00A37D1A] p-2 px-8 text-[#00A37D]">
                    View
                  </button>
                  <button className="rounded-md bg-[#D32D441A] p-2 px-8 text-[#D32D44]">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>
      ) : (
        <Announcement />
      )}
    </section>
  );
}
