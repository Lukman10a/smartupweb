import React, { ReactNode, useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface DialogDemoProps {
  children: ReactNode;
  name: string;
  slug: string;
  path: string | string[] | undefined;
  onUpdate: (newName: string, newAddress: string) => void; // Function to handle form submission
}

const EditInfoModal: React.FC<DialogDemoProps> = ({
  children,
  name,
  slug,
  path,
  onUpdate,
}) => {
  // Local state for form fields
  const [schoolName, setSchoolName] = useState(name);
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false); // State to control modal open/close
  const [isFormValid, setIsFormValid] = useState(false); // State to handle form validation

  useEffect(() => {
    // Validate form: both fields must be filled
    setIsFormValid(schoolName.trim() !== "" && address.trim() !== "");
  }, [schoolName, address]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(schoolName, address); // Update the school information in the parent component
    setOpen(false); // Close the modal after updating
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 backdrop-blur-md" />
        <Dialog.Content className="fixed left-[50%] top-[50%] w-[95vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none">
          {/* Close button */}
          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-full bg-[#F9F9F9] p-2"
              aria-label="Close"
            >
              <Cross2Icon className="h-4 w-4" />
            </button>
          </Dialog.Close>

          {/* Modal Title */}
          <Dialog.Title className="text-2xl font-medium text-gray-800">
            School Information
          </Dialog.Title>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-4 space-y-7">
            <div>
              <label
                htmlFor="schoolName"
                className="block text-sm font-medium text-gray-700"
              >
                School name
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="mt-1 w-full rounded-md bg-[#F8F9FB] p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 w-full rounded-md bg-[#F8F9FB] p-2"
                required
              />
            </div>

            {/* Update Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!isFormValid} // Disable button if form is not valid
                className={`w-full rounded-md px-4 py-2 text-white shadow focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 ${
                  isFormValid
                    ? "bg-red-400 hover:bg-red-500"
                    : "cursor-not-allowed bg-gray-300"
                }`}
              >
                Update School Information
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditInfoModal;
