import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import success from "@../../../public/assets/success.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DialogDemoProps {
  children: ReactNode;
  title: string | string[] | undefined;
  slug: string;
  path: string | string[] | undefined;
}

const GradeModal: React.FC<DialogDemoProps> = ({
  children,
  title,
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
            src={success}
            alt=""
            className="text-center"
            objectPosition="center"
          />
        </div>
        <Dialog.Title className="text-center text-[18px] font-bold">
          Changes saved successfully{" "}
        </Dialog.Title>

        <div className="text-center">
          The changes made to this session has been effected successfully
        </div>
        <div>
          <div className="py-2">
            <Link
              href={{
                pathname: `${path}`,
                query: { title: title },
              }}
              as={`/student/settings`}
            >
              <div className="gap-2 rounded-md bg-[#D32D44] p-3 text-center text-white">
                <button>Okay</button>
              </div>
            </Link>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default GradeModal;
