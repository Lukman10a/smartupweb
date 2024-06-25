import Image from "next/image";
import { LeftDetails } from "./leftDetails";
import LogoutButton from "../logoutButton";
import { LEFT_DATA } from "../../../data";
import { useRouter } from "next/router";

export default function LeftDashboard() {
  const router = useRouter();

  return (
    <section className="space-y-6 bg-white p-6 px-10">
      <Image
        src={"/assets/logo.png"}
        priority
        alt=""
        width={200}
        height={200}
      />
      {LEFT_DATA.map((item, index) => (
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
