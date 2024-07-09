import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const LeftDetails = ({
  title,
  icon,
  slug,
  isActive,
}: {
  title: string;
  icon: string;
  slug: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={slug}
      className={cn(
        "flex w-full items-center gap-3 rounded-md p-2 px-4 text-black",
        isActive && "bg-[#D32D44] text-white",
      )}
    >
      <Image src={icon} alt="" height={18} width={18} />
      <p>{title}</p>
    </Link>
  );
};
