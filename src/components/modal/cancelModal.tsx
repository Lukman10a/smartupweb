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
}

const CancelModal: React.FC<CancelModalProps> = ({
  children,
  name,
  subscript,
  slug,
  subTitleIcon,
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 backdrop-blur-md" />
      <Dialog.Content className="fixed left-[50%] top-[50%] w-[95vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none">
        {/* Close button */}
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
              href={`/practiceQuestion/${slug}?subject=${name}`}
              as={`/practiceQuestion/${slug}`}
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

export default CancelModal;
