import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { LeftDetails } from "./leftDetails";
import LogoutButton from "../logoutButton";
// import { LEFT_DATA } from "../../../data";

// const leftData = LEFT_DATA.map((item) => (
//   <div key={item.title}>
//     <LeftDetails title={item.title} />
//   </div>
// ));

export default function LeftDashboard() {
  return (
    <section className="bg-white p-6 px-10 space-y-6">
      <Image src={require("../../../assets/logo.png")} alt="" />

      {/* {leftData} */}
      <LeftDetails />
      <LeftDetails />
      <LeftDetails />
      <LeftDetails />
      <LeftDetails />

      <LogoutButton />
    </section>
  );
}
