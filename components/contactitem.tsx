import React from 'react';
import { Container } from 'react-bootstrap';
export default function Contactitem(){
    return(
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>

<div className="mt-5 mx-5 flex ">

    <a href="https://www.facebook.com/profile.php?id=100011457973926">
    <button className="group rounded-2xl h-12 w-48 bg-blue-200 font-bold text-lg text-white relative overflow-hidden flex ...">
    <img className="w-[50px] flex" src="/img/facebook.png" alt="" />
        facebook
        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
    </button></a>
    <a href="https://line.me/ti/p/rP80-qCwb8?fbclid=IwAR0zcXFPGCFX_QFTQtAUIf5EZVQedTHoS_7FnTjDWvbf3uKgPPzvvVYBPzo">
    <button className="group rounded-2xl h-12 w-48 bg-green-300 font-bold text-lg text-white relative overflow-hidden flex ...">
    <img className="w-[50px] flex" src="/img/Line.png" alt="" />
        Line
        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
    </button></a>

    <a href="https://www.instagram.com/pond_22.op/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&fbclid=IwAR1e8-f3R7UUiQSolhsEc7r3uGO9TkgJEjiImVPlJEsue3zqGHIs1od7IRg">
    <button className="group rounded-2xl h-12 w-48 bg-purple-300 font-bold text-lg text-white relative overflow-hidden flex ...">
    <img className="w-[50px] flex" src="/img/instagram.png" alt="" />
        Instagram
        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
    </button></a>
    </div>

        
        </div>

    )

}