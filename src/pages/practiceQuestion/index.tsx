// import Card from "@/components/rightDashboard/card";
// import SummaryContainer from "@/components/rightDashboard/cardContainer";
// import Link from "next/link";
// import { Input } from "postcss";
// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import { IoNotificationsCircleOutline } from "react-icons/io5";
// import { TfiCup } from "react-icons/tfi";
// import { PRACTICE_DATA } from "../../../data";
// import { fetchSubjectData } from "@/components/rightDashboard/utils";
// import Loading from "@/components/loading";
// import { useQuery } from "@tanstack/react-query";

// export default function PracticeQuestion() {
//   const {
//     isPending: subjectPending,
//     error: subjectError,
//     data: subjectData,
//   } = useQuery({
//     queryKey: ["classesData"],
//     queryFn: fetchSubjectData,
//   });

//   if (subjectPending) return <Loading />;

//   if (subjectError) return "An error has occurred: " + subjectError?.message;

//   return (
//     <section>
//       <div className="flex justify-between items-center mb-3">
//         <p className="font-medium text-2xl font-dm_sans">Practice questions</p>
//         <div className="flex items-center gap-2">
//           <IoNotificationsCircleOutline size={40} />
//         </div>
//       </div>
//       <div className="flex bg-white items-center justify-between rounded-md mx-auto p-3">
//         <input
//           type="text"
//           placeholder="Search for courses"
//           className="bg-[#F8F9FB] p-2 rounded-md"
//         />
//         <div className="flex">
//           <div className="flex gap-2 bg-[#D32D4426] p-2 rounded-l-md">
//             <p className="text-[#D32D44]">Total tests taken:</p>
//             <p>53</p>
//           </div>

//           <p className="bg-[#D32D44] text-white p-2 rounded-md">View results</p>
//         </div>
//       </div>
//       <div>
//         <p className="py-4">Select a course to take the test.</p>
//       </div>
//       <section>
//         <div className="grid grid-rows-3 justify-between space-y-4">
//           <div className="bg-white grid grid-cols-4 p-3 px-5 gap-12 rounded-md">
//             {subjectData.map(
//               (item: {
//                 slug: any;
//                 name: string;
//                 id: React.Key | null | undefined;
//                 category: string;
//                 description: string;
//               }) => (
//                 <Link
//                   href={`/practiceQuestion/${item.slug}?subject=${item.name}`}
//                   key={item.id}
//                   as={`/practiceQuestion/${item.slug}`}
//                 >
//                   <Card titlePoints={item.name} subtitle={item.description} />
//                 </Link>
//               )
//             )}
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

import Card from "@/components/rightDashboard/card";
import SummaryContainer from "@/components/rightDashboard/cardContainer";
import Link from "next/link";
import { Input } from "postcss";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { PRACTICE_DATA } from "../../../data";
import { fetchSubjectData } from "@/components/rightDashboard/utils";
import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import SubjectCard from "@/components/subjectRodal";

export default function PracticeQuestion() {
  const [currentCard, setCurrentCard] = useState({
    name: "",
    slug: "",
  });

  const {
    isPending: subjectPending,
    error: subjectError,
    data: subjectData,
  } = useQuery({
    queryKey: ["classesData"],
    queryFn: fetchSubjectData,
  });

  if (subjectPending) return <Loading />;

  if (subjectError) return "An error has occurred: " + subjectError?.message;

  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-2xl font-dm_sans">Practice questions</p>
        <div className="flex items-center gap-2">
          <IoNotificationsCircleOutline size={40} />
        </div>
      </div>
      <div className="flex bg-white items-center justify-between rounded-md mx-auto p-3">
        <input
          type="text"
          placeholder="Search for courses"
          className="bg-[#F8F9FB] p-2 rounded-md"
        />
        <div className="flex">
          <div className="flex gap-2 bg-[#D32D4426] p-2 rounded-l-md">
            <p className="text-[#D32D44]">Total tests taken:</p>
            <p>53</p>
          </div>

          <p className="bg-[#D32D44] text-white p-2 rounded-md">View results</p>
        </div>
      </div>
      <div>
        <p className="py-4">Select a course to take the test.</p>
      </div>
      <section>
        <div className="grid grid-rows-3 justify-between space-y-4">
          <SubjectCard name={currentCard.name} slug={currentCard.slug}>
            <div className="bg-white grid grid-cols-4 p-3 px-5 gap-12 rounded-md cursor-pointer">
              {subjectData.map(
                (item: {
                  slug: any;
                  name: string;
                  id: React.Key | null | undefined;
                  category: string;
                  description: string;
                }) => (
                  <Card
                    key={item.id}
                    titlePoints={item.name}
                    subtitle={item.description}
                    onClick={() =>
                      setCurrentCard({ name: item.name, slug: item.slug })
                    }
                  />
                )
              )}
            </div>
          </SubjectCard>
        </div>
      </section>
    </section>
  );
}
