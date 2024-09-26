import Header from "@/components/header";
import Image from "next/image";
import React, { useState } from "react";
import smart from "../../../../public/assets/logo.svg";
import Link from "next/link";
import EditInfoModal from "@/components/modal/institutionModal/editInfoModal";

export default function Settings() {
  // State to store school information
  const [schoolInfo, setSchoolInfo] = useState({
    name: "Joy-Marvy School",
    address: "122 Joel Ogunnaike Street, Marriott Hotel Lekki, Lagos State.",
  });

  // Function to update school information from the modal
  const handleUpdateSchoolInfo = (newName: string, newAddress: string) => {
    setSchoolInfo({ name: newName, address: newAddress });
  };

  const SETTINGS_DETAILS = [
    { slug: "/sessions", title: "Sessions", button: "Edit sessions" },
    {
      slug: "/grades",
      title: "Grades / Class levels",
      button: "Edit class levels",
    },
    {
      slug: "/announcements",
      title: "Announcements",
      button: "Add announcement",
    },
    { slug: "/roles", title: "Additional roles", button: "View other roles" },
  ];

  return (
    <section>
      <Header title={"Settings"} fromQuery={true} showNotificationIcon />
      <div className="my-6 flex items-center justify-between rounded-md bg-white p-3">
        <div className="flex items-center gap-3">
          <Image src={smart} alt="smartup-logo" />
          <p className="text-xl font-semibold">{schoolInfo.name}</p>
        </div>
        <p className="text-[#815259]">{schoolInfo.address}</p>
        {/* Pass the update function to the modal */}
        <EditInfoModal
          name={schoolInfo.name}
          slug={""}
          path={undefined}
          onUpdate={handleUpdateSchoolInfo}
        >
          <button className="rounded-md bg-[#D32D441A] p-2 px-8 text-[#D32D44]">
            Edit school information
          </button>
        </EditInfoModal>
      </div>

      <div className="space-y-2 rounded-md bg-white p-4">
        {SETTINGS_DETAILS.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-md bg-[#F8F9FB] p-3"
          >
            <p>{item.title}</p>
            <Link
              href={{
                pathname: `/student/settings${item.slug}`,
                query: { title: item.title },
              }}
              as={`/student/settings${item.slug}`}
            >
              <button className="w-[210px] rounded-md bg-[#D32D441A] p-3 text-[#D32D44]">
                {item.button}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
