import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const LeftDetails = ({
  title,
  icon,
  isActive,
  slug,
}: {
  title: string;
  icon: string;
  slug: string;
  isActive?: boolean;
}) => {
  console.log("Slug in parent component:", slug);
  return (
    <Link
      href={slug}
      className={cn(
        "text-black flex gap-3 items-center  p-2 px-4 rounded-md w-full",
        isActive && "bg-[#D32D44] text-white"
      )}
    >
      <Image src={icon} alt="" height={18} width={18} />
      <p>{title}</p>
    </Link>
  );
};
