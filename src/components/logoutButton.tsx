import Image from "next/image";
import React from "react";

export default function logoutButton() {
  return (
    <div className="flex gap-2 items-center p-2 rounded-md bg-[#D32D4426]">
      <Image src={"/assets/logout.svg"} alt="" width={30} height={30} />
      <p className="text-[#D32D44]">Log out</p>
    </div>
  );
}
