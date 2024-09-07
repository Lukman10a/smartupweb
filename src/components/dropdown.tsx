import React, { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

interface DropdownProps<T> {
  items: T[];
  selectedItem: T | null;
  onSelect: (item: T) => void;
}

export default function Dropdown<T extends { id: number; name: string }>({
  items,
  selectedItem,
  onSelect,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 rounded-md border-2 p-2"
        onClick={toggleDropdown}
      >
        <p>{selectedItem ? selectedItem.name : "Show More"}</p>
        {isOpen ? (
          <RiArrowDropUpLine size={25} />
        ) : (
          <RiArrowDropDownLine size={25} />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 rounded-md bg-white shadow-lg">
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className={`border-b p-3 px-10 ${
                  selectedItem?.id === item.id
                    ? "bg-[#D32D441A] text-[#D32D44]"
                    : ""
                }`}
              >
                <button
                  className="w-full text-left"
                  onClick={() => {
                    onSelect(item);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
