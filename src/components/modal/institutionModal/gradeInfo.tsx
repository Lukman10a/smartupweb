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
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] space-y-5 rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
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
