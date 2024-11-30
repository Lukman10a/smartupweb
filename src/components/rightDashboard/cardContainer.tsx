import React, { ReactNode } from "react";
import Link from "next/link";

const SummaryContainer = ({
  children,
  sectionTitle,
  summaryAction,
  link,
}: {
  children: ReactNode;
  sectionTitle: string;
  summaryAction: string;
  link?: string;
}) => {
  return (
    <article className="rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="font-bold">{sectionTitle}</p>
        {link ? (
          <Link href={link} passHref>
            <button className="text-[#D32D44]">{summaryAction}</button>
          </Link>
        ) : (
          <button className="text-[#D32D44]">{summaryAction}</button>
        )}
      </div>
      {children}
    </article>
  );
};

export default SummaryContainer;
