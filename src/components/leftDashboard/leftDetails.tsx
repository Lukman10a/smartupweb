// import React from "react";
// import Image from "next/image";

// interface LeftDetailsProps {
//   title: string;
//   logo?: string;
// }

// export const LeftDetails: React.FC<LeftDetailsProps> = ({ title, logo }) => {
//   return (
//     <div className="space-y-4">
//       <div className="flex gap-2 items-center bg-[#D32D44] p-2 rounded-md">
//         <Image src={logo} alt={title} />
//         <p>{title}</p>
//       </div>
//     </div>
//   );
// };

import React from "react";
import Image from "next/image";

export const LeftDetails = () => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center bg-[#D32D44] p-2 px-4 rounded-md">
        <Image src={require("../../../assets/class.svg")} alt="" />
        <p>Class</p>
      </div>
    </div>
  );
};
