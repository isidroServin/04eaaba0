import React from "react";
import { ImSad } from "react-icons/im";
import { BiRefresh } from "react-icons/bi";

const ErrorCard = ({ error }) => {
  return (
    <div className="flex flex-col gap-2 w-60 sm:w-full text-[10px] sm:text-xs z-50">
      <div className="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
        <div className="flex gap-2">
          <ImSad className="text-[#FF0000] w-6 h-6 " />
        </div>
        <div className="text-white text-xl">{error}</div>
        <button className="text-blue-200 hover:bg-white/5 p-1 rounded-md transition-colors ease-linear"></button>
      </div>
    </div>
  );
};

export default ErrorCard;
