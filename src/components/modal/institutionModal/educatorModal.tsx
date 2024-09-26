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
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 backdrop-blur-md" />
      <Dialog.Content className="fixed left-[50%] top-[50%] w-[95vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none">
        {/* Close button */}
        <Dialog.Title className="text-[18px] font-bold">
          Assign educator
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
                placeholder="Select educator"
                className="w-full rounded-md bg-[#F4F4F4] p-3 pr-10"
              />
              <RiArrowDropDownLine
                className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
                size={25}
              />
            </div>
          </div>
          <Dialog.Close asChild>
            <Link
              href={{
                pathname: `/`,
                query: {},
              }}
            >
              <div className="gap-2 rounded-md bg-[#D32D44] p-3 text-center text-white">
                <button>Assign educator</button>
              </div>
            </Link>
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
