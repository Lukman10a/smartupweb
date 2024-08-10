// import React, { useEffect, useState } from "react";
// import { FiRefreshCw } from "react-icons/fi";
// import { IoNotificationsCircleOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { TfiCrown, TfiCup } from "react-icons/tfi";
// import TableContainer from "../table";
// import { useQuery } from "@tanstack/react-query";
// import Card from "./card";
// import SummaryContainer from "./cardContainer";
// import { fetchClassesData, fetchData } from "./utils";
// import Loading from "../loading";

// export default function RightDashboard() {
//   const { isPending, error, data } = useQuery({
//     queryKey: ["userData"],
//     queryFn: fetchData,
//   });
//   const {
//     isPending: classesPending,
//     error: classesError,
//     data: classesData,
//   } = useQuery({
//     queryKey: ["classesData"],
//     queryFn: fetchClassesData,
//   });

//   if (isPending || classesPending) return <Loading />;

//   if (error) return "An error has occurred: " + error?.message;
//   if (classesError) return "An error has occurred: " + classesError?.message;

//   return (
//     <section>
//       <div className="flex items-center justify-between">
//         <p className="text-2xl font-medium">Dashboard</p>
//         <div className="flex items-center gap-2">
//           <div className="flex items-center gap-2 rounded-md bg-[#D32D4426] p-2">
//             <FiRefreshCw color="#D32D44" />
//             <p className="text-sm font-medium text-[#D32D44]">
//               Switch Institution
//             </p>
//           </div>
//           <IoNotificationsCircleOutline size={40} />
//         </div>
//       </div>

//       <div className="my-4 flex items-center justify-between rounded-md bg-white p-4">
//         <div className="flex items-center gap-3">
//           <CgProfile size={30} />
//           <p className="text-[18px] font-medium text-[#0F0204]">
//             {data.full_name}
//           </p>
//         </div>
//         <p className="text-[18px] font-medium capitalize text-[#0F0204]">
//           {data.sex}
//         </p>
//         <p className="text-[18px] font-medium uppercase text-[#0F0204]">
//           {data.level}
//         </p>
//         <p className="text-[18px] font-medium text-[#0F0204]">
//           Science department
//         </p>
//         <div className="flex items-center gap-3 rounded-md bg-[#00A37D26] p-2 px-6">
//           <TfiCrown color="#00A37D" />
//           <p className="text-sm font-medium text-[#00A37D]">
//             No current pending payment
//           </p>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <SummaryContainer
//           sectionTitle="Progress report"
//           summaryAction="Take a test"
//         >
//           <div className="grid grid-cols-4 justify-between gap-4">
//             <Card
//               titlePoints={data.best_score}
//               subtitle="Best score"
//               subTitleIcon={<TfiCup />}
//               subscript="Points"
//             />
//             <Card
//               titlePoints={data.average_score}
//               subtitle="Average score"
//               subTitleIcon={<TfiCup />}
//               subscript="Points"
//             />
//             <Card
//               titlePoints={data.videos_watched}
//               subTitleIcon={<TfiCup />}
//               subscript="Videos"
//               subtitle="Videos Watched"
//             />
//             <Card
//               titlePoints={data.tests_taken}
//               subtitle="Test Taken"
//               subTitleIcon={<TfiCup />}
//               subscript="Tests"
//             />
//           </div>
//         </SummaryContainer>

//         <SummaryContainer
//           sectionTitle="Classes"
//           summaryAction="See all classes"
//         >
//           <button className="grid grid-cols-4 justify-between gap-4">
//             {classesData.map((classData: any) => (
//               <Card
//                 key={classData.id}
//                 titlePoints={classData.name}
//                 subtitle={`${classData.students_list_count} attendants`}
//               />
//             ))}
//           </button>
//         </SummaryContainer>
//       </div>
//       {/* <TableContainer /> */}
//     </section>
//   );
// }

// import Dashboard from "@/pages/student/dashboard";
// import React from "react";

// export default function RightDashboard() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }
