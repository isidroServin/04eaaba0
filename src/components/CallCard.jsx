import React, { useState } from "react";
import { SlCallOut, SlCallIn } from "react-icons/sl";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { secondsToMins, getDate } from "./helperFunctions";
import { IoIosArrowDropup, IoIosMore } from "react-icons/io";

const CallCard = ({
  handleArchiveCall,
  handleArchiveAllCalls,
  data,
  archived,
}) => {
  const [viewMore, setViewMore] = useState({});

  const handleView = (id) => {
    setViewMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="flex flex-col gap-2 w-60 sm:w-full text-[10px] sm:text-xs z-50">
      {!archived && (
        <button
          onClick={() => handleArchiveAllCalls()}
          className="bg-[#292929] flex items-center justify-center border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
        >
          <HiOutlineArchiveBox className="w-6 h-6" />
          <span className="text-md text-white-400 pl-2">Archive All Calls</span>
        </button>
      )}
      {data.map((call) => (
        <div key={call.id} className="flex flex-col rounded-lg bg-[#232531]">
          <div className="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
            <div className="flex gap-2">
              {call.direction === "inbound" ? (
                <div className="text-[#2b9875] backdrop-blur-xl p-1 rounded-lg">
                  <SlCallIn className="w-6 h-6" />
                </div>
              ) : (
                <div className="text-blue-500 backdrop-blur-xl p-1 rounded-lg">
                  <SlCallOut className="w-6 h-6" />
                </div>
              )}
              <div>
                <p className="text-white text-md">{call.to}</p>
                <p className="text-gray-500 text-md">{call.from}</p>
              </div>
            </div>
            <div onClick={() => handleView(call.id)}>
              <p className="text-white text-md">{getDate(call.created_at)}</p>
            </div>
            <button className="text-white hover:bg-white/5 p-1 rounded-md transition-colors ease-linear">
              {viewMore[call.id] ? (
                <IoIosArrowDropup
                  className="w-6 h-6"
                  onClick={() => handleView(call.id)}
                />
              ) : (
                <IoIosMore
                  className="w-6 h-6"
                  onClick={() => handleView(call.id)}
                />
              )}
            </button>
          </div>
          {viewMore[call.id] && (
            <div
              id={call.id}
              className="flex gap-3 text-white text-md text-center pb-4"
            >
              <p className=" pl-4 text-gray-500">
                {getDate(call.created_at)}.{" "}
                {call.call_type.charAt(0).toUpperCase() +
                  call.call_type.substring(1)}{" "}
                Call
              </p>
              <p className=" pl-4 text-gray-500">
                {secondsToMins(call.duration)}
              </p>
              <p className=" pl-4 text-blue-400">
                {call.is_archived ? (
                  <BiArchiveIn
                    className="w-6 h-6 text-blue-400"
                    onClick={() => {
                      handleArchiveCall(call.id, call.is_archived);
                    }}
                  />
                ) : (
                  <BiArchiveOut
                    className="w-6 h-6 text-blue-400"
                    onClick={() => {
                      handleArchiveCall(call.id, call.is_archived);
                    }}
                  />
                )}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CallCard;
