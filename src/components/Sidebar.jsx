import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { TbBrandTelegram, TbCalendar, TbApps } from "react-icons/tb";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
function Sidebar() {
  return (
    <div className="pt-[1%] ">
      <div className="flex flex-col  bg-[#3d58f1] p-2 mt-0 fixed justify-between z-10 w-20 items-center h-full rounded-lg py-5">
        <div className="">
          <h1 class="text-2xl font-semibold text-white ">Med</h1>
          <h1 class="text-2xl font-semibold text-white ">care</h1>
        </div>
        <div className="space-y-6">
          <div className="rounded-md bg-slate-400 w-10 h-10">
            <MdHomeFilled size={30} className="text-white w-full h-full px-2" />
          </div>
          <div className="rounded-md  w-10 h-10">
            <FcStatistics size={30} className="text-white w-full h-full px-2" />
          </div>
          <div className="rounded-md  w-10 h-10">
            <TbBrandTelegram
              size={30}
              className="text-white w-full h-full px-2"
            />
          </div>
          <div className="rounded-md  w-10 h-10">
            <TbCalendar size={30} className="text-white w-full h-full px-2" />
          </div>
          <div className="rounded-md  w-10 h-10">
            <TbApps size={30} className="text-white w-full h-full px-2" />
          </div>
          <div className="rounded-md  w-10 h-10">
            <BsFillInfoSquareFill
              size={30}
              className="text-white w-full h-full px-2"
            />
          </div>
        </div>
        <div>
          <HiOutlineLogout
            size={30}
            className="text-white "
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
