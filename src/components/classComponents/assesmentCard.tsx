import React from "react";

export default function AssesmentCard() {
  const ASSESMENT_DATA = [
    { title: "Week 1 topic: Integration", id: 1 },
    { title: "Week 2 topic: Civilization", id: 2 },
    { title: "Week 3 topic: Corruption", id: 3 },
    { title: "Week 3 topic: Social habits", id: 4 },
    { title: "Week 4 topic: Civilization", id: 5 },
    { title: "Week 5 topic: Civilization", id: 6 },
    { title: "Week 6 topic: Integration", id: 7 },
    { title: "Week 7 topic: Social habits", id: 8 },
  ];
  return (
    <>
      {ASSESMENT_DATA.map((item) => (
        <div
          className="m-3 flex items-center justify-between rounded-md bg-[#F8F9FB] p-3"
          key={item.id}
        >
          <p>{item.title}</p>

          <button className="rounded-md bg-[#D32D44] p-2 text-white">
            Take assessment
          </button>
        </div>
      ))}
    </>
  );
}
