import Link from "next/link";
import React from "react";

export default function ResultButton({
  test,
  link,
}: {
  test: number;
  link: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-md bg-[#D32D4426] pl-4">
      <p className="text-sm font-medium text-[#D32D44]">Total tests taken:</p>
      <p>{test}</p>
      <Link href={link}>
        <p className="rounded-md bg-[#D32D44] p-2 text-white">View results</p>
      </Link>
    </div>
  );
}
