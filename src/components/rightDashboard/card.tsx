import React, { ReactNode } from "react";
import { TfiCup } from "react-icons/tfi";

export default function Card({
  titlePoints,
  subscript,
  subtitle,
  subTitleIcon,
  onClick,
}: {
  titlePoints: string;
  subscript?: string;
  subtitle: string | number;
  subTitleIcon?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className="my-3 space-y-2 rounded-md bg-[#F8F9FB] p-5"
      onClick={onClick}
    >
      <p className="space-x-2">
        <span className="text-2xl font-bold">{titlePoints}</span>
        {subscript && <span className="text-sm font-light">{subscript}</span>}
      </p>
      <div className="flex items-center justify-between gap-9 text-[#815259]">
        <p className="font-light text-[#815259]">{subtitle}</p>
        {subTitleIcon && subTitleIcon}
      </div>
    </div>
  );
}
