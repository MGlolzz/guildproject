import { ChevronDownIcon, HeartIcon } from "@heroicons/react/outline";
import React,{MouseEvent,useState} from "react";
import img from "./Screenshot 2022-05-31 204207.png";
import discordImg from "./image 223.png";
import tweeterImg from "./image 222.png";
import guildImg from "./image 224.png";
import topGameImg from "./image 128.png";
import avatarImg from "./image 328.png";
import exp1Img from "./image 217.png";
import exp2Img from "./image 268.png";
import tourImg from "./image 217 (2).png";
import { ChevronLeftIcon, PencilIcon } from "@heroicons/react/solid";
type Props = {
  name: string;
  new_applicant:boolean;
  location:string;
  discord:string;
  tweeter:string;
  guild:string;
  top_game:string;
  image:string;
  mmr:number;
  win_rate:number;
};

export const Individual = ({name,new_applicant,location,discord,tweeter,image,guild,top_game, mmr, win_rate}: Props) => {
  return (
      <div className=" max-w-full">
          <div className=" rounded-xl shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer bg-lightGrayColor mt-1 mx-5 border border-nameColor h-full  place-items-center">
            <div className="flex items-center flex-1 ">
                <div className="flex flex-1 items-center mx-5 mt-5 ">
                    <ChevronLeftIcon className="w-5 h-5 mx-3 text-white"/>
                </div>
                <div className="flex justify-end items-center mx-5 mt-5 ">

                    <div className="flex px-5">
                        <HeartIcon className="w-5 h-5  text-white place-items-end"/>
                    </div>

                    <div className="border border-nameColor rounded-xl flex bg-gradient-to-r from-nameColor to-cardBackground ">
                        <button className="flex-1 text-left cursor-pointer py-2.5 px-5 mr-2  text-lg font-medium text-whiteColor focus:outline-none rounded-sm ">Action</button>
                        <div className="flex justify-end items-center">
                                <ChevronDownIcon className="w-5 h-5 mx-3 text-white"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex bg-backgroundColor mx-20 my-5 rounded-xl">
                <div className="w-40 h-40 rounded-2xl">
                    {image && <img className="pl-5 py-5 " src={avatarImg} />}
                </div>
                <div className="px-2 py-4 w-full justify-between">
                    <div className="flex">
                        <div className="font-bold text-xl mb-2 text-nameColor flex flex-1">{name}</div>
                        <div className="border border-nameColor rounded-xl flex bg-gradient-to-r from-lightYellowColor to-cardBackground ">
                            <button className="flex-1 text-left cursor-pointer py-2.5 px-5 mr-2  text-sm  text-whiteColor  rounded-lg ">Show profile</button>
                        </div>
                        <div className="flex items-center px-3">
                            <PencilIcon className="w-5 h-5 text-white"/>
                        </div>


                    </div>

                    <div className="px-2">
                    <p className=" text-sm text-whiteColor ">{location}</p>
                    <div className="w-4/5 pt-2">
                        <p className=" text-sm text-whiteColor">I am cool but not the coolest man you’ve seen before, cool as cool so cool the sun freezes in the midst of my presence cool</p>
                    </div>
                    
                        <div className=" flex justify-even  items-center">
                            <div className="bg-backgroundColor rounded-xl flex items-center px-5 py-2">
                                <img className="pl-1 py-1 mr-1" src={discordImg} />
                                <p className=" text-sm text-whiteColor">{discord}</p>
                            </div>
                            <div className="bg-backgroundColor rounded-xl flex items-center">
                                <img className="pl-1 py-1 mr-1" src={tweeterImg} />
                                <p className=" text-sm text-whiteColor">{tweeter}</p>
                            </div>
                            
                            
                            
                        </div>
                        <div className="flex-1 flex justify-between w-full items-center">
                            <div className="px-2 flex flex-1 items-center border border-nameColor rounded-xl mr-3">
                                
                                <p className="flex-1 text-sm text-whiteColor">Guild: <br />{guild}</p>
                                <img className="pl-1 py-1 mr-1 w-15 h-15" src={guildImg} />
                            </div>
                            <div className="px-2 flex flex-1 items-center border border-nameColor rounded-xl">
                                
                                <p className=" flex-1 text-sm text-whiteColor">Top game: <br /> {top_game}</p>
                                <img className="pl-1 py-1 mr-1 w-10 h-10" src={topGameImg} />
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="font-bold text-2xl mb-2 text-white flex flex-1  mx-20">EXPERIENCE</div>
                <div className="bg-backgroundColor mx-20 my-5 rounded-xl">
                    <div className="flex">
                        <div className="w-40 h-40 rounded-2xl">
                        {image && <img className="pl-5 py-5 " src={image} />}
                        </div>
                        <div className="px-2 py-4 w-full justify-between">
                            <div className="flex">
                                <div className="font-bold text-xl mb-2 text-nameColor flex flex-1">AXIE INFINITY</div>
                                


                            </div>

                            <div className="px-2 w-5/6">
                                <div className="flex justify-between items-center">
                                    <p className=" text-xs text-whiteColor">{guild}</p>
                                    <p className=" text-xl text-whiteColor">•</p>
                                    <p className=" text-xs text-whiteColor">Highest MMR: {mmr}</p>
                                    <p className=" text-xl text-whiteColor">•</p>
                                    <p className=" text-xs text-whiteColor">July 2021 - Sept 2021</p>
                                </div>
                                <div className="flex justify-between pt-5 items-center">
                                    <p className=" text-sm text-whiteColor">Was playing at YGG and then became a trainer due to my good performance</p>
                                    
                                </div>
                                <div className="flex-shrink-0 flex justify-between items-center">
                                    <img className="pl-5 py-5" src={exp1Img} />
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-40 h-40 rounded-2xl ">
                        {image && <img className="pl-5 py-5 w-40 h-40" src={exp2Img} />}
                        </div>
                        <div className="px-2 py-4 w-full justify-between">
                        <div className="flex">
                            <div className="font-bold text-xl mb-2 text-nameColor flex flex-1">ELPIS BATTLE</div>
                            


                        </div>

                        <div className="px-2 w-5/6">
                            <div className="flex justify-between items-center">
                                <p className=" text-xs text-whiteColor">{guild}</p>
                                <p className=" text-xl text-whiteColor">•</p>
                                <p className=" text-xs text-whiteColor">Win Rate: {win_rate}%</p>
                                <p className=" text-xl text-whiteColor">•</p>
                                <p className=" text-xs text-whiteColor">July 2021 - Sept 2021</p>
                            </div>
                            <div className="flex justify-between pt-5 items-center">
                                <p className=" text-sm text-whiteColor">Was playing at YGG and then became a trainer due to my good performance</p>
                                
                            </div>
                            <div className="flex-shrink-0 flex justify-between items-center">
                                <img className="pl-5 py-5" src={exp1Img} />
                                
                            </div>
                        </div>
                    
                    </div>
                    </div>
                    
                </div>
            
        <div className="font-bold text-2xl mb-2 text-white flex mx-20">TOURNAMENT BADGES</div>
         <div className="bg-backgroundColor mx-20 my-5 rounded-xl">
                    <div className="flex">
                        <div className="w-40 h-40 rounded-2xl">
                        {image && <img className="pl-5 py-5 " src={image} />}
                        </div>
                        <div className="px-2 py-4 w-2/3 justify-between">
                            <div className="flex">
                                <div className="font-bold text-xl mb-2 text-nameColor flex flex-1">GALAXY CUP 2021</div>
                            </div>

                            <div className="px-2">
                                <div className="flex justify-between w-full items-center">
                                    <p className=" text-xs text-whiteColor">AXIE INFINITY</p>
                                    <p className=" text-xl text-whiteColor">•</p>
                                    <p className=" text-xs text-whiteColor">{guild}</p>
                                    <p className=" text-xl text-whiteColor">•</p>
                                    <p className=" text-xs text-whiteColor">8th place</p>
                                     <p className=" text-xl text-whiteColor">•</p>
                                    <p className=" text-xs text-whiteColor">21st June 2022</p>
                                </div>
                                <div className="flex justify-between pt-5 items-center">
                                    <p className=" text-sm text-whiteColor">Finished the tournament in 8th place among other SEA players. Tournament badge shown here.</p>
                                    
                                </div>
                               
                            </div>
                            
                        </div>
                        <div className="w-40 h-40 rounded-2xl">
                             <img className="pl-5 py-5" src={tourImg} />
                        </div>
                    </div>

                    
                </div>       

                        

 

        
            

        </div>

        
        
      </div>
    
  );
};
