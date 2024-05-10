import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { LeftDetails } from "./leftDetails";
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

      <div className="flex gap-2 items-center p-2  rounded-md bg-[#D32D4426]">
        <Image src={require("../../../assets/logout.svg")} alt="" />
        <p className="text-[#D32D44]">Log out</p>
      </div>
    </section>
  );
}
