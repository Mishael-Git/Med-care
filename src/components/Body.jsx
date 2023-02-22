import React from "react";
import { Nav, Profile, Side } from "./info";
import Welcome from "./Welcome";
function Body() {
  return (
    <div className="px-[1%] space-x-[6%] space-y-6">
      <div>
        <Side />
      </div>
      {/* Body left */}
      <div className="flex flex-grow h-screen">
        <div className="h-screen flex-grow">
          <div className="space-y-9">
            <div className="px-[2%]">
              <div className="flex flex-row w-full">
                <Nav />
              </div>
            </div>

            <div className="px-[2%] ">
              <div className="flex flex-row w-full">
                <Welcome />
              </div>
            </div>
          </div>
        </div>

        {/* Body right */}
        <div className="w-[30%] h-screen  px-10 space-y-6 ">
             <Profile/>
        </div>
      </div>
    </div>
  );
}

export default Body;
