import { Navbar } from "./Navbar"
import GradientBtn from "./GradientBtn";
import Gojo from "../assets/nImg/photo_2024-12-09_14-42-12.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TiAdjustContrast } from "react-icons/ti";
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
    }, [isDark]);

    return (
        <div className="w-screen h-[120vh] bg-[#e9e9e9dd] dark:bg-[#121212] relative flex overflow-hidden transition-all duration-500">
            <Navbar/>
            <div className="w-full h-full px-[50px]">
                <div className="w-full flex justify-between items-center h-[80px] mb-[20px]">
                    <div>
                        <h1 className="text-gray-500 text-[30px] font-semibold font font-sans">| Attendance Form</h1>
                    </div>
                    <div className="flex space-x-[10px] items-center">
                        <div className="font-sans text-[20px] dark:text-[#d8d8d8] italic">
                            Zeka002
                        </div>
                        <div className="w-[60px] cursor-pointer h-[60px] bg-gray-400 rounded-[50%] overflow-hidden" onClick={userSettingOnOff}>
                            <img src={Gojo} alt="" className="w-full h-full "/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] dark:shadow-[-0.3px_-0.2px_30px_black] py-[20px] px-[30px]">
                    <div className="mb-[30px]">
                    <h1 className="font-semibold font-sans text-[25px] text-gray-500 dark:text-[#d8d8d8]">Box Heading</h1>
                    </div>
                    <div className="w-full flex justify-between space-x-[20px] shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] dark:shadow-[-0.3px_-0.2px_30px_black] h-[60px] items-center rounded-[10px] mb-[30px]"> 
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_10px_gray]">Working Hour : 20:05</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_10px_gray]">O.T (national Holiday)</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_10px_gray]">36.O.T</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_10px_gray]">Remaining Paid Leave</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_10px_gray]">Leave With Nov 30?</span>
                        </div>
                    </div>
                    <div className="w-full shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] dark:shadow-[-0.3px_-0.2px_30px_black] py-[30px]">
                        <div className="w-full flex justify-between px-[30px] py-[30px] h-[60px] items-center">
                            <div>
                                <span className="font-semibold font-sans text-[25px] text-gray-500 dark:text-[#d8d8d8]">Month</span>
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
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">Date</h1>
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">Attendance Status</h1>
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">Clock-In</h1>
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">Clock-Out</h1>
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">Break</h1>
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">Reason for early/late</h1>
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">Detail</h1>
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">late enidance</h1>
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">save</h1>
                                <h1 className="px-[20px] py-[10px] text-center dark:text-[#d8d8d8]">Status</h1>
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
            <div className="w-[430px] shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] dark:shadow-[-0.3px_-0.2px_30px_black] h-full bg-[#9898982c] dark:bg-[#050505be] backdrop-blur-[10px] dark:backdrop-blur-[5px] fixed right-0 top-0 z-40 transform translate-x-[1000px] transition-all duration-600" id="userSettingBox">
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
                        <h1 className="text-black text-center text-[25px] cursor-pointer font-sans font-normal italic dark:text-[#d8d8d8]">ZEKA002</h1>
                    </div>
                    <div className="w-full h-[80px] flex justify-between items-center px-[30px] hover:text-white transition-all duration-300 group">
                        <div className="flex space-x-[20px] items-center cursor-pointer">
                            <FaUser className="text-[25px] dark:text-[#d8d8d8] "/>
                            <span className=" font-sans font-semibold text-shadow-[0.4px_0.4px_10px_gray] dark:text-[#d8d8d8]">Account Details</span>
                        </div>
                        <div>
                            <MdKeyboardArrowRight className="text-[30px] mr-[30px] group-hover:mr-[0px] transition-all duration-300 dark:text-[#d8d8d8]"/>
                        </div>
                    </div>
                    <div className="w-full h-[80px] flex justify-between items-center px-[30px] hover:text-white transition-all duration-300 group">
                        <div className="flex space-x-[20px] items-center cursor-pointer">
                            <MdLock className="text-[25px] dark:text-[#d8d8d8] "/>
                            <span className=" font-sans font-semibold text-shadow-[0.4px_0.4px_10px_gray] dark:text-[#d8d8d8]">Change Password</span>
                        </div>
                        <div>
                            <MdKeyboardArrowRight className="text-[30px] mr-[30px] group-hover:mr-[0px] transition-all duration-300 dark:text-[#d8d8d8]"/>
                        </div>
                    </div>
                    <div className="w-full h-[80px] flex justify-between items-center pl-[30px]  transition-all duration-300 pr-[60px] group">
                        <div className="flex space-x-[20px] items-center cursor-pointer">
                            <TiAdjustContrast className="text-[25px] dark:text-[#d8d8d8] "/>
                            <span className=" font-sans font-semibold text-shadow-[0.4px_0.4px_10px_gray] dark:text-[#d8d8d8]">Theme</span>
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
                            <IoIosNotifications className="text-[25px] dark:text-[#d8d8d8] "/>
                            <span className=" font-sans font-semibold text-shadow-[0.4px_0.4px_10px_gray] dark:text-[#d8d8d8]">Notifications</span>
                        </div>
                        <div className="">
                            <DarkModeSwitch/>
                        </div>
                    </div>
                    <div className="w-full h-[60px] flex justify-center items-center  font-sans font-semibold ">
                        <button className="bg-black dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-900 transition-all duration-400 py-[10px] px-[20px] rounded-[10px] text-white cursor-pointer">Log Out</button>
                    </div>
               </div>
            </div>
        </div>
    )
}