import React from "react";

export default function ResultButton({ test }: { test: number }) {
  return (
    <div className="flex items-center gap-3 rounded-md bg-[#D32D4426] pl-4">
      <p className="text-sm font-medium text-[#D32D44]">Total tests taken:</p>
      <p>{test}</p>
      <p className="rounded-md bg-[#D32D44] p-2 text-white">View results</p>
    </div>
  );
}
