import Image from "next/image";
import { LeftDetails } from "./leftDetails";
import LogoutButton from "../logoutButton";
import { LEFT_DATA } from "../../../data";

export default function LeftDashboard() {
  return (
    <section className="bg-white p-6 px-10 space-y-6">
      <Image src={"/assets/logo.png"} alt="" width={200} height={200} />
      {LEFT_DATA.map((item) => (
        <div key={item.title}>
          <LeftDetails title={item.title} icon={item.logo} />
        </div>
      ))}
      <LogoutButton />
    </section>
  );
}
