import { ChevronRightIcon } from "@heroicons/react/solid";
import React,{MouseEvent,useState} from "react";
import img from "./Screenshot 2022-05-31 181814.png";


type Props = {
  name: string;
  guild:string;
  scholar:string;
  days:number;
  expire:number;
  applicants:number;
  new_applicants?:number;
  image:string;
};

export const ApplicantCard = ({name,guild,scholar,days,expire,applicants,new_applicants,image}: Props) => {
  return (
      <div className="w-screen z-10 inset-x-0">
          <div className="w-1/2 rounded-xl shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer bg-cardBackground mx-5 border border-nameColor fixed">
            <div className="flex">
                <div className="w-40 h-40">
                    {image && <img className="pl-5 py-5" src={image} />}
                </div>
                <div className="px-2 py-4 w-full justify-between">
                <div className="flex">
                    <div className="font-bold text-xl mb-2 text-nameColor flex flex-1">{name}</div>
                    <div>
                        <button className="text-base bg-gradient-to-r btn btn-primary text-whiteColor border-2 border-nameColor rounded-lg w-5/6 h-10 from-nameColor to-cardBackground hover:text-nameColor mx-3">Edit listing</button>   

                    </div>
                </div>
                <div className="px-2 py-4 ">
                    <div className="flex-1 flex justify-between items-center space-x-1">
                        <p className=" text-sm text-whiteColor">{days} days ago</p>
                        <p className=" text-xl text-whiteColor">•</p>
                        <p className=" text-sm text-whiteColor">Expiring in {expire} days</p>
                        <p className=" text-xl text-whiteColor">•</p>
                        <p className=" text-sm text-blue-500">{applicants} applicants</p>
                    </div>
                    <div className="flex items-center space-x-2 ">
                        <p className=" text-sm text-whiteColor">Guild:{guild}</p>
                        <p className=" text-xl text-whiteColor">•</p>
                        <p className=" text-sm text-whiteColor">Scholar:{scholar}</p>
                    </div>
                    
                </div>


                
                

           
                </div>
            </div>
            
            <div className="h-full w-full  cursor-pointer">
                <img src={img}/>
                <div className="px-10 font-bold text-sm  text-nameColor">ADDITIONAL INFO</div>

            </div>
            <div className="px-10 py-2 w-4/5">
                    
                <p className=" text-sm text-whiteColor">• Due to a flood of applications, they decided to take on applicants through referral from the current scholars.</p>
                <p className=" text-sm text-whiteColor">• Can message them on Facebook to leave your basic info for future reference.</p>

            </div>
            <div className="h-full w-full  cursor-pointer">
                
                <div className="px-10 font-bold text-sm  text-nameColor">APPLICATION REQUIREMENTS</div>
                
            </div>
            <div className="px-10 py-2 w-4/5">
                    
                <p className=" text-sm text-whiteColor">• Join daily events and earn boxy coins every 9:30PM GMT+8 on discord then redeem a Pegaxy Scholarship</p>
                <p className=" text-sm text-whiteColor">• If already an Axie scholar for BOXY, the one with highest MMR during the competitions will get a Pegaxy scholarship</p>
                <p className=" text-sm text-whiteColor">• Be updated on their social media or here in our Discord server for main events that gives instant scholarship</p>

            </div>

        
            

        </div>

        
        
      </div>
    
  );
};
