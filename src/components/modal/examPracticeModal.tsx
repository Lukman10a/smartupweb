import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

interface DialogDemoProps {
  children: ReactNode;
  name: string;
  slug: string;
  path: string | string[] | undefined;
}

const ExamPracticeModal: React.FC<DialogDemoProps> = ({
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
          Select your preferred exam mode.
        </Dialog.Title>

        <div className="mt-[25px] flex justify-between">
          <Dialog.Close asChild>
            <div className="flex flex-col items-center gap-2 rounded-md bg-[#D32D4426] p-2 text-[#D32D44]">
              <Image
                src={require("../../../public/assets/topic.svg")}
                alt="topicsvg"
              />
              <button>Take tests at random</button>
            </div>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Link
              href={{
                pathname: `/examPracticeQuestion/${path}${slug}`,
                query: { title: name, id: 100 },
              }}
              // in case i want the id to show in the url
              as={`/examPracticeQuestion/${path}${slug}?id=${100}`}
            >
              <div className="flex flex-col items-center gap-2 rounded-md bg-[#D32D44] p-2 text-white">
                <Image
                  src={require("../../../public/assets/topic.svg")}
                  alt="topicsvg"
                />
                <button>Take tests by year</button>
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

export default ExamPracticeModal;
