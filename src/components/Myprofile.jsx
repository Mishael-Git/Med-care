import React from 'react'
import { doctors } from "../assets/images/imginfo";
function Myprofile() {
  return (
    <div>
        <div className='space-y-7'>
        <div className="bg-[#3d58f1] px-5 py-2 rounded-lg h-12">
          <h1 class="text-white text-xl">MY PROFILE</h1>
          </div>
          <div className="w-20 h-20">
          <img src={doctors} alt="" className="w-full h-full object-contain object-cover rounded-full" />
          </div>
        </div>
    </div>
  )
}

export default Myprofile