import React from 'react'
import { StarIcon, BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'
import { BeakerIcon, ChevronDownIcon, GlobeAltIcon, HomeIcon, SearchIcon } from '@heroicons/react/solid'
import image from "./Screenshot 2022-05-29 103525.png";
export const Header =()=> {
  return (
      <div className="content-center pl-60 pt-10 relative">

      
      <div className=" top-5 z-10 flex bg-gray-800 px-5 py-5 shadow-sm pb-7 border-4 border-nameColor rounded-lg w-4/5">

          
            <div className="relative h-5 w-10 flex-shrink-0 cursor-pointer">
                <img src={image}/>
            </div>
            <div className="justify-between flex w-full">
            <div className="flex items-center mx-7 xl:min-w-[300px] space-x-5">
                <p className="flex-1 lg:inline ml-2 hidden text-whiteColor cursor-pointer hover:text-clickedColor">Home</p>
                <p className="flex-1 lg:inline ml-2 hidden text-whiteColor cursor-pointer hover:text-clickedColor">Scholarships</p>
                <p className="flex-1 lg:inline ml-2 hidden text-whiteColor cursor-pointer hover:text-clickedColor">Guilds</p>
                <p className="flex-1 lg:inline ml-2 hidden text-whiteColor cursor-pointer hover:text-clickedColor">Games</p>
            </div>
            <div className="flex items-center mx-7 xl:min-w-[300px] space-x-5">
                <p className="flex-1 lg:inline ml-2 hidden text-whiteColor cursor-pointer hover:text-clickedColor">Team</p>
                <p className="flex-1 lg:inline ml-2 hidden text-whiteColor cursor-pointer hover:text-clickedColor">Whitepaper</p>
                <button className="btn btn-primary text-whiteColor border-2 border-nameColor rounded-lg w-20 h-8 bg-nameColor bg-opacity-20 hover:bg-clickedColor">Sign up</button>
                <button className="btn btn-primary text-whiteColor border-2 border-nameColor rounded-lg w-20 h-8 bg-nameColor bg-opacity-20 hover:bg-clickedColor">Connect</button>
            </div>

            </div>
      </div>
    </div>
  );
};

