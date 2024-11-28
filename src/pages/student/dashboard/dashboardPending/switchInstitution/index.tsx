import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { FiPlus, FiRefreshCw } from "react-icons/fi";
import alevel from "@/../../public/assets/alevel.svg";
import smartmedal from "@/../../public/assets/smartmedal.svg";
import waec from "@/../../public/assets/waec.svg";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/loading";
import { fetchInstitutionList } from "@/lib/api";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function SwitchInstitution() {
  const [addingInstitution, setAddingInstitution] = useState(false); // State to toggle input field

  const handleAddInstitution = () => {
    setAddingInstitution(true); // Show input field on button click
  };

  const {
    isPending: institutionListPending,
    error: institutionListError,
    data: institutionListData,
  } = useQuery({
    queryKey: ["InstitutionList"],
    queryFn: fetchInstitutionList,
  });

  if (institutionListPending) return <Loading />;

  if (institutionListError)
    return "An error has occurred: " + institutionListError?.message;

  console.log({ institutionListData });
  // const INSTITUTION = [
  //   {
  //     id: 1,
  //     title: "SmartUp Tech",
  //     img: smartmedal,
  //   },
  //   {
  //     id: 2,
  //     title: "A Levels",
  //     img: alevel,
  //   },
  //   {
  //     id: 3,
  //     title: "W.A.E.C",
  //     img: alevel,
  //   },
  //   {
  //     id: 4,
  //     title: "J.A.M.B",
  //     img: waec,
  //   },
  // ];

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoChevronBackCircleOutline size={35} />
          <p className="font-dm_sans text-2xl font-medium">
            Switch Institution
          </p>
        </div>
        <button
          onClick={handleAddInstitution}
          className="flex items-center gap-2 rounded-md bg-[#D32D4426] p-2 px-6 text-[#D32D44]"
        >
          <FiPlus />
          <p>Add new Institution</p>
        </button>
      </div>

      <div className="rounded-md bg-white p-6">
        <div className="mb-16 space-y-2">
          <p>Hi Phil,</p>
          <p>
            You are about to switch institutions, here are the other
            institutions you are affiliated with.
          </p>
        </div>
        {!addingInstitution && (
          <div className="space-y-2">
            {institutionListData?.map(
              (item: {
                id: React.Key | null | undefined;
                logo_url: string | StaticImport;
                name:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
              }) => (
                <div
                  className="flex items-center justify-between rounded-md bg-[#F8F9FB] p-4"
                  key={item.id}
                >
                  <div className="flex items-center gap-2">
                    {item.logo_url && (
                      <Image
                        src={item.logo_url}
                        alt={""}
                        width={50}
                        height={50}
                        className="size-100"
                      />
                    )}
                    <p>{item.name}</p>
                  </div>

                  <div className="flex items-center gap-2 rounded-md bg-[#D32D4426] p-2 px-4 text-[#D32D44]">
                    <FiRefreshCw />
                    <p className="text-sm font-medium">Switch Institution</p>
                  </div>
                </div>
              ),
            )}
          </div>
        )}

        {addingInstitution && (
          <div className="">
            <input
              type="text"
              placeholder="Input the access code here..."
              className="rounded-md border border-gray-300 bg-[#D32D441A] p-2 px-10 text-[#D32D44CC]"
            />
          </div>
        )}

        <div
          className="my-20 flex justify-between"
          style={
            addingInstitution
              ? { flexDirection: "column" }
              : { flexDirection: "row" }
          }
        >
          <div></div>
          <button
            className="flex items-center gap-2 rounded-md bg-[#D32D44] p-2 px-6 text-white"
            onClick={handleAddInstitution}
          >
            <FiPlus />
            <p>Add new Institution</p>
          </button>
        </div>
      </div>
    </section>
  );
}
