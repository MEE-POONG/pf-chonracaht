import React from "react";
import RootLayout from "./layout";
import Status from "../../components/status";
import Maps from "../../components/maps";
export default function Info(){

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

            <center><img
                src="/img/pond.jpg"
                 className="w-[200px] rounded-full mb-10"
                    alt="Avatar" />
       
            <p className=" text-2xl font-bold text-primary dark:text-primary-400">
            ชื่อ-นามสกุล : นาย ชลชาติ อินทรสูตร 
            </p>
            <p className=" text-2xl font-bold text-primary dark:text-primary-400">
            ชื่อเล่น : ปอนด์
            </p>
            <p className=" text-2xl font-bold text-primary dark:text-primary-400">
            อายุ : 23 ปี
            </p>
            <p className=" text-2xl font-bold text-primary dark:text-primary-400">
            เพศ : ชาย
            </p>
            <p className=" text-2xl font-bold text-primary dark:text-primary-400">
            ศาสนา : พุทธ
            </p>
            <p className=" text-2xl font-bold text-primary dark:text-primary-400">
            เชื้อชาติ : ไทย
            </p>
            
                    </center>


                    <div className="container my-24 mx-auto md:px-6">
 
  <section className="mb-32 text-center">
    <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
      งานอดิเรก
    </h2>

    <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
      <div className="mb-6 lg:mb-0">
        <div
          className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex">
            <div
              className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp" className="w-full" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-3 text-lg font-bold">ซ่อมคอมพิวเตอร์-โน๊ตบุ๊ค</h5>
            <p className="mb-4 text-neutral-500 dark:text-neutral-300">
              <small>Published <u>13.01.2022</u> by
                <a href="#!">Anna Maria Doe</a></small>
            </p>
            <p className="mb-4 pb-2">
             ซ่อมคอมพิวเตอร์-โน๊ตบุ๊ค ลงโปรแกรม ลงวินโด้ แก้ปัญหาด้านเทคนิค ต่างๆ
            </p>
            <a href="#!" data-te-ripple-init data-te-ripple-color="light"
              className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
              more</a>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div
          className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex">
            <div
              className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp" className="w-full" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-3 text-lg font-bold">ขายคอมพิวเตอร์-โน๊ตบุ๊ค</h5>
            <p className="mb-4 text-neutral-500 dark:text-neutral-300">
              <small>Published <u>12.01.2022</u> by
                <a href="#!">Halley Frank</a></small>
            </p>
            <p className="mb-4 pb-2">
             ขายคอมพิวเตอร์-โน๊ตบุ๊ค รับประกอบคอมพิวเตอร์ตามงบ หรือตามความต้องการของลูกค้า และขายโน๊ตบุ๊ค สเปคทำงาน เล่นเกม ตัดต่อ
            </p>
            <a href="#!" data-te-ripple-init data-te-ripple-color="light"
              className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
              more</a>
          </div>
        </div>
      </div>

      <div className="mb-0">
        <div
          className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex">
            <div
              className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp" className="w-full" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-3 text-lg font-bold">ดูหนัง ฟังเพลง เล่นเกม</h5>
            <p className="mb-4 text-neutral-500 dark:text-neutral-300">
              <small>Published <u>10.01.2022</u> by
                <a href="#!">Joe Svan</a></small>
            </p>
            <p className="mb-4 pb-2">
            ดูหนังฟังเพลง เพื่อเพิ่มความผ่อนคลายในตัว ไม่ให้เกิดความเคลียด 
            </p>
            <a href="#!" data-te-ripple-init data-te-ripple-color="light"
              className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal 
              text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
              dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
              dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Readmore</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<Maps/>



            </div>

       </RootLayout>
    )

}