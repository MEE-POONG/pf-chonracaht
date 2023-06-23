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

<br />
<img src="" alt="" />
<div className="text-center">
<img src="http://localhost:3000/img/facebook.png" className="w-[100px] text-center" alt="" />Facebook : ปอนด์<br />
<p className=""><img src="http://localhost:3000/img/Line.png" className="w-[100px]" alt="" /></p>Line id : P_0610614931<br />
<img src="http://localhost:3000/img/instagram.png" className="w-[100px]" alt="" /><br />





<p className="">ชื่อเล่น : ปอนด์ </p>
 <p className="">อายุ : 23 ปี</p>
<p className="">เพศ : ชาย</p>
<p className="">ศาสนา : พุทธ</p>
<p className="">สัญชาติ : ไทย</p>
<p className="">ที่อยู่ : บ.229 ถ.สุรนารายณ์ ต.ในเมือง อ.เมือง จ.นครราชาสีมา 30000 </p><br />

<a href="profile" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-center">
 <center><img className=" w-[100px]" src="http://localhost:3000/img/profile.png" alt=""/></center>
 <p className="">ข้อมูลเพิ่มเติม</p></a>
 </div>
<br /><br />
<div className="text-center">
<h2 className="">งานอดิเรก</h2>
<p className="">รับงานซ่อม ขาย คอมพิวเตอร์ - โน๊ตบุ๊ค และ อุปกรณ์ไอที</p>
<p className=""></p>
</div>


</div>


        
</RootLayout>
    )
}