import { ChevronRightIcon } from "@heroicons/react/solid";
import React,{MouseEvent,useState} from "react";
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
      <div className="flex-column">
          <div className="max-w-md rounded-t-xl overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer flex bg-cardBackground mt-5 mx-5">
            <div className="w-2/5 h-2/5">
                {image && <img className="pl-5 py-5" src={image} />}
            </div>

            <div className="px-2 py-4 w-full">
                <div className="font-bold text-2xl mb-2 text-nameColor">{name}</div>
                <div className="flex w-5/6 justify-between">
                    <p className="text-gray-700 text-base text-whiteColor">Guild:{guild}</p>
                    <p className="text-gray-700 text-xl text-whiteColor">•</p>
                    <p className="text-gray-700 text-base text-whiteColor">Scholar:{scholar}</p>
                </div>
                <div className="flex flex-1 justify-between basis-1/2">
                    <p className="text-gray-700 text-base text-whiteColor">{days} days ago</p>
                    <p className="text-gray-700 text-xl text-whiteColor">•</p>
                    <p className="text-gray-700 text-base text-whiteColor">Expiring in {expire} days</p>
                </div>

           
            </div>

        </div>
        
        <div className="max-w-md rounded-b-xl overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer flex bg-lightGrayColor mx-5 flex-1">
             <div className="px-6 py-4 flex justify-between w-full">
                    <div className="flex justify-between w-2/3">
                        <p className="text-gray-700 text-base text-whiteColor">{applicants} applicants</p>
                     {new_applicants && <p className="text-gray-700 text-xl text-whiteColor">•</p>}
                        {new_applicants && <p className="text-gray-700 text-base text-nameColor"> {new_applicants} new applicants</p>}
                    </div>
                     
                     <div className="flex justify-end">
                        <ChevronRightIcon className="w-5 h-5 text-nameColor "/>

                     </div>

            
            </div>


        </div>
      </div>
    
  );
};
