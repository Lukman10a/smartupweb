import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface SelectInputProps {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  selected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <p>{label}</p>
      <div className="relative">
        <div
          className="flex w-[435px] cursor-pointer items-center justify-between rounded-md bg-white p-2 px-4"
          onClick={handleToggle}
        >
          <span>{selected || `Select ${label}`}</span>
          {isOpen ? (
            <RiArrowDropUpLine size={25} />
          ) : (
            <RiArrowDropDownLine size={25} />
          )}
        </div>
        {isOpen && (
          <ul className="absolute z-10 mt-1 w-[435px] rounded-md border border-gray-300 bg-white shadow-lg">
            {options.map((option) => (
              <li
                key={option}
                className="cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
