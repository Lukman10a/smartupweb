// import Header from "@/components/header";
// import Loading from "@/components/loading";
// import Card from "@/components/rightDashboard/card";
// import SummaryContainer from "@/components/rightDashboard/cardContainer";
// import TableContainer from "@/components/table";
// import { fetchProfileData } from "@/lib/api";
// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import { IoNotificationsCircleOutline } from "react-icons/io5";
// import { TfiCup } from "react-icons/tfi";

// const Profile = () => {
//   const {
//     isPending: profileDataPending,
//     error: profileDataError,
//     data: profileDataData,
//   } = useQuery({
//     queryKey: ["profiledata"],
//     queryFn: fetchProfileData,
//   });

//   if (profileDataPending) return <Loading />;

//   if (profileDataError)
//     return "An error has occurred: " + profileDataError?.message;

//   console.log({ profileDataData });

//   return (
//     <section>
//       <Header title="Profile" fromQuery={false} />
//       <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
//         <div className="flex items-center gap-3">
//           <CgProfile size={30} />
//           <p className="text-[18px] font-medium text-[#0F0204]">
//             Adeleke William
//           </p>
//         </div>

//         <div className="flex items-center gap-3 rounded-md bg-[#D32D4426] p-2 px-6">
//           <p className="text-sm font-medium text-[#D32D44]">Reset password</p>
//         </div>
//       </div>
//       <section className="my-3 grid grid-cols-2 gap-5">
//         <div className="rounded-md bg-white p-4">
//           <p className="mb-3 font-bold">Personal information</p>
//           <ul className="space-y-4">
//             <li className="flex items-center justify-between rounded-sm bg-[#F8F9FB] p-3 text-[#0F0204]">
//               <p className="text-[#0F0204]">Username</p>
//               <p className="font-medium text-[#0F0204]">davidthomas142</p>
//             </li>
//             <li className="flex items-center justify-between rounded-sm bg-[#F8F9FB] p-3 text-[#0F0204]">
//               <p className="">Level</p>
//               <p className="font-medium">S.S.S 2</p>
//             </li>
//             <li className="flex items-center justify-between rounded-sm bg-[#F8F9FB] p-3 text-[#0F0204]">
//               <p className="">Sex</p>
//               <p className="font-medium">Male</p>
//             </li>

//             <li className="flex items-center justify-between rounded-sm bg-[#F8F9FB] p-3 text-[#0F0204]">
//               <p className="">Class</p>
//               <p className="font-medium">Science department</p>
//             </li>
//           </ul>
//         </div>
//         <SummaryContainer
//           sectionTitle="Progress report"
//           summaryAction="Take a test"
//         >
//           <div className="grid grid-cols-2 justify-between gap-4">
//             <Card
//               titlePoints={"3,924"}
//               subtitle="Best score"
//               subTitleIcon={<TfiCup />}
//               subscript="Points"
//             />
//             <Card
//               titlePoints={"800"}
//               subtitle="Average score"
//               subTitleIcon={<TfiCup />}
//               subscript="Points"
//             />
//             <Card
//               titlePoints={"72"}
//               subTitleIcon={<TfiCup />}
//               subscript="Videos"
//               subtitle="Videos Watched"
//             />
//             <Card
//               titlePoints={"53"}
//               subtitle="Test Taken"
//               subTitleIcon={<TfiCup />}
//               subscript="Tests"
//             />
//           </div>
//         </SummaryContainer>
//       </section>

//       <TableContainer />
//     </section>
//   );
// };

// export default Profile;

import Header from "@/components/header";
import Loading from "@/components/loading";
import Card from "@/components/rightDashboard/card";
import SummaryContainer from "@/components/rightDashboard/cardContainer";
import TableContainer from "@/components/table";
import { fetchProfileData } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";

const Profile = () => {
  const {
    isPending: profileDataPending,
    error: profileDataError,
    data: profileDataData,
  } = useQuery({
    queryKey: ["profiledata"],
    queryFn: fetchProfileData,
  });

  if (profileDataPending) return <Loading />;

  if (profileDataError)
    return "An error has occurred: " + profileDataError?.message;

  const {
    full_name,
    username,
    sex,
    level,
    base_level,
    total_score,
    average_score,
    best_score,
    tests_taken,
    videos_watched,
    image_url,
    institutions_affiliated,
  } = profileDataData;

  return (
    <section>
      <Header title="Profile" fromQuery={false} />
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <div className="flex items-center gap-3">
          <Image
            src={image_url}
            alt="Profile"
            width={20}
            height={20}
            className="size-100 h-10 w-10 rounded-full object-cover"
          />
          <p className="text-[18px] font-medium text-[#0F0204]">{full_name}</p>
        </div>
        <div className="flex items-center gap-3 rounded-md bg-[#D32D4426] p-2 px-6">
          <p className="text-sm font-medium text-[#D32D44]">Reset password</p>
        </div>
      </div>

      <section className="my-3 grid grid-cols-2 gap-5">
        {/* Personal Information Section */}
        <div className="rounded-md bg-white p-4">
          <p className="mb-3 font-bold">Personal Information</p>
          <ul className="space-y-4">
            <li className="flex items-center justify-between rounded-sm bg-[#F8F9FB] p-3 text-[#0F0204]">
              <p>Username</p>
              <p className="font-medium">{username}</p>
            </li>
            <li className="flex items-center justify-between rounded-sm bg-[#F8F9FB] p-3 text-[#0F0204]">
              <p>Level</p>
              <p className="font-medium">{level || base_level?.name}</p>
            </li>
            <li className="flex items-center justify-between rounded-sm bg-[#F8F9FB] p-3 text-[#0F0204]">
              <p>Sex</p>
              <p className="font-medium">{sex}</p>
            </li>
            <li className="flex items-center justify-between rounded-sm bg-[#F8F9FB] p-3 text-[#0F0204]">
              <p>Institution</p>
              <p className="font-medium">
                {institutions_affiliated?.[0]?.name || "N/A"}
              </p>
            </li>
          </ul>
        </div>

        {/* Progress Report Section */}
        <SummaryContainer
          sectionTitle="Progress Report"
          summaryAction="Take a test"
        >
          <div className="grid grid-cols-2 justify-between gap-4">
            <Card
              titlePoints={best_score.toLocaleString()}
              subtitle="Best Score"
              subTitleIcon={<TfiCup />}
              subscript="Points"
            />
            <Card
              titlePoints={average_score.toLocaleString()}
              subtitle="Average Score"
              subTitleIcon={<TfiCup />}
              subscript="Points"
            />
            <Card
              titlePoints={videos_watched.toLocaleString()}
              subTitleIcon={<TfiCup />}
              subscript="Videos"
              subtitle="Videos Watched"
            />
            <Card
              titlePoints={tests_taken.toLocaleString()}
              subtitle="Tests Taken"
              subTitleIcon={<TfiCup />}
              subscript="Tests"
            />
          </div>
        </SummaryContainer>
      </section>

      {/* Additional Details */}
      <TableContainer />
    </section>
  );
};

export default Profile;
