import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiBell } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <div className="flex flex-row items-center  space-x-80 ">
        <div
          className="flex flex-row h-12  items-center w-[100%] rounded-2xl px-5
          bg-[#3e4a62] relative "
        >
          <input
            placeholder="search for events,patient,etc."
            type="text"
            class="border-none bg-transparent outline-0 w-80 items-center text-white "
          />
          <CiSearch size={25} className="text-[#3d58f1]"/>
        </div>
        <div className="flex items-center space-x-4">
            <div className="rounded-md bg-[#3e4a62] w-10 h-10  ">
            <HiBell size={25} className="w-full h-full px-2 text-[#3d58f1]" />
            </div>
            <div className="rounded-md bg-[#3e4a62] w-10 h-10  ">
            <AiTwotoneSetting size={25} className="w-full h-full px-2 text-[#3d58f1] "/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
