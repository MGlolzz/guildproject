import { ChevronDownIcon } from "@heroicons/react/solid";
import React,{MouseEvent,useState} from "react";
import { Footer } from "./components/Footer";
import { GradientText } from "./components/GradientText";
import { GuildCard } from "./components/GuildCard";
import { Header } from "./components/Header";
import image from "./components/Screenshot 2022-05-29 103524.png";


function App() {


  return (
    <div className="App">


      <div className="px-2 py-10 w-full flex justify-between mx-5">
        <h1 className="font-bold text-4xl mb-2 text-nameColor text-opacity-20">SCHOLARSHIP LISTING</h1>
         <div className="flex items-center mx-7 xl:min-w-[300px] space-x-5 px-5">
                <button className="text-2xl bg-gradient-to-r btn btn-primary text-whiteColor border-2 border-nameColor rounded-lg w-60 h-10 from-nameColor to-cardBackground hover:text-nameColor">Create new listing</button>
            </div>
      </div>
      <div className="flex-column">
          <div className="max-w-md rounded-xl overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer flex bg-cardBackground mt-5 mx-5">

        <div className="px-2 py-4 w-full flex">

                <button id="dropdownDefault" data-dropdown-toggle="dropdown" type="button" className="flex-1 text-left cursor-pointer py-2.5 px-5 mr-2  text-sm font-medium text-whiteColor focus:outline-none rounded-lg focus:z-10 focus:ring-4 dark:focus:ring-gray-700 dark:bg-gray-800 ml-2">Axie Infinity</button>
                <div className="flex justify-end mt-2">
                        <ChevronDownIcon className="w-5 h-5 text-nameColor "/>
                        </div>
        </div>
      </div>
      </div>

      <div id="dropdown">
        <ul aria-labelledby="dropdownDefault">
          <li>{
            <GuildCard image={image} name="AAP MAX SPEED" scholar="50%" applicants={232} guild="50%" days={2} expire={9} new_applicants={16}/>
            }</li>
          
        </ul>

      </div>





      
      
    </div>
  );
}

export default App;
