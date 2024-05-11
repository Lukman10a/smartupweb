import React from "react";
import Image from "next/image";

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
    <div className="text-white flex gap-3 items-center bg-[#D32D44] p-2 px-4 rounded-md">
      <Image src={icon} alt="" height={18} width={18} />
      <p>{title}</p>
    </div>
  );
};
