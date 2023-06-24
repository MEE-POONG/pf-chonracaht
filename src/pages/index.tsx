import React from "react"; 
import RootLayout from "./layout";
import { Container } from 'react-bootstrap';

export default function Index() {
 return(
    <RootLayout>


  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
    

  <h1 className="text-center mb-4"><span></span><span>MyProfile & Status</span></h1>
  <h1 className="text-center"><span>I&apos;m</span><span><a href="info" className="font-medium"> Mr.chonracaht Intarasut 
  </a></span></h1>

  <a href="info" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-7">ดูข้อมูลเพิ่มเติม</a>
   </div>


   </RootLayout>
 )
}