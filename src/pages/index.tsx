import React from "react"; 
import RootLayout from "./layout";
import { Container } from 'react-bootstrap';
import Contactitem from "../../components/contactitem";

export default function Index () {
 return(
    <RootLayout>


  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-10xl mt-10 ">
    

  <h1 className="text-center mb-4 text-2xl md:text-4xl"><span></span><span>MyProfile & Status</span></h1>
  <h1 className="text-center text-2xl md:text-4xl"><span>I&apos;m</span><span><a href="info" className="font-medium text-2xl md:text-4xl"> Mr.chonracaht Intarasut 
  </a></span></h1>
  <center><img className="mt-10" src="/img/user1.png" alt="" />
  <a href="info" className="font-medium text-blue-600 dark:text-blue-500 hover:underline  mt-4 text-m md:text-m">ดูข้อมูลเพิ่มเติม</a></center>




   </div>


   </RootLayout>
 )
}