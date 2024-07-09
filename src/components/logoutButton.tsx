import Image from "next/image";
import React from "react";

export default function logoutButton() {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-md bg-[#D32D4426] p-2">
      <Image src={"/assets/logout.svg"} alt="" width={30} height={30} />
      <p className="text-[#D32D44]">Log out</p>
    </div>
  );
}
