import Image from "next/image";
import { LeftDetails } from "./leftDetails";
import LogoutButton from "../logoutButton";
import { LEFT_DATA, INSTITUTION_SIDEBAR } from "../../../data";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function LeftDashboard() {
  const [sideBar, setSideBar] = useState(LEFT_DATA);
  const router = useRouter();

  let key = JSON.parse(getCookie("userAuth") as string);

  useEffect(() => {
    // Set the sidebar based on the cookie value
    switch (key?.status) {
      case "student":
        setSideBar(LEFT_DATA);
        break;

      case "institutionPages":
        setSideBar(INSTITUTION_SIDEBAR);
        break;

      default:
        setSideBar(LEFT_DATA);
        break;
    }
  }, [key.status]); // The empty dependency array ensures this effect runs only once

  return (
    <section className="space-y-6 bg-white p-6 px-10">
      <Image
        src={"/assets/logo.png"}
        priority
        alt=""
        width={200}
        height={200}
      />
      {sideBar?.map((item) => (
        <div key={item.title}>
          <LeftDetails
            title={item.title}
            icon={item.logo}
            slug={item.slug}
            isActive={router.pathname.includes(item.slug)}
          />
        </div>
      ))}
      <div className="py-20">
        <LogoutButton />
      </div>
    </section>
  );
}
