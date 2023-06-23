import React from "react";
import RootLayout from "./layout";
import { FaFacebookSquare,FaLine,FaTiktok,FaPhone} from "react-icons/fa";
import IconName from 'react-icons/fa';



export default function Contact(){
    return(
        
<RootLayout>
        <div>

<div className="text-center">
<h1 className=" text-center">My Contact</h1></div>


<img src="" alt="" />
<div className="text-center">
<img src="http://localhost:3000/img/facebook.png" className="w-[100px] text-center mt-5" alt="" />Facebook : ปอนด์
<p className=""><img src="http://localhost:3000/img/Line.png" className="w-[100px] mt-5" alt="" /></p>Line id : P_0610614931
<img src="http://localhost:3000/img/instagram.png" className="w-[100px]" alt="" />

 </div>

<div className="text-center">
<h2 className="">งานอดิเรก</h2>
<p className="">รับงานซ่อม ขาย คอมพิวเตอร์ - โน๊ตบุ๊ค และ อุปกรณ์ไอที</p>
<p className=""></p>
</div>
</div>
</RootLayout>
    )
}