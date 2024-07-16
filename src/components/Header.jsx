import React from "react";
import { MdDialpad } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { RiContactsBook3Line } from "react-icons/ri";

const Header = ({ fn1, archived }) => {
  return (
    <div className="flex flex-col">
      <div className="text-center mb-6 mt-6 text-teal-500 bg-clip-text text-transparent text-3xl font-black">
        Aircall
      </div>
      <div className="border border-gray-300  py-3 flex gap-1 shadow-xl rounded-md justify-center">
        <div className="group relative px-4 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
            <MdDialpad className="w-6 h-6" />
          </div>
        </div>
        <div className="group relative px-4 cursor-pointer">
          <div
            onClick={() => fn1(false)}
            className={
              !archived
                ? "flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 text-blue-500 bg-lime-300 "
                : "flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500"
            }
          >
            <IoCallSharp className="w-6 h-6" />
          </div>
        </div>
        <div className="group relative px-4 cursor-pointer">
          <div
            onClick={() => fn1(true)}
            className={
              archived
                ? "flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 text-blue-500 bg-lime-300 "
                : "flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500"
            }
          >
            <HiOutlineArchiveBox className="w-6 h-6" />
          </div>
        </div>
        <div className="group relative px-4 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
            <RiContactsBook3Line className="w-6 h-6" />
          </div>
          {/*<span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Contacts
  </span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
