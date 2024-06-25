import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface CancelModalProps {
  children: ReactNode;
  name: string;
  subscript?: string;
  slug: string;
  subTitleIcon?: ReactNode;
  title?: string | string[] | undefined;
}

const CancelExamModal: React.FC<CancelModalProps> = ({
  children,
  name,
  subscript,
  slug,
  subTitleIcon,
  title,
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-[18px] font-bold">
          Are you sure, You want to cancel the test?{" "}
        </Dialog.Title>
        <div className="mt-[25px]">
          <Dialog.Close asChild>
            <div className="mb-4 rounded-md bg-[#D32D4426] p-2 text-center text-[#D32D44]">
              <button>No, continue the test</button>
            </div>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Link
              href={{
                pathname: `/examPracticeQuestion/${title}`,
              }}
            >
              <div className="rounded-md bg-[#D32D44] p-2 text-center text-white">
                <button>Yes, cancel the test</button>
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

export default CancelExamModal;
