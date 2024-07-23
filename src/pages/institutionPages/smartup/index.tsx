import ClassActivityCard from "@/components/classComponents/classActivityCard";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";
import note from "../../../../public/assets/note.svg";
import vid from "../../../../public/assets/vid.svg";
import jamb from "../../../../public/assets/jamb.svg";
import alevel from "../../../../public/assets/alevel.svg";
import waec from "../../../../public/assets/waec.svg";

export default function SmartUp() {
  const SMARTUP = [
    {
      id: 1,
      title: "SmartUp questions",
      slug: "/questions",
      img: note,
    },
    {
      id: 2,
      title: "Lesson videos",
      slug: "/lesson-videos",
      img: vid,
    },
  ];

  const EXAMINATION = [
    {
      id: 1,
      title: "J.A.M.B.",
      slug: "/questions",
      img: jamb,
    },
    {
      id: 2,
      title: "W.A.E.C.",
      slug: "/lesson-videos",
      img: waec,
    },
    {
      id: 3,
      title: "A Levels",
      slug: "/lesson-videos",
      img: alevel,
    },
  ];

  return (
    <div>
      <Header title={"SmartUp"} fromQuery={false} />

      <div className="space-y-8">
        <section className="rounded-md bg-white p-4">
          <p className="py-4 text-lg font-medium">SmartUp content</p>
          <div>
            {SMARTUP.map((item) => (
              <Link
                href={{
                  pathname: `${path}${item.slug}`,
                  query: { type: item.title },
                }}
                className="my-3 flex justify-between rounded-md bg-[#F8F9FB] p-3"
                key={item.id}
              >
                <div className="flex items-center gap-2">
                  <Image src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
                <Image
                  src={require("../../../../public/assets/forward.svg")}
                  alt=""
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-md bg-white p-4">
          <p className="py-4 text-lg font-medium">Examination bodies</p>
          <div>
            {EXAMINATION.map((item) => (
              <Link
                href={{
                  pathname: `${path}${item.slug}`,
                  query: { type: item.title },
                }}
                className="my-3 flex justify-between rounded-md bg-[#F8F9FB] p-3"
                key={item.id}
              >
                <div className="flex items-center gap-2">
                  <Image src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
                <Image
                  src={require("../../../../public/assets/forward.svg")}
                  alt=""
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
