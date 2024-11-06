import Header from "@/components/header";
import Card from "@/components/rightDashboard/card";
import SummaryContainer from "@/components/rightDashboard/cardContainer";
import TableContainer from "@/components/table";
import React from "react";
import { TfiCup } from "react-icons/tfi";

export default function Dashboard() {
  return (
    <div>
      <Header title="Dashboard" fromQuery={false} />
      <SummaryContainer sectionTitle={"Progress report"} summaryAction={""}>
        <div className="grid grid-cols-4 justify-between gap-4">
          <Card
            titlePoints={"60"}
            subtitle="Total students"
            subTitleIcon={<TfiCup />}
            subscript="Students"
          />
          <Card
            titlePoints={"20"}
            subtitle="Total educators"
            subTitleIcon={<TfiCup />}
            subscript="Educators"
          />
          <Card
            titlePoints={"35"}
            subtitle="Total classes"
            subTitleIcon={<TfiCup />}
            subscript="Classes"
          />
          <Card
            titlePoints={"72"}
            subtitle="Total courses"
            subTitleIcon={<TfiCup />}
            subscript="Courses"
          />
        </div>
      </SummaryContainer>

      <TableContainer />
    </div>
  );
}
