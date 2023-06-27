import React from "react";
import RootLayout from "./layout";
import Status from "../../components/status";
export default function Profile(){

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


            <center><img
                src="/img/pond.jpg"
                 className="w-[200px] rounded-full mb-10 mt-10"
                    alt="Avatar" />
       
            <p className=" text-2xl font-bold text-primary dark:text-primary-400 mt-2">
            ชื่อ-นามสกุล : นาย ชลชาติ อินทรสูตร 
            </p>
            <p className=" text-2xl font-bold text-primary dark:text-primary-400 mt-2">
            ชื่อเล่น : ปอนด์
            </p>
            <p className=" text-2xl font-bold text-primary dark:text-primary-400 mt-2">
            อายุ : 23 ปี
            </p>
            <p className=" text-2xl font-bold text-primary dark:text-primary-400 mt-2">
            เพศ : ชาย
            </p>
            <p className=" text-2xl font-bold text-primary dark:text-primary-400 mt-2">
            ศาสนา : พุทธ
            </p> 
            <p className=" text-2xl font-bold text-primary dark:text-primary-400 mt-2">
            เชื้อชาติ : ไทย
            </p>
            
                    </center>





            </div>

       </RootLayout>
    )

}