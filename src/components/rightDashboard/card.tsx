import React, { ReactNode } from "react";
import { TfiCup } from "react-icons/tfi";

export default function Card({
  titlePoints,
  subscript,
  subtitle,
  subTitleIcon,
}: {
  titlePoints: string;
  subscript?: string;
  subtitle: string;
  subTitleIcon?: ReactNode;
}) {
  return (
    <div className="bg-[#F8F9FB] rounded-md p-5 space-y-2 my-3">
      <p className="space-x-2">
        <span className="font-bold text-2xl">{titlePoints}</span>
        {subscript && <span className="text-sm font-light">{subscript}</span>}
      </p>
      <div className="flex items-center justify-between gap-9 text-[#815259]">
        <p className="font-light">{subtitle}</p>
        {subTitleIcon && subTitleIcon}
      </div>
    </div>
  );
}
