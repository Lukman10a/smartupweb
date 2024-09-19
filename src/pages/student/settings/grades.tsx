import Header from "@/components/header";
import GradeModal from "@/components/modal/institutionModal/gradeInfo";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";

interface GradeData {
  className1: string;
  className2: string;
}

interface FormState {
  first: GradeData;
  second: GradeData;
  third: GradeData;
}

export default function Grades() {
  const { query } = useRouter();

  // Initialize form state with default values
  const [formState, setFormState] = useState<FormState>({
    first: { className1: "", className2: "" },
    second: { className1: "", className2: "" },
    third: { className1: "", className2: "" },
  });

  // Handle input change
  const handleInputChange = (
    term: keyof FormState,
    field: keyof GradeData,
    value: string,
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [term]: { ...prevState[term], [field]: value },
    }));
  };

  // Handle clear input
  const handleClearInput = (term: keyof FormState, field: keyof GradeData) => {
    handleInputChange(term, field, "");
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Form Submitted", formState);

      // Show success toast
      toast.success("Form submitted successfully!");
    } catch (error) {
      // Show error toast
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <Header title={query.title} fromQuery={false} showNotificationIcon />

      <div className="rounded-md bg-white p-6">
        <form onSubmit={handleSubmit} className="space-y-10 rounded-md p-2">
          {["first", "second", "third"].map((term) => (
            <div key={term} className="rounded-lg bg-[#F8F9FB] p-4">
              <div className="flex space-x-6">
                {/* Class Name 1 Input */}
                <div className="relative flex-1">
                  <label
                    htmlFor={`${term}ClassName1`}
                    className="block text-sm font-medium"
                  >
                    Class Name 1
                  </label>
                  <input
                    type="text"
                    id={`${term}ClassName1`}
                    name={`${term}ClassName1`}
                    value={formState[term as keyof FormState].className1}
                    onChange={(e) =>
                      handleInputChange(
                        term as keyof FormState,
                        "className1",
                        e.target.value,
                      )
                    }
                    className="mt-1 block w-full rounded-md p-2"
                    placeholder="Enter Class Name 1"
                  />
                  {formState[term as keyof FormState].className1 && (
                    <IoCloseCircle
                      size={20}
                      className="absolute right-3 top-8 cursor-pointer text-gray-400"
                      onClick={() =>
                        handleClearInput(term as keyof FormState, "className1")
                      }
                    />
                  )}
                </div>

                {/* Class Name 2 Input */}
                <div className="relative flex-1">
                  <label
                    htmlFor={`${term}ClassName2`}
                    className="block text-sm font-medium"
                  >
                    Class Name 2
                  </label>
                  <input
                    type="text"
                    id={`${term}ClassName2`}
                    name={`${term}ClassName2`}
                    value={formState[term as keyof FormState].className2}
                    onChange={(e) =>
                      handleInputChange(
                        term as keyof FormState,
                        "className2",
                        e.target.value,
                      )
                    }
                    className="mt-1 block w-full rounded-md p-2"
                    placeholder="Enter Class Name 2"
                  />
                  {formState[term as keyof FormState].className2 && (
                    <IoCloseCircle
                      size={20}
                      className="absolute right-3 top-8 cursor-pointer text-gray-400"
                      onClick={() =>
                        handleClearInput(term as keyof FormState, "className2")
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          ))}

          <GradeModal title={undefined} slug={""} path={undefined}>
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-lg bg-[#D32D44] p-2 px-24 text-white"
              >
                Submit
              </button>
            </div>
          </GradeModal>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
