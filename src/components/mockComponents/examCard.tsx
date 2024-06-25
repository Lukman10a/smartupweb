// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function ExamCard({ path }: { path: string }) {
//   const EXAM = [
//     {
//       id: 1,
//       title: "Assessment",
//       slug: "/assessment",
//     },
//     {
//       id: 2,
//       title: "Syllabus",
//       slug: "/syllabus",
//     },
//     {
//       id: 3,
//       title: "Virtual Lectures",
//       slug: "/virtual-qectures",
//     },
//     {
//       id: 4,
//       title: "Lecture Quizzes",
//       slug: "/lecture-quizzes",
//     },
//   ];

//   return (
//     <div>
//       {EXAM.map((item) => (
//         <Link
//           href={{
//             pathname: `${path}${item.slug}`,
//             query: { type: item.title },
//           }}
//           className="my-3 flex justify-between rounded-md bg-[#F8F9FB] p-3"
//           key={item.id}
//         >
//           <div className="flex gap-2">
//             <Image src={require("../../../public/assets/note.svg")} alt="" />
//             <p>{item.title}</p>
//           </div>
//           <Image src={require("../../../public/assets/forward.svg")} alt="" />
//         </Link>
//       ))}
//     </div>
//   );
// }

import Link from "next/link";
import React from "react";

export default function ExamCard({ title }: { title: string }) {
  console.log(title);
  return (
    <div>
      <div className="my-3 grid cursor-pointer grid-cols-3 items-center rounded-md bg-[#F8F9FB] p-3">
        <p className="text-md font-bold">{title}</p>
        <p className="text-[#D32D44]">45 minutes</p>
        <button className="rounded-md bg-[#D32D441A] p-2 px-4">
          <p className="text-[#D32D44]">Deadline: 10-29-2024</p>
        </button>
      </div>
    </div>
  );
}
