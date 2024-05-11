import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const LeftDetails = ({
  title,
  icon,
  isActive,
}: {
  title: string;
  icon: string;
  isActive?: boolean;
}) => {
  return (
    <button
      className={cn(
        "text-black flex gap-3 items-center  p-2 px-4 rounded-md w-full",
        isActive && "bg-[#D32D44] text-white"
      )}
    >
      <Image src={icon} alt="" height={18} width={18} />
      <p>{title}</p>
    </button>
  );
};
