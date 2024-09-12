import React from "react";
import TableButton from "../table/tableButton";
import map from "@/../../public/assets/map.png";
import Image from "next/image";
import Link from "next/link";

export default function Announcement() {
  const ANNOUNCEMENTS = [
    {
      id: 1,
      title:
        "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      time: "30 mins ago ",
      date: "30-01-2024",
    },
    {
      id: 1,
      title:
        "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      time: "12 mins ago ",
      date: "24-05-2024",
    },
    {
      id: 1,
      title:
        "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      time: "50 mins ago ",
      date: "14-08-2021",
    },
    {
      id: 1,
      title:
        "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      time: "30 mins ago ",
      date: "24-05-2024",
    },
    {
      id: 1,
      title:
        "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      time: "30 mins ago ",
      date: "24-05-2024",
    },
    {
      id: 1,
      title:
        "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      time: "10 mins ago ",
      date: " 20-08-2022",
    },
  ];

  return (
    <article className="rounded-md bg-white p-5">
      <div className="grid grid-cols-2 gap-4 space-y-2">
        {ANNOUNCEMENTS.map((announcement) => (
          <div
            className="space-y-4 rounded-lg bg-[#F8F9FB] p-6"
            key={announcement.id}
          >
            <div className="flex items-center gap-3">
              <Image src={map} alt="" className="h-12 w-20" />
              <h2 className="text-lg font-semibold text-[#0F0204]">
                {announcement.title}
              </h2>
            </div>
            <p className="line-clamp-3 text-sm text-[#815259]">
              {announcement.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="space-x-2 text-[#4B4A4FE5]">
                <span> {announcement.time}</span>
                <span>|</span>
                <span>{announcement.date}</span>
              </div>
              <Link
                href={{
                  pathname: `/student/notification/${announcement.id}`,
                  query: {
                    title: announcement.title,
                    description: announcement.description,
                    date: announcement.date,
                    time: announcement.time,
                  },
                }}
              >
                <button className="text-[#D32D44]">Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between py-6">
        <TableButton />
        <button className="rounded-md bg-[#D32D441A] p-3 px-5 text-[#D32D44]">
          Showing 10 of 60
        </button>
      </div>
    </article>
  );
}
