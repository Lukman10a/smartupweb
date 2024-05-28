import React, { ReactNode } from "react";
import LeftDashboard from "./leftDashboard";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex bg-[#F8F9FB] font-dm_sans">
      <LeftDashboard />
      <section className="flex-1 p-7">{children}</section>
    </main>
  );
};

export default Layout;
