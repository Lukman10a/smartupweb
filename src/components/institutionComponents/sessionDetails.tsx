import { IoCloseCircle } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TermData {
  timeName: string;
  resumptionDate: string;
  closingDate: string;
}

interface FormProps<T> {
  formData: T; // Generic type to allow flexibility
  onInputChange: (term: keyof T, field: keyof TermData, value: string) => void;
  onClearInput: (term: keyof T, field: keyof TermData) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
  description?: string;
  inputLabels?: {
    timeName: string;
    resumptionDate: string;
    closingDate: string;
  };
  submitButtonText?: string;
}

export const SessionDetailsForm = <T extends Record<string, TermData>>({
  formData,
  onInputChange,
  onClearInput,
  onSubmit,
  title = "Form Title",
  description = "Form description",
  inputLabels = {
    timeName: "Time name",
    resumptionDate: "Resumption Date",
    closingDate: "Closing Date",
  },
  submitButtonText = "Submit",
}: FormProps<T>) => {
  return (
    <div className="rounded-md bg-white p-6">
      <form
        onSubmit={onSubmit}
        className="space-y-10 rounded-md bg-[#F8F9FB] p-6"
      >
        {Object.keys(formData).map((term) => (
          <div
            key={term}
            className="rounded-lg border bg-gray-50 p-4 shadow-md"
          >
            {/* <h3 className="mb-4 text-lg font-semibold capitalize">
              {term} Term
            </h3> */}
            <div className="flex space-x-6">
              {/* Time Name Input */}
              <div className="relative flex-1">
                <label
                  htmlFor={`${term}TimeName`}
                  className="block text-sm font-medium text-gray-700"
                >
                  {inputLabels.timeName}
                </label>
                <input
                  type="text"
                  id={`${term}TimeName`}
                  name={`${term}TimeName`}
                  value={formData[term as keyof T].timeName}
                  onChange={(e) =>
                    onInputChange(term as keyof T, "timeName", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder={`Enter ${inputLabels.timeName}`}
                />
                {formData[term as keyof T].timeName && (
                  <IoCloseCircle
                    size={20}
                    className="absolute right-3 top-8 cursor-pointer text-gray-400"
                    onClick={() => onClearInput(term as keyof T, "timeName")}
                  />
                )}
              </div>

              {/* Resumption Date Input */}
              <div className="relative flex-1">
                <label
                  htmlFor={`${term}ResumptionDate`}
                  className="block text-sm font-medium text-gray-700"
                >
                  {inputLabels.resumptionDate}
                </label>
                <input
                  type="date"
                  id={`${term}ResumptionDate`}
                  name={`${term}ResumptionDate`}
                  value={formData[term as keyof T].resumptionDate}
                  onChange={(e) =>
                    onInputChange(
                      term as keyof T,
                      "resumptionDate",
                      e.target.value,
                    )
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {formData[term as keyof T].resumptionDate && (
                  <IoCloseCircle
                    size={20}
                    className="absolute right-8 top-9 cursor-pointer text-gray-400"
                    onClick={() =>
                      onClearInput(term as keyof T, "resumptionDate")
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
                  {inputLabels.closingDate}
                </label>
                <input
                  type="date"
                  id={`${term}ClosingDate`}
                  name={`${term}ClosingDate`}
                  value={formData[term as keyof T].closingDate}
                  onChange={(e) =>
                    onInputChange(
                      term as keyof T,
                      "closingDate",
                      e.target.value,
                    )
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {formData[term as keyof T].closingDate && (
                  <IoCloseCircle
                    size={20}
                    className="absolute right-8 top-9 cursor-pointer text-gray-400"
                    onClick={() => onClearInput(term as keyof T, "closingDate")}
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
            {submitButtonText}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
