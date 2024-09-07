import Image from "next/image";
import map from "../../../../../public/assets/map.png";

export default function Announcements() {
  return (
    <div className="">
      <div className="space-y-4 rounded-lg bg-white p-6">
        <div className="flex gap-4">
          <Image src={map} alt="map" width={112} />
          <div className="space-y-4">
            <p className="text-[22px] font-semibold">
              Lorem Ipsum has been the industry's standard dummy text since the
              1500s.
            </p>
            <div className="space-x-4 text-base text-[#815259]">
              <span> 30 mins ago </span>
              <span>|</span>
              <span>24-05-2024</span>
            </div>
          </div>
        </div>

        <p className="rounded-md bg-[#F8F9FB] p-6 leading-9">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). <br />
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).s
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
