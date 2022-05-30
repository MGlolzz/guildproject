import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";
import { GradientText } from "./components/GradientText";
import { GuildCard } from "./components/GuildCard";
import { Header } from "./components/Header";
import image from "./components/Screenshot 2022-05-29 103524.png";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="px-2 py-4 w-full flex justify-between mx-5">
        <h1 className="font-bold text-4xl mb-2 text-nameColor text-opacity-20">SCHOLARSHIP LISTING</h1>
         <div className="flex items-center mx-7 xl:min-w-[300px] space-x-5 px-5">
                <button className="text-2xl bg-gradient-to-r btn btn-primary text-whiteColor border-2 border-nameColor rounded-lg w-60 h-10 from-nameColor to-cardBackground">Create new listing</button>
            </div>
      </div>
      <div className="flex-column">
          <div className="max-w-md rounded-xl overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:scale-105 cursor-pointer flex bg-cardBackground mt-5 mx-5">

        <div className="px-2 py-4 w-full flex">
                <div className="flex-1 lg:inline ml-2 hidden text-whiteColor cursor-pointer hover:text-clickedColor">Axie Infinity</div>
                <div className="flex justify-end">
                        <ChevronDownIcon className="w-5 h-5 text-nameColor "/>

                     </div>
        </div>
      </div>
      </div>
      <GuildCard image={image} name="AAP MAX SPEED" scholar="50%" applicants={232} guild="50%" days={2} expire={9} new_applicants={16}/>
      <GuildCard image={image} name="AAP MAX SPEED" scholar="50%" applicants={232} guild="50%" days={2} expire={9} />
      <GuildCard image={image} name="AAP MAX SPEED" scholar="50%" applicants={232} guild="50%" days={2} expire={9} />
    </div>
  );
}

export default App;
