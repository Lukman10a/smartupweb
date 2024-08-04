import Image from "next/image";
import { LeftDetails } from "./leftDetails";
import LogoutButton from "../logoutButton";
import { LEFT_DATA, INSTITUTION_SIDEBAR } from "../../../data";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";

export default function LeftDashboard() {
  setCookie("userStatus", "institutionPages");

  const router = useRouter();

  let key = getCookie("userStatus");
  let sideBar;

  switch (key) {
    case "student":
      sideBar = LEFT_DATA;
      break;

    case "institutionPages":
      sideBar = INSTITUTION_SIDEBAR;
      break;

    default:
      LEFT_DATA;
      break;
  }

  return (
    <section className="space-y-6 bg-white p-6 px-10">
      <Image
        src={"/assets/logo.png"}
        priority
        alt=""
        width={200}
        height={200}
      />
      {sideBar?.map((item, index) => (
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
