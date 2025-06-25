import {  useState } from "react"
import clockIcon from '../assets/icons/stopwatch-solid.svg'
import textFileIcon from '../assets/icons/file-lines-solid.svg'
import textFileWordIcon from '../assets/icons/file-word-solid.svg'


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
        })
    };

    return (
        <div className="h-full w-[90px] transition-all duration-500 dark:bg-[#1c1c1c] overflow-hidden" style={{ boxShadow : '0.5px 1px 5px gray' }} id="navbar">
            <div className="w-full flex h-[100px] cursor-pointer px-[20px] py-[10px] items-center justify-center">
                <div className="" onClick={navbarSlideOn}>
                    <h1 className="text-[35px] text-[#dda900] not-italic text-shadow-[1px_1px_1px_gray]">匠</h1>
                </div>
            </div>
            <div className="nav " id="nav">  
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    attendanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv" >
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-800 ${
                        attendanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setAttendanceActive( !attendanceActive )
                        }>
                        <img src={clockIcon} alt="" className="w-[20px] h-[20px]"/>
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
                    sDanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-800 ${
                        sDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setSDanceActive( !sDanceActive )
                        }>
                        <img src={textFileIcon} alt="" className="w-[20px] h-[20px]"/>
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
                    tDanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-800  ${
                        tDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setTDanceActive( !tDanceActive )
                        }>
                        <img src={textFileWordIcon} alt="" className="w-[20px] h-[20px]"/>
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
                    fDanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-800  ${
                        fDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setFDanceActive( !fDanceActive )
                        }>
                        <img src={textFileIcon} alt="" className="w-[20px] h-[20px]"/>
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
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans navBtnBoxContent opacity-0 transition-all duration-400 dark:text-[#d8d8d8]">Monthly Overall</h1>
                    </div>
                </div>
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    fiDanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400 dark:hover:bg-gray-800  ${
                        fiDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setFIDanceActive( !fiDanceActive )
                        }>
                        <img src={textFileWordIcon} alt="" className="w-[20px] h-[20px]"/>
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