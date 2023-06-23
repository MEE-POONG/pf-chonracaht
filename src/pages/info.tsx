import React from "react";
import Pagesection from "../../components/pagesections";
import { info } from "console";
import Slider from "react-slick";
import RootLayout from "./layout";


export default function Info (){
   


    return (
        <RootLayout> 
        <div>

            <div className="text-center">
            <h1 className=" text-center">My Profile & status</h1></div>
            <center><img className=" w-[350px] mt-4 mb-4" src="/img/pond.jpg" alt=""/>
            
            </center>
            <div className="text-center">
            <h2 className="">ชื่อ : ชลชาติ อินทรสูตร </h2>
            <p className="">ชื่อเล่น : ปอนด์ </p>
             <p className="">อายุ : 23 ปี</p>
            <p className="">เพศ : ชาย</p>
            <p className="">ศาสนา : พุทธ</p>
            <p className="">สัญชาติ : ไทย</p>
            <p className="">ที่อยู่ : บ.229 ถ.สุรนารายณ์ ต.ในเมือง อ.เมือง จ.นครราชาสีมา 30000 </p>

            <a href="profile" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-center">
             <center><img className=" w-[100px] mt-3 " src="/img/profile.png" alt=""/></center>
             <p className="">ข้อมูลเพิ่มเติม</p></a>
             </div>
            
            <div className="text-center mt-4">
            <h2 className="">งานอดิเรก</h2>
            <p className="">รับงานซ่อม ขาย คอมพิวเตอร์ - โน๊ตบุ๊ค และ อุปกรณ์ไอที</p>
            <p className=""></p>
            </div>

            
                <a href="hobby" className="">
                    <center><img className="w-[100px] mt-4" src="/img/hobby.png" alt=""/><p className="">งานอดิเรกเพิ่มเติม</p></center>
                </a>
            
            <div className="text-center first-line: bg-center">
            <h2 className="mt-4 mb-2">Skill</h2>

            <div><span className="">-เขียนโปรแกรม</span> 
            <div className ="flex ...">
               <div className="w-[60%] bg-slate-500  text-center text-stone-100">60 %</div>
                <div className=" w-[40%]  "></div>
            </div></div>

            <div><span className="">-UX/Ui</span> 
            <div className ="flex ...">
            <div className="  w-[70%]  bg-slate-500 text-center text-stone-100">70 %</div>
                <div className=" w-[30%]  "></div>
            </div></div>

            <div><span className="">ออกแบบ</span> 
            <div className ="flex ...">
                <div className="  w-[75%]  bg-slate-500 text-center text-stone-100 ">75 %</div>
                <div className=" w-[25%]  "></div>
            </div></div>
            
            <div><span className="">ความคิดสร้างสรรค์</span> 
            <div className ="flex ...">
                <div className="  w-[65%]  bg-slate-500 text-center text-stone-100">65 %</div>
                <div className=" w-[35%]  "></div>
            </div></div>
            
            <span className="">การฟัง</span> 
            <div className ="flex ...">
            <div className="  w-[85%]  bg-slate-500 text-center text-stone-100">85 %</div>
                <div className=" w-[15%]  "></div>
                



            </div>
            
            <span><a href="hobby" className="">
                    <center><img className="w-[100px] mt-4" src="/img/hobby.png" alt=""/><p className="">สกิลเพิ่มเติม</p></center>
                </a></span>
            </div>
            </div>


            <p className=""></p>

            


            <h2 className="mt-4">สิ่งที่คาดหวังว่าจะได้จากที่ฝึกงาน</h2>

            <p className="">เพิ่ม Skill การทำงานให้มากขึ้นกว่าเดิม</p>
            <p className="">เพิ่ม Skill UX/Ui</p>
            <p className="">เรียนรู้การทำงานและขั้นตอนการทำงาน</p>
            <p className=""></p>
            <a href="hobby" className="">
                    <center><img className="w-[100px] mt-4" src="/img/trade.png" alt=""/><p className="">งานอดิเรกเพิ่มเติม</p></center>
                </a>



           
 </RootLayout>
    )
   
   
}