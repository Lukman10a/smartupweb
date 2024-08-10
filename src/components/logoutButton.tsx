import { deleteCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        deleteCookie("userAuth");
        router.push("/login");
      }}
      className="flex w-full cursor-pointer items-center gap-2 rounded-md bg-[#D32D4426] p-2"
    >
      <Image src={"/assets/logout.svg"} alt="" width={30} height={30} />
      <p className="text-lg text-[#D32D44]">Log out</p>
    </button>
  );
}
