import React, { ReactNode } from "react";

const SummaryContainer = ({
  children,
  sectionTitle,
  summaryAction,
}: {
  children: ReactNode;
  sectionTitle: string;
  summaryAction: string;
}) => {
  return (
    <article className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <p className="font-bold">{sectionTitle}</p>
        <button className="text-[#D32D44]">{summaryAction}</button>
      </div>
      {children}
    </article>
  );
};

export default SummaryContainer;
