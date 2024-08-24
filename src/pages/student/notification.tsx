import Header from "@/components/header";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

export default function Notification() {
  const [activeTab, setActiveTab] = useState("notifications");

  const PROFILE = [
    {
      id: 1,
      name: "Adams Benjamin",
      profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
      content:
        "Good afternoon sir, I’m texting to notify you that I have not ...",
      time: "30 mins ago",
    },
    {
      id: 2,
      name: "Adams Benjamin",
      profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
      content:
        "Good afternoon sir, I’m texting to notify you that I have not ...",
      time: "30 hours ago",
    },
    {
      id: 3,
      name: "Adams Benjamin",
      profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
      content:
        "Good afternoon sir, I’m texting to notify you that I have not ...",
      time: "04:22 PM",
    },
    {
      id: 4,
      name: "Veronica Thomas",
      profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
      content:
        "Good afternoon sir, I’m texting to notify you that I have not ...",
      time: "2 days ago",
    },
    {
      id: 5,
      name: "Adams Benjamin",
      profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
      content:
        "Good afternoon sir, I’m texting to notify you that I have not ...",
      time: "5 days ago",
    },
    {
      id: 6,
      name: "Adams Benjamin",
      profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
      content:
        "Good afternoon sir, I’m texting to notify you that I have not ...",
      time: "5 days ago",
    },
    {
      id: 7,
      name: "Veronica Thomas",
      profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
      content:
        "Good afternoon sir, I’m texting to notify you that I have not ...",
      time: "2 days ago",
    },
    {
      id: 8,
      name: "Adams Benjamin",
      profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
      content:
        "Good afternoon sir, I’m texting to notify you that I have not ...",
      time: "30 hours ago",
    },
  ];

  const ANNOUNCEMENTS = [
    {
      id: 1,
      title: "System Maintenance",
      description: "There will be a scheduled maintenance on August 15th...",
      date: "August 14, 2024",
    },
    {
      id: 2,
      title: "New Feature Release",
      description: "We are excited to announce a new feature...",
      date: "August 12, 2024",
    },
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
        <article className="space-y-2">
          <div className="space-y-2 rounded-md bg-white p-4">
            {ANNOUNCEMENTS.map((item) => (
              <div
                className="flex w-full items-center justify-between gap-4 rounded-md bg-[#F8F9FB] p-4"
                key={item.id}
              >
                <div className="space-y-2">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-[#787A7C]">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      )}
    </section>
  );
}
