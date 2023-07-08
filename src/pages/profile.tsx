import React from "react";
import RootLayout from "./layout";
import Status from "../../components/status";
import Map from "../../components/googlemap";
export default function Profile() {

    return (
        <RootLayout>
            <div className="relative">
                <img
                    src="/img/Beautiful Sunset Wallpaper ·①  WallpaperTag.jpg"
                    className="w-full h-[400px]"
                    alt=""
                />
                <h1 className="text-4xl font-medium leading-tight absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Profile & About
                    <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                        New
                    </span>

                </h1>
            </div>


            <div className="flex items-center">
                <img
                    src="/img/pond.jpg"
                    className="w-[250px] rounded-full ml-[10%] mb-10 mt-10"
                    alt="Avatar"
                />
                <span className="ml-[10%]">
                    <p className="text-4xl mb-10">Profile</p>
                    <p className="text-2xl">ชื่อ-นามสกุล: ชลชาติ อินทรสูตร</p>
                    <p className="text-2xl">ชื่อเล่น : ปอนด์</p>
                    <p className="text-2xl">อายุ : 23 ปี</p>
                    <p className="text-2xl">เพศ : ชาย</p>
                    <p className="text-2xl">นิสัย : ขี้เล่น คุยสนุกเวลาเมา</p>
                </span>
                <span className="ml-[5%]">
                    <p className="text-4xl mb-10">About</p>
                    <p className="text-2xl">ประวัติการศึกษา </p>
                    <p className="text-2xl"> อนุบาล-ประถม : โรงเรียน ท.1</p>
                    <p className="text-2xl"> มัธยมต้น : โรงเรียน รวมมิตรวิทยา</p>
                    <p className="text-2xl"> มัธยมปลาย : โรงเรียน บุญเหลือวิทยานุสรณ์</p>
                    <p className="text-2xl"> มหาลัยปริญญาตรี : ศึกษาที่ ราชมงคลอีสาน</p>

                </span>
            </div>




            <div>
                <p className="text-5xl text-center mt-[10%] mb-10">My Picture</p>

                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/img/imgProfile/img1.jpg"
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/img/imgProfile/img2.jpg"
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/img/imgProfile/img3.jpg"
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/img/imgProfile/img4.jpg"
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/img/imgProfile/img5.jpg"
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="/img/imgProfile/img6.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <p className="text-5xl text-center mt-[10%] ">Google Map</p>
            <div className=" mt-10 w-[70%] h-[100px] ml-10 mb-[50%] "> 
            
                <Map apiKey={"AIzaSyC_TTKNVl9u2U2LXhKC5QyUrxUg4TsWzvA&callback"} center={{
                    lat: 14.982215,
                    lng: 102.108204
                }} zoom={10}/>

            </div>



        </RootLayout>
    )

}