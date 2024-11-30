import Card from "@/components/rightDashboard/card";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import ResultButton from "@/components/resultButton";
import { CLASS } from "../../../../data";
import Loading from "@/components/loading";
import { fetchClassesData } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

type ClassActivitiesProps = {
  titleFromQuery?: boolean;
};

export default function Classes({ titleFromQuery }: ClassActivitiesProps) {
  const [currentCard, setCurrentCard] = useState({
    name: "",
    slug: "",
  });

  const {
    isPending: classDataPending,
    error: classDataError,
    data: classDataData,
  } = useQuery({
    queryKey: ["classdata"],
    queryFn: fetchClassesData,
  });

  if (classDataPending) return <Loading />;

  if (classDataError)
    return "An error has occurred: " + classDataError?.message;

  return (
    <section>
      <Header title={"Classes"} fromQuery={Boolean(titleFromQuery)} />
      <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
        <input
          type="text"
          placeholder="Search for courses"
          className="rounded-md bg-[#F8F9FB] p-2"
        />
        <ResultButton test={50} link={""} />
      </div>

      <div>
        <p className="py-4">Select a class to continue.</p>
      </div>
      <section>
        <div className="space-y-4">
          <div className="grid cursor-pointer grid-cols-4 gap-12 rounded-md bg-white p-3 px-5">
            {classDataData.map(
              (item: {
                students_list_count: string | number;
                name: string;
                id: React.Key | null | undefined;
              }) => (
                <Link
                  href={{
                    pathname: `/student/classes/[classActivities]`,
                    query: {
                      classActivities: item.name,
                      class: item.name,
                      name: "name",
                    },
                  }}
                  as={`/student/classes/${item.name}`}
                  key={item.id}
                >
                  <Card
                    key={item.id}
                    subtitle={`${item.students_list_count} participants`}
                    titlePoints={item.name}
                    onClick={() =>
                      setCurrentCard({ name: item.name, slug: item.name })
                    }
                  />
                </Link>
              ),
            )}
          </div>
        </div>
      </section>
    </section>
  );
}

// import Card from "@/components/rightDashboard/card";
// import React, { useState } from "react";
// import { IoNotificationsCircleOutline } from "react-icons/io5";
// import Loading from "@/components/loading";
// import { useQuery } from "@tanstack/react-query";
// import SubjectCard from "@/components/modal/subjectModal";
// import Link from "next/link";
// import Header from "@/components/header";
// import { fetchClasstData } from "@/lib/api";

// type ClassActivitiesProps = {
//   titleFromQuery?: boolean;
// };

// export default function Classes({ titleFromQuery }: ClassActivitiesProps) {
//   const [currentCard, setCurrentCard] = useState({
//     name: "",
//     slug: "",
//   });

//   const {
//     isPending: subjectPending,
//     error: classError,
//     data: classtData,
//   } = useQuery({
//     queryKey: ["classesData"],
//     queryFn: fetchClasstData,
//   });

//   console.log(classtData);

//   if (subjectPending) return <Loading />;

//   if (classError) return "An error has occurred: " + classError?.message;

//   return (
//     <section>
//       <Header title={"Classes"} fromQuery={Boolean(titleFromQuery)} />
//       <div className="mx-auto flex items-center justify-between rounded-md bg-white p-3">
//         <input
//           type="text"
//           placeholder="Search for courses"
//           className="rounded-md bg-[#F8F9FB] p-2"
//         />
//         <div className="flex">
//           <div className="flex gap-2 rounded-l-md bg-[#D32D4426] p-2">
//             <p className="text-[#D32D44]">Total tests taken:</p>
//             <p>53</p>
//           </div>

//           <p className="rounded-md bg-[#D32D44] p-2 text-white">View results</p>
//         </div>
//       </div>

//       <div>
//         <p className="py-4">Select a class to continue.</p>
//       </div>
//       <section>
//         <div className="grid grid-rows-3 justify-between space-y-4">
//           <div className="grid cursor-pointer grid-cols-4 gap-12 rounded-md bg-white p-3 px-5">
//             {classtData.map(
//               (item: {
//                 name: string;
//                 id: React.Key | null | undefined;
//                 level: string;
//               }) => (
//                 <Link
//                   href={{
//                     pathname: `/classes/[classActivities]`,
//                     query: {
//                       classActivities: item.name,
//                       class: item.name,
//                       name: "name",
//                     },
//                   }}
//                   as={`/classes/${item.name}`}
//                   key={item.id}
//                 >
//                   <Card
//                     key={item.id}
//                     subtitle={item.level}
//                     titlePoints={item.name}
//                     onClick={() =>
//                       setCurrentCard({ name: item.name, slug: item.name })
//                     }
//                   />
//                 </Link>
//               ),
//             )}
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }
