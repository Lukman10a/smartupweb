import React from "react";
import Card from "./card";

export default function CardContainer() {
  return (
    <div className="bg-white p-3 rounded-md">
      <div className="flex justify-between items-center">
        <p>Progress report</p>
        <p className="text-[#D32D44]">Take a test</p>
      </div>
      <div className="flex justify-between gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
