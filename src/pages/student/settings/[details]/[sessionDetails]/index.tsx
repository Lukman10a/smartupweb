import Header from "@/components/header";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the structure of the form state
interface TermData {
  timeName: string;
  resumptionDate: string;
  closingDate: string;
}

interface FormState {
  first: TermData;
  second: TermData;
  third: TermData;
}

export default function SessionDetails() {
  const { query } = useRouter();

  // Initialize form state with default values
  const [formState, setFormState] = useState<FormState>({
    first: { timeName: "", resumptionDate: "", closingDate: "" },
    second: { timeName: "", resumptionDate: "", closingDate: "" },
    third: { timeName: "", resumptionDate: "", closingDate: "" },
  });

  // Handle input change
  const handleInputChange = (
    term: keyof FormState,
    field: keyof TermData,
    value: string,
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [term]: { ...prevState[term], [field]: value },
    }));
  };

  // Handle clear input
  const handleClearInput = (term: keyof FormState, field: keyof TermData) => {
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
      <Header title={query.session} fromQuery={true} showNotificationIcon />
      <div className="rounded-md bg-white p-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-10 rounded-md bg-[#F8F9FB] p-6"
        >
          {["first", "second", "third"].map((term) => (
            <div
              key={term}
              className="rounded-lg border bg-gray-50 p-4 shadow-md"
            >
              <h3 className="mb-4 text-lg font-semibold capitalize">
                {term} Term
              </h3>
              <div className="flex space-x-6">
                {/* Time Name Input */}
                <div className="relative flex-1">
                  <label
                    htmlFor={`${term}TimeName`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Time Name
                  </label>
                  <input
                    type="text"
                    id={`${term}TimeName`}
                    name={`${term}TimeName`}
                    value={formState[term as keyof FormState].timeName}
                    onChange={(e) =>
                      handleInputChange(
                        term as keyof FormState,
                        "timeName",
                        e.target.value,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter Time Name"
                  />
                  {formState[term as keyof FormState].timeName && (
                    <IoCloseCircle
                      size={20}
                      className="absolute right-3 top-8 cursor-pointer text-gray-400"
                      onClick={() =>
                        handleClearInput(term as keyof FormState, "timeName")
                      }
                    />
                  )}
                </div>

                {/* Resumption Date Input */}
                <div className="relative flex-1">
                  <label
                    htmlFor={`${term}ResumptionDate`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Resumption Date
                  </label>
                  <input
                    type="date"
                    id={`${term}ResumptionDate`}
                    name={`${term}ResumptionDate`}
                    value={formState[term as keyof FormState].resumptionDate}
                    onChange={(e) =>
                      handleInputChange(
                        term as keyof FormState,
                        "resumptionDate",
                        e.target.value,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {formState[term as keyof FormState].resumptionDate && (
                    <IoCloseCircle
                      size={20}
                      className="absolute right-8 top-9 cursor-pointer text-gray-400"
                      onClick={() =>
                        handleClearInput(
                          term as keyof FormState,
                          "resumptionDate",
                        )
                      }
                    />
                  )}
                </div>

                {/* Closing Date Input */}
                <div className="relative flex-1">
                  <label
                    htmlFor={`${term}ClosingDate`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Closing Date
                  </label>
                  <input
                    type="date"
                    id={`${term}ClosingDate`}
                    name={`${term}ClosingDate`}
                    value={formState[term as keyof FormState].closingDate}
                    onChange={(e) =>
                      handleInputChange(
                        term as keyof FormState,
                        "closingDate",
                        e.target.value,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {formState[term as keyof FormState].closingDate && (
                    <IoCloseCircle
                      size={20}
                      className="absolute right-8 top-9 cursor-pointer text-gray-400"
                      onClick={() =>
                        handleClearInput(term as keyof FormState, "closingDate")
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-[#D32D44] p-2 px-24 text-white"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}