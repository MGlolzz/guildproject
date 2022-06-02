import { ChevronDownIcon, HeartIcon } from "@heroicons/react/outline";
import React,{MouseEvent,useState} from "react";
import img from "./Screenshot 2022-05-31 204207.png";
import discordImg from "./image 223.png";
import tweeterImg from "./image 222.png";
import guildImg from "./image 224.png";
import topGameImg from "./image 128.png";
import avatarImg from "./image 328.png";
type Props = {
  name: string;
  new_applicant:boolean;
  location:string;
  discord:string;
  tweeter:string;
  guild:string;
  top_game:string;
  image:string;
};

export const ApplicantListCard = ({name,new_applicant,location,discord,tweeter,image,guild,top_game}: Props) => {
  return (
      <div className=" max-w-full z-40">
          <div className=" rounded-xl overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer bg-cardBackground mt-1 mx-5 border border-nameColor h-full ">
            
            <div className="flex">
                <div className="w-20 h-40 rounded-2xl ">
                    {image && <img className="pl-5 py-5 " src={avatarImg} />}
                </div>
                <div className="px-2 py-4 justify-between">
                    <div className="font-bold text-xl mb-2 text-nameColor flex flex-1">{name}</div>
                    <div className="px-2 ">
                    <p className=" text-sm text-whiteColor pb-1 ">{location}</p>
                    <div className="flex-1 flex justify-between  items-center">
                        <div className="bg-backgroundColor rounded-xl px-10 flex items-center my-3">
                            <img className=" py-1 mr-1" src={discordImg} />
                            <p className=" text-base text-whiteColor">{discord}</p>
                        </div>
                        <div className="bg-backgroundColor rounded-xl px-10 flex items-center mx-3">
                            <img className="py-1 mr-1" src={tweeterImg} />
                            <p className=" text-base text-whiteColor">{tweeter}</p>
                        </div>
                        <div className="flex px-3 items-center">
                            <HeartIcon className="w-5 h-5 text-white"/>
                        </div>
                        
                        <div className="border border-nameColor rounded-xl flex bg-gradient-to-r from-nameColor to-cardBackground ">
                            <button className="flex-1 text-left cursor-pointer py-2.5 px-5 mr-2  text-base font-medium text-whiteColor focus:outline-none rounded-lg ">Action</button>
                            <div className="flex justify-end items-center">
                                    <ChevronDownIcon className="w-5 h-5 mx-3 text-white"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-between w-2/3 items-center">
                        <div className="flex items-center">
                            <img className="pl-1 py-1 mr-1" src={guildImg} />
                            <p className=" text-sm text-whiteColor">Guild: {guild}</p>
                        </div>
                        <div className="flex items-center">
                            <img className="pl-1 py-1 mr-1 w-8 h-8" src={topGameImg} />
                            <p className=" sm:text-sm text-whiteColor">Top game: {top_game}</p>
                        </div>
                    </div>    
                    </div>
                </div>
            </div>

            

        
            

        </div>

        
        
      </div>
    
  );
};
