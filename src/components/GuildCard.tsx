import { ChevronRightIcon } from "@heroicons/react/solid";
import React,{MouseEvent,useState} from "react";
import { ApplicantCard } from "./ApplicantCard";
import { ApplicantListCard } from "./ApplicantListCard";
import { Individual } from "./Individual";
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

export const GuildCard = ({name,guild,scholar,days,expire,applicants,new_applicants,image}: Props) => {
  return (
    <div className="flex-column z-40">
        <div>
            <div id="dropdownRightButton" data-dropdown-toggle="dropdownRight" data-dropdown-placement="right-start"  className="max-w-md rounded-t-xl shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer flex bg-cardBackground mt-5 mx-5 border border-cardBackground hover:border-nameColor">
            <div className="w-2/5 h-2/5">
                {image && <img className="pl-5 py-5" src={image} />}
            </div>

            <div className="px-2 py-4 w-full">
                <div className="font-bold text-xl mb-2 text-nameColor">{name}</div>
                <div className="flex w-5/6 justify-between">
                    <p className=" text-base text-whiteColor">Guild:{guild}</p>
                    <p className=" text-xl text-whiteColor">•</p>
                    <p className=" text-base text-whiteColor">Scholar:{scholar}</p>
                </div>
                <div className="flex flex-1 justify-between basis-1/2">
                    <p className="text-base text-whiteColor">{days} days ago</p>
                    <p className="text-xl text-whiteColor">•</p>
                    <p className="text-base text-whiteColor">Expiring in {expire} days</p>
                </div>

           
            </div>

        </div>

        <div className="max-w-md rounded-b-xl overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer flex bg-lightGrayColor mx-5 flex-1 hover:border-nameColor">
             <div id="dropdownRightButton2" data-dropdown-toggle="dropdownRight2" data-dropdown-placement="right-start" className="px-6 py-4 flex justify-between w-full">
                    <div className="flex justify-between w-2/3">
                        <p className=" text-base text-whiteColor">{applicants} applicants</p>
                     {new_applicants && <p className=" text-xl text-whiteColor">•</p>}
                        {new_applicants && <p className=" text-base text-nameColor"> {new_applicants} new applicants</p>}
                    </div>
                     
                     <div className="flex justify-end">
                        <ChevronRightIcon className="w-5 h-5 text-nameColor "/>

                     </div>

            
            </div>


        </div>
        </div>

        <div id="dropdownRight" className="hidden z-10">
            <ul aria-labelledby="dropdownRightButton" className="pt-1/2">
                <li>{<ApplicantCard image={image} name="AAP MAX SPEED" scholar="50%" applicants={232} guild="50%" days={2} expire={9} new_applicants={16}/>}</li>
            </ul>
        </div>

        <div id="dropdownRight2" className="flex-column hidden z-10">
            <ul aria-labelledby="dropdownRightButton2" className="pt-1/2 bg-backgroundColor">
                <li id="dropdownRightButton3" data-dropdown-toggle="dropdownRight3" aria-expanded="true" aria-haspopup="true">{<ApplicantListCard image={image} name="JOSHUA DELA CRUZ" new_applicant={true} location="Phillipines" discord="Roshanjil#1947" tweeter="@leokras" guild="Yield Guild Name" top_game="Axie Infinity"/>}</li>

            </ul>
        </div>

        <div id="dropdownRight3" className="flex-column hidden z-10">
            <ul aria-labelledby="dropdownRightButton3" className="pt-1/2 bg-backgroundColor">
                <li>{<Individual win_rate={48} image={image} mmr={2823} name="JOSHUA DELA CRUZ" new_applicant={true} location="Phillipines" discord="Roshanjil#1947" tweeter="@leokras" guild="Yield Guild Name" top_game="Axie Infinity"/>}</li>
            </ul>
        </div>   
      </div>

      
    
  );
};
