import React from 'react'
import { StarIcon, BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'
import { BeakerIcon, ChevronDownIcon, GlobeAltIcon, HomeIcon, SearchIcon } from '@heroicons/react/solid'
import fb from "./Icon.png";
import ig from "./Icon2.png";
import tt from "./Icon3.png";
import github from "./Icon4.png";
import ball from "./Icon5.png";
export const Footer =()=> {
  return (
      <div className="max-h-screen inset-x-0 bottom-0 grid place-content-center">

      
      <div className="flex-1 flex bg-gray-800 w-full py-5">


            <div className="flex w-full items-center  xl:min-w-[300px] space-x-10 justify-around">
                <p className="flex-1 lg:inline  hidden text-nameColor cursor-pointer hover:text-clickedColor">Discover Guilds</p>
                <p className="flex-1 lg:inline  hidden text-nameColor cursor-pointer hover:text-clickedColor">Compare</p>
                <p className="flex-1 lg:inline  hidden text-nameColor cursor-pointer hover:text-clickedColor">Team</p>
                <p className="flex-1 lg:inline  hidden text-nameColor cursor-pointer hover:text-clickedColor">Press</p>
                <p className="flex-1 lg:inline  hidden text-nameColor cursor-pointer hover:text-clickedColor">WhitePaper</p>
                <p className="flex-1 lg:inline  hidden text-nameColor cursor-pointer hover:text-clickedColor">Partners</p>
            </div>
            


      </div>
      <div className="flex-1 flex bg-gray-800 w-full py-5 ">


            <div className="flex flex-1 items-center xl:min-w-[300px] space-x-10 place-content-center">
                <div className=" h-5 w-10 cursor-pointer">
                    <img src={fb}/>
                </div>
                 <div className=" h-5 w-10 cursor-pointer">
                    <img src={ig}/>
                </div>
                <div className=" h-5 w-10 cursor-pointer">
                    <img src={tt}/>
                </div>
                <div className=" h-5 w-10 cursor-pointer">
                    <img src={github}/>
                </div>
                <div className=" h-5 w-10 cursor-pointer">
                    <img src={ball}/>
                </div>           
            </div>
            


      </div>
      <div className="flex-1 flex bg-gray-800 w-full py-5 place-content-center">
          <div className=" items-center xl:min-w-[300px] space-x-10 ">
                <p className="flex-1 lg:inline hidden text-nameColor cursor-pointer hover:text-clickedColor">© 2020 Workflow, Inc. All rights reserved.</p>
          </div>
            
            


      </div>
    </div>
  );
};

