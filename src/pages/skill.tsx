import React from "react";
import RootLayout from "./layout";
import Status from "../../components/status";
export default function Skill(){

    return(
       <RootLayout>
            <div>
                <div className=" relative">
                <img src="/img/panorama.jpg" 
                className="w-full h-[300px]"
                alt=""/>

            <h2 className="text-4xl font-medium leading-tight absolute top-20 left-[30%] " >
            Profile & Status
             <span
            className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                New
                </span>
            </h2>
            </div>

        <Status/>

           
            </div>

       </RootLayout>
    )

}