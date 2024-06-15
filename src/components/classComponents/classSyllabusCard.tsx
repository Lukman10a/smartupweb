import React from "react";
import { CLASSSYLLABUS_DATA } from "../../../data";
export default function ClassSyllabusCard() {
  return (
    <div>
      {CLASSSYLLABUS_DATA.map((item) => (
        <div className="m-2 rounded-md bg-[#F8F9FB] p-4" key={item.id}>
          <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
          <div className="space-y-2">
            <p>{item.subTitle1}</p>
            <p>{item.subTitle2}</p>
            <p>{item.subTitle3}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
