import { Navbar } from "./Navbar"
import userIcon from '../assets/icons/user-solid.svg';
import { Link } from "react-router";
import GradientBtn from "./GradientBtn";
import Gojo from "../assets/nImg/photo_2024-12-09_14-42-12.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import DarkModeSwitch from "./DarkModeSwitch";
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";


export function Page() {
    function userSettingOnOff() : void {
        const userSettingBox = document.getElementById('userSettingBox') as HTMLElement;

        userSettingBox.classList.toggle('translate-x-[1000px]');
    }

    const [isDark, setIsDark] = useState(false);

    useEffect(() =>  {
        const root = document.body;

        if (isDark) {
            root.classList.add('dark');
            console.log('dark Class Add')
        } else {
            root.classList.remove('dark');
            console.log('dark Class Remove');
        }
        // root.classList.toggle('dark');
    }, [isDark]);

    return (
        <div className="w-screen h-[120vh] bg-[#e9e9e9dd] dark:bg-[#1c1c1c] relative flex overflow-hidden">
            <Navbar/>
            <div className="w-full h-full px-[50px]">
                <div className="w-full flex justify-between items-center h-[80px] mb-[20px]">
                    {/* <div className="border-l-[5px] border-l-yellow-300 px-[10px]">
                        <h1 className="font-bold text-[30px] text-gray-500">Heading</h1>
                    </div> */}
                     <div className="logo h-[80px] flex items-center justify-center space-x-[10px]">
                        <Link to='/' className="logo text-[25px] text-[#dda900] text-shadow-black italic" style={{textShadow : "1px 1px 1px gray"}}><span className="text-[35px] text-[#dda900] not-italic">匠</span> Takumi Technology</Link>
                    </div>
                    <div className="flex space-x-[10px] items-center">
                        <div className="font-sans text-[20px]">
                            Zeka002
                        </div>
                        <div className="w-[60px] h-[60px] bg-gray-400 p-[10px] rounded-[50%]" onClick={userSettingOnOff}>
                            <img src={userIcon} alt="" className="w-full h-full"/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] py-[20px] px-[30px]">
                    <div className="mb-[30px]">
                    <h1 className="font-semibold font-sans text-[25px] text-gray-500">Box Heading</h1>
                    </div>
                    <div className="w-full flex justify-between space-x-[20px] shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] h-[60px] items-center rounded-[10px] mb-[30px]"> 
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">Working Hour : 20:05</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">O.T (national Holiday)</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">36.O.T</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">Remaining Paid Leave</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">Leave With Nov 30?</span>
                        </div>
                    </div>
                    <div className="w-full shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] py-[30px]">
                        <div className="w-full flex justify-between px-[30px] py-[30px] h-[60px] items-center">
                            <div>
                                <span className="font-semibold font-sans text-[25px] text-gray-500">Month</span>
                            </div>
                            <div className="flex space-x-[20px]">
                                <div>
                                    <GradientBtn BtnName='SetClockTime'/>
                                </div>
                                <div>
                                    <GradientBtn BtnName='Temporary'/>
                                </div>
                                <div>
                                    <GradientBtn BtnName='Submit All'/>
                                </div>
                                <div>
                                    <GradientBtn BtnName='PDF'/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-auto mt-[30px]">
                            <div className="w-full flex  justify-between px-[20px]">
                                <h1 className="px-[20px] py-[10px] text-center">Date</h1>
                                <h1 className="px-[20px] py-[10px] text-center">Attendance Status</h1>
                                <h1 className="px-[20px] py-[10px] text-center">Clock-In</h1>
                                <h1 className="px-[20px] py-[10px] text-center">Clock-Out</h1>
                                <h1 className="px-[20px] py-[10px] text-center">Break</h1>
                                <h1 className="px-[20px] py-[10px] text-center">Reason for early/late</h1>
                                <h1 className="px-[20px] py-[10px] text-center">Detail</h1>
                                <h1 className="px-[20px] py-[10px] text-center">late enidance</h1>
                                <h1 className="px-[20px] py-[10px] text-center">save</h1>
                                <h1 className="px-[20px] py-[10px] text-center">Status</h1>
                            </div>
                            <div className="w-full flex bg-gray-300 h-auto">
                                <div className="flex justify-center w-[120px] bg-red-300">
                                    06/1
                                </div>
                                <div className="flex justify-center w-[140px] bg-red-300">
                                    inputbox
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[430px] shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] h-full bg-[#9898982c] backdrop-blur-[5px] fixed right-0 top-0 z-40 transform translate-x-[1000px] transition-all duration-600" id="userSettingBox">
               <div className="w-full relative ">
                    <HiMiniXMark className="text-[35px] text-white hover:text-red-600 cursor-pointer absolute right-[25px] top-[15px] z-42 transition-all duration-300 " onClick={userSettingOnOff}/>
                    <div className="w-full h-[200px] relative">
                        <div className="w-full h-[50%] userSettingGradient">
                        </div>
                    <div className="w-[120px] h-[120px] bg-white rounded-[50%] flex justify-center items-center overflow-hidden center">
                        <img src={Gojo} alt="" className="w-full h-full"/>
                    </div>
                    </div>
                    <div className="mb-[30px]">
                        <h1 className="text-black text-center text-[25px] cursor-pointer font-sans font-normal italic">ZEKA002</h1>
                    </div>
                    <div className="w-full h-[80px] flex justify-between items-center px-[30px] hover:text-white transition-all duration-300 group">
                        <div className="flex space-x-[20px] items-center cursor-pointer">
                            <FaUser className="text-[25px] "/>
                            <span className=" font-sans font-semibold text-shadow-[0.4px_0.4px_10px_gray]">Account Details</span>
                        </div>
                        <div>
                            <MdKeyboardArrowRight className="text-[30px] mr-[30px] group-hover:mr-[0px] transition-all duration-300"/>
                        </div>
                    </div>
                    <div className="w-full h-[80px] flex justify-between items-center px-[30px] hover:text-white transition-all duration-300 group">
                        <div className="flex space-x-[20px] items-center cursor-pointer">
                            <MdLock className="text-[25px] "/>
                            <span className=" font-sans font-semibold text-shadow-[0.4px_0.4px_10px_gray]">Change Password</span>
                        </div>
                        <div>
                            <MdKeyboardArrowRight className="text-[30px] mr-[30px] group-hover:mr-[0px] transition-all duration-300"/>
                        </div>
                    </div>
                    <div className="w-full h-[80px] flex justify-between items-center pl-[30px]  transition-all duration-300 pr-[60px] group">
                        <div className="flex space-x-[20px] items-center cursor-pointer">
                            <FaCloud className="text-[25px] "/>
                            <span className=" font-sans font-semibold text-shadow-[0.4px_0.4px_10px_gray]">Theme</span>
                        </div>
                        {/* <div className="" onClick={
                            () => setIsDark (prev => !prev)
                        }>
                            <DarkModeSwitch/>
                        </div> */}
                        <button onClick={() : void => {setIsDark(prev => !prev)}} className="text-black dark:text-white text-[30px] cursor-pointer transition-alll duration-600">{ 
                            isDark ? <MdSunny/> : <FaMoon/>
                        }</button>
                    </div>
                    <div className="w-full h-[80px] flex justify-between items-center pl-[30px]  transition-all duration-300 pr-[60px] group">
                        <div className="flex space-x-[20px] items-center cursor-pointer">
                            <IoIosNotifications className="text-[25px] "/>
                            <span className=" font-sans font-semibold text-shadow-[0.4px_0.4px_10px_gray]">Notifications</span>
                        </div>
                        <div className="">
                            <DarkModeSwitch/>
                        </div>
                    </div>
                    <div className="w-full h-[60px] flex justify-center items-center  font-sans font-semibold ">
                        <button className="bg-gray-500 py-[10px] px-[20px] rounded-[10px] text-white cursor-pointer">Log Out</button>
                    </div>
               </div>
            </div>
        </div>
    )
}