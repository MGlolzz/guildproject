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
      <div className="max-w-full w-max h-1/2 overflow-visible">
          <div className=" rounded-xl shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer bg-cardBackground mt-5 mx-5 border border-nameColor h-full ">
            <div className="flex">
                <div className="w-40 h-40">
                    {image && <img className="pl-5 py-5" src={image} />}
                </div>
                <div className="px-2 py-4 w-full justify-between">
                <div className="flex">
                    <div className="font-bold text-2xl mb-2 text-nameColor flex flex-1">{name}</div>
                    <div>
                        <button className="text-2xl bg-gradient-to-r btn btn-primary text-whiteColor border-2 border-nameColor rounded-lg w-60 h-10 from-nameColor to-cardBackground hover:text-nameColor mx-3">Edit listing</button>   

                    </div>
                </div>
                <div className="px-2 py-4 w-4/5">
                    <div className="flex-1 flex justify-between basis-1/2">
                        <p className=" text-base text-whiteColor">{days} days ago</p>
                        <p className=" text-xl text-whiteColor">•</p>
                        <p className=" text-base text-whiteColor">Expiring in {expire} days</p>
                        <p className=" text-xl text-whiteColor">•</p>
                        <p className=" text-base text-blue-500">{applicants} applicants</p>
                    </div>
                    <div className="flex w-1/2 justify-between">
                        <p className=" text-base text-whiteColor">Guild:{guild}</p>
                        <p className=" text-xl text-whiteColor">•</p>
                        <p className=" text-base text-whiteColor">Scholar:{scholar}</p>
                    </div>
                    
                </div>


                
                

           
                </div>
            </div>
            
            <div className="h-full w-full  cursor-pointer">
                <img src={img}/>
                <div className="px-10 font-bold text-sm  text-nameColor">ADDITIONAL INFO</div>

            </div>
            <div className="px-10 py-2 w-4/5">
                    
                <p className=" text-base text-whiteColor">• Due to a flood of applications, they decided to take on applicants through referral from the current scholars.</p>
                <p className=" text-base text-whiteColor">• Can message them on Facebook to leave your basic info for future reference.</p>

            </div>
            <div className="h-full w-full  cursor-pointer">
                
                <div className="px-10 font-bold text-sm  text-nameColor">APPLICATION REQUIREMENTS</div>
                
            </div>
            <div className="px-10 py-2 w-4/5">
                    
                <p className=" text-base text-whiteColor">• Join daily events and earn boxy coins every 9:30PM GMT+8 on discord then redeem a Pegaxy Scholarship</p>
                <p className=" text-base text-whiteColor">• If already an Axie scholar for BOXY, the one with highest MMR during the competitions will get a Pegaxy scholarship</p>
                <p className=" text-base text-whiteColor">• Be updated on their social media or here in our Discord server for main events that gives instant scholarship</p>

            </div>

        
            

        </div>

        
        
      </div>
    
  );
};
