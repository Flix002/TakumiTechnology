import {  useState } from "react"
import { RiTimerFill } from "react-icons/ri";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { MdCardTravel } from "react-icons/md";
import { FaFileCircleCheck } from "react-icons/fa6";
import { AiFillCarryOut } from "react-icons/ai";

export function Navbar() {
    const [ attendanceActive, setAttendanceActive ] = useState(false);
    const [ sDanceActive, setSDanceActive ] = useState(false);
    const [ tDanceActive, setTDanceActive ] = useState(false);
    const [ fDanceActive, setFDanceActive ] = useState(false);
    const [ fiDanceActive, setFIDanceActive ] = useState(false);

    function navbarSlideOn() : void {
        const navbar = document.getElementById('navbar') as HTMLElement;
        navbar.classList.toggle('w-[400px]');
        navbar.classList.toggle('w-[90px]');

        let navbtnBoxContent = document.querySelectorAll('.navBtnBoxContent');
        navbtnBoxContent.forEach((el) => {
            ( el as Element ).classList.toggle('delay-[0.5s]');
            ( el as Element ).classList.toggle('opacity-100');
            ( el as Element ).classList.toggle('opacity-0');
        });

        const takumi = document.getElementById('takumi') as HTMLElement;

        takumi.classList.toggle('delay-[0.5s]');
        takumi.classList.toggle('opacity-100');
        takumi.classList.toggle('opacity-0');
    };

    return (
        <div className="h-full w-[90px] transition-all duration-500 dark:bg-[#1f2b38] overflow-hidden shadow-[0.5px_1px_5px_gray] dark:shadow-[0.5px_1px_30px_black]" id="navbar">
            <div className="w-full flex h-[100px] cursor-pointer px-[20px] py-[10px] items-center justify-center">
                <div className="flex w-full pl-[5px] h-full items-center space-x-[10px]" onClick={navbarSlideOn}>
                    <h1 className="text-[35px] text-[#dda900] inline not-italic text-shadow-[1px_1px_1px_gray]">匠 </h1>
                    <h1 className="text-[23px] inline text-[#dda900] text-shadow-[1px_1px_1px_gray] italic font-sans opacity-0 transition-all duration-400" id="takumi">Takumi Technology</h1> 
                </div>
            </div>
            <div className="nav " id="nav">  
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    attendanceActive ? 'bg-gray-400 dark:bg-gray-900' : 'bg-none'
                }`} id="attendanceDiv" >
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-900 ${
                        attendanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setAttendanceActive( !attendanceActive )
                        }>
                        <div className="">
                            <RiTimerFill className="text-black inline text-[25px] dark:text-[#dcdcdc] transition-all duraction-500" onClick={navbarSlideOn}/>
                        </div>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]" >Attendance, Travel Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        attendanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        attendanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        attendanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Monthly Overall</h1>
                    </div>
                </div>
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    sDanceActive ? 'bg-gray-400 dark:bg-gray-900' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-900 ${
                        sDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setSDanceActive( !sDanceActive )
                        }>
                        <div>
                            <BsFileEarmarkTextFill className="text-black inline text-[25px] transition-all duraction-500 dark:text-[#dcdcdc]"  onClick={navbarSlideOn}/>
                        </div>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        sDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        sDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        sDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Monthly Overall</h1>
                    </div>
                </div>
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    tDanceActive ? 'bg-gray-400 dark:bg-gray-900' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-900  ${
                        tDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setTDanceActive( !tDanceActive )
                        }>
                        <div>
                            <MdCardTravel className="text-black inline text-[25px] transition-all duraction-500 dark:text-[#dcdcdc]" onClick={navbarSlideOn}/>
                        </div>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Travel Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        tDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        tDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        tDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Monthly Overall</h1>
                    </div>
                </div>
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    fDanceActive ? 'bg-gray-400 dark:bg-gray-900' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-900  ${
                        fDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setFDanceActive( !fDanceActive )
                        }>
                        <div>
                            <FaFileCircleCheck className="text-black inline text-[25px] transition-all duraction-500 dark:text-[#dcdcdc]" onClick={navbarSlideOn}/>
                        </div>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Attendance, Travel Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Monthly Overall</h1>
                    </div>
                </div>
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    fiDanceActive ? 'bg-gray-400 dark:bg-gray-900' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-900  ${
                        fiDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setFIDanceActive( !fiDanceActive )
                        }>
                        <div>
                            <AiFillCarryOut className="text-black inline text-[25px] transition-all duraction-500 dark:text-[#dcdcdc]" onClick={navbarSlideOn}/>
                        </div>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Travel Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fiDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fiDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fiDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Monthly Overall</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}