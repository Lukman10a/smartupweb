import React from "react";
import {
  IoChevronBackCircleOutline,
  IoNotificationsCircleOutline,
} from "react-icons/io5";
import { useRouter } from "next/router";

interface HeaderProps {
  title: string | string[] | undefined;
  fromQuery: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, fromQuery }) => {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {fromQuery && <IoChevronBackCircleOutline size={35} />}
        <p className="font-dm_sans text-2xl font-medium">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <IoNotificationsCircleOutline size={40} />
      </div>
    </div>
  );
};

export default Header;
