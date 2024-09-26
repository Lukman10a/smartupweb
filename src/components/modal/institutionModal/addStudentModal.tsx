import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import img from "@../../../public/assets/student-modal-img.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DialogDemoProps {
  children: ReactNode;
  name: string;
  slug: string;
  path: string | string[] | undefined;
}

const AddStudentModal: React.FC<DialogDemoProps> = ({
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
        <div className="flex justify-center">
          <Image
            src={img}
            alt=""
            className="text-center"
            objectPosition="center"
          />
        </div>
        <Dialog.Title className="text-center text-[18px] font-bold">
          Student added successfully
        </Dialog.Title>

        <div className="text-center">
          A new student has been added and the code generated was s-pmp95df3y0
        </div>
        <div>
          <div className="py-2">
            <Link
              href={{
                pathname: `/`,
                query: {},
              }}
            >
              <div className="gap-2 rounded-md bg-[#D32D44] p-3 text-center text-white">
                <button>Okay</button>
              </div>
            </Link>
          </div>
        </div>
        {/* <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close> */}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default AddStudentModal;
