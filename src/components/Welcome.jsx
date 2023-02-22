import React from "react";
import { TbCalendar } from "react-icons/tb";

function Welcome() {
  return (
    <div className="py-5 bg-[url('./public/Doc.jpg')]  w-full h-[200px] rounded-md  object-cover object-contain">
      <div className="">
        <div className="flex items-center space-x-96">
          <div className="flex flex-col items-start space-y-24 px-5">
            <div className="flex items-center justify-center rounded-lg bg-slate-400 px-3 space-x-3 ">
              <TbCalendar size={20} className="text-white" />
              <p class="text-white ">Apr 13,2021 2:12 pm</p>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <h1 class="text-white font-semibold text-2xl">
                  Good Day, Dr. Nichools!
                </h1>
              </div>
              <div className="flex items-start">
                <p class=" text-white ">Have a Nice Monday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
