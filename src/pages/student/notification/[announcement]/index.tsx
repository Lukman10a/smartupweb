import Image from "next/image";
import map from "../../../../../public/assets/map.png";
import { useRouter } from "next/router";

export default function Announcements() {
  const { query, asPath } = useRouter();

  console.log(query.subject);
  return (
    <div className="">
      <div className="space-y-4 rounded-lg bg-white p-6">
        <div className="flex gap-4">
          <Image src={map} alt="map" width={112} />
          <div className="space-y-4">
            <p className="text-[22px] font-semibold">{query.title}</p>
            <div className="space-x-4 text-base text-[#815259]">
              <span> {query.time} </span>
              <span>|</span>
              <span>{query.date}</span>
            </div>
          </div>
        </div>

        <p className="rounded-md bg-[#F8F9FB] p-6 leading-9">
          {query.description}
        </p>

        <div className="flex justify-end gap-4 py-6">
          <button className="rounded-md bg-[#00A37D] p-2 px-10 text-white">
            Download
          </button>
          <button className="rounded-md bg-[#D32D44] p-2 px-10 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
