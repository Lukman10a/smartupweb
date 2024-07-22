import React from "react";

export default function AllClassCard() {
  const SUBJECT = [
    {
      id: 1,
      title: "Mathematics J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
    {
      id: 1,
      title: "English J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
    {
      id: 1,
      title: "Basic Science J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
    {
      id: 1,
      title: "Mathematics J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
    {
      id: 1,
      title: "Mathematics J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
    {
      id: 1,
      title: "Physics J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
    {
      id: 1,
      title: "Mathematics J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
    {
      id: 1,
      title: "Chemistry J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
    {
      id: 1,
      title: "Mathematics J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
    {
      id: 1,
      title: "Mathematics J.S.S. 3",
      slug: "/subject/mathematics-jss-3",
    },
  ];
  return (
    <div className="space-y-3">
      {SUBJECT.map((item) => (
        <div className="flex items-center justify-between rounded-md bg-[#F8F9FB] p-4">
          <p>{item.title}</p>
          <div className="flex justify-between gap-4">
            <button className="rounded-md bg-[#0F02041A] p-2 px-4">
              View detail
            </button>
            <button className="rounded-md bg-[#D32D441A] p-2 px-4 text-[#D32D44]">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
