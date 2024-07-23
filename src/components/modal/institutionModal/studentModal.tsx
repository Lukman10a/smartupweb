import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DialogDemoProps {
  children: ReactNode;
  name: string;
  slug: string;
  path: string | string[] | undefined;
}

const EducatorModal: React.FC<DialogDemoProps> = ({
  children,
  name,
  slug,
  path,
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-[18px] font-bold">
          Assign student
        </Dialog.Title>

        <div className="mt-[25px]">
          <div className="mb-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Select class"
                className="w-full rounded-md bg-[#F4F4F4] p-3"
              />
              <RiArrowDropDownLine
                className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
                size={25}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Select student"
                className="w-full rounded-md bg-[#F4F4F4] p-3 pr-10"
              />
              <RiArrowDropDownLine
                className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
                size={25}
              />
            </div>
          </div>
          <Dialog.Close asChild>
            <div className="">
              <div className="py-2">
                <Link
                  href={{
                    pathname: `/`,
                    query: {},
                  }}
                >
                  <div className="gap-2 rounded-md bg-[#D32D44] p-3 text-center text-white">
                    <button>Assign Student</button>
                  </div>
                </Link>
              </div>
              <Link
                href={{
                  pathname: `/`,
                  query: {},
                }}
              >
                <div className="gap-2 rounded-md bg-[#D32D441A] p-3 text-center text-[#D32D44]">
                  <button>Bulk assign</button>
                </div>
              </Link>
            </div>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default EducatorModal;
