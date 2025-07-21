import { FaBars } from "react-icons/fa6";
import Gojo from "../assets/nImg/photo_2024-12-09_14-42-12.jpg";
import { RiTimerFill } from "react-icons/ri";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { MdCardTravel } from "react-icons/md";
import { FaFileCircleCheck } from "react-icons/fa6";
import { AiFillCarryOut } from "react-icons/ai";

export function RpsNavbar() {

    function rpsNavBarSlide(): void {
        const rpsNavBar = document.getElementById('rpsNavBarBox') as HTMLElement;
        rpsNavBar.classList.toggle('translate-x-[1000px]');
    }

    function rpsUserDiv() : void {
        const rpsUserBox = document.getElementById('rpsUserBox') as HTMLElement;
        rpsUserBox.classList.toggle('hidden');
        rpsUserBox.classList.toggle('flex');
    }

    function rpsAttendanceDiv(): void {
        const rpsAttendanceBox = document.getElementById('rpsAttendanceBox') as HTMLElement;
        const rpsAttendance = document.getElementById('rpsAttendance') as HTMLElement;
        rpsAttendance.classList.toggle('bg-gray-400');
        rpsAttendance.classList.toggle('bg-gray-300');
        rpsAttendanceBox.classList.toggle('hidden');
    }

    function rpsEspensesDiv(): void {
        const rpsEspensesBox = document.getElementById('rpsEspensesBox') as HTMLElement;
        const rpsEspenses = document.getElementById('rpsEspenses') as HTMLElement;
        rpsEspenses.classList.toggle('bg-gray-400');
        rpsEspenses.classList.toggle('bg-gray-300');
        rpsEspensesBox.classList.toggle('hidden');
    }

    function travelEspensesDiv(): void {
        const rpsTravelEDivBox = document.getElementById('rpsTravelEDivBox') as HTMLElement;
        const rpsTravelEDiv = document.getElementById('rpsTravelEDiv') as HTMLElement;
        rpsTravelEDiv.classList.toggle('bg-gray-400');
        rpsTravelEDiv.classList.toggle('bg-gray-300');
        rpsTravelEDivBox.classList.toggle('hidden');
    }

    function rpsTvelDiv(): void {
        const rpsTvelBox = document.getElementById('rpsTvelBox') as HTMLElement;
        const rpsTvel = document.getElementById('rpsTvel') as HTMLElement;
        rpsTvel.classList.toggle('bg-gray-400');
        rpsTvel.classList.toggle('bg-gray-300');
        rpsTvelBox.classList.toggle('hidden');
    }

    function rpsVpelDiv(): void {
        const rpsVpelBox = document.getElementById('rpsVpelBox') as HTMLElement;
        const rpsVpel = document.getElementById('rpsVpel') as HTMLElement;
        rpsVpel.classList.toggle('bg-gray-400');
        rpsVpel.classList.toggle('bg-gray-300');
        rpsVpelBox.classList.toggle('hidden');
    }

    return (
        <div className="w-full h-[80px] block xl:hidden relative">
            <nav className="w-full h-full flex justify-between items-center pl-[30px] pr-[20px] bg-[#e9e9e9dd]">
                <div className="flex items-center space-x-[10px]">
                    <h1 className="text-[#dda900] text-[30px]">匠</h1>
                    <h1 className="text-[#dda900] text-[25px] text-shadow-[1px_1px_1px_gray] italic">Takumi Technology</h1>
                </div>
                <div onClick={rpsNavBarSlide}>
                    <FaBars className="text-gray-600 active:text-white text-[25px] text-shadow-[1px_1px_20px_black] cursor-pointer transition-all duration-100" />
                </div>
            </nav>
            {/* RpsNavBarSlide */}
            <div className="absolute right-0 top-0 w-[85%] sm:w-[50%] h-[400px] bg-blue-500 transform translate-x-[1000px] transition-all duration-500" id="rpsNavBarBox">
                <div className="flex items-center w-full h-[80px] bg-[#e9e9e9dd] justify-between pl-[15px] pr-[20px]">
                    <div className="flex items-center space-x-[10px] px-[20px] relative" onClick={rpsUserDiv}>
                        <h1 className="text-black text-[22px] cursor-pointer">Zeka002</h1>
                        <div className="w-[45px] h-[45px] rounded-[50%] overflow-hidden cursor-pointer ">
                            <img src={Gojo} className="w-full h-full" /> 
                        </div>
                        <div className="rpsUserBox hidden absolute bg-[#ffffff] transition-all duration-500 px-[10px] py-[10px] left-0 top-[60px] flex-col w-full h-auto" id="rpsUserBox">
                            <div className="w-full h-[40px] flex justify-center items-center cursor-pointer hover:bg-gray-400 transition-all duration-200">
                                <h1 className="font-sans italic font-semibold">UserInfo</h1>
                            </div>
                            <div className="w-full h-[40px] flex justify-center items-center cursor-pointer hover:bg-gray-400 transition-all duration-200">
                                <h1 className="font-sans italic font-semibold">Setting</h1>
                            </div>
                        </div>
                    </div>
                    <FaBars className="text-gray-600 active:text-red-500 text-[25px] text-shadow-[1px_1px_20px_black] cursor-pointer transition-all duration-100" onClick={rpsNavBarSlide} />
                </div>
                <div className=" w-full space-x-[10px] bg-gray-300 px-[30px] cursor-pointer transition-all duration-300" onClick={rpsAttendanceDiv} id="rpsAttendance">
                    <div className="flex items-center h-[65px] space-x-[10px]">
                        <div>
                            <RiTimerFill className="text-[20px]" />
                        </div>
                        <h1 className="text-[13px] text-black font-semibold font-sans transition-all duration-400  dark:text-[#d8d8d8]" >Attendance, Travel Espenses</h1>
                    </div>
                    <div className="hidden transition-all duration-300" id="rpsAttendanceBox">
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                    </div>
                </div>
                <div className=" w-full space-x-[10px] bg-gray-300 px-[30px] cursor-pointer transition-all duration-300" onClick={rpsEspensesDiv} id="rpsEspenses">
                    <div className="flex items-center h-[65px] space-x-[10px]">
                        <div>
                            <BsFileEarmarkTextFill className="text-[20px]" />
                        </div>
                        <h1 className="text-[13px] text-black font-semibold font-sans transition-all duration-400  dark:text-[#d8d8d8]" >Espenses</h1>
                    </div>
                    <div className="hidden transition-all duration-300" id="rpsEspensesBox">
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                    </div>
                </div>
                <div className=" w-full space-x-[10px] bg-gray-300 px-[30px] cursor-pointer transition-all duration-300" onClick={travelEspensesDiv} id="rpsTravelEDiv">
                    <div className="flex items-center h-[65px] space-x-[10px]">
                        <div>
                            <MdCardTravel className="text-[20px]" />
                        </div>
                        <h1 className="text-[13px] text-black font-semibold font-sans transition-all duration-400  dark:text-[#d8d8d8]" >Travel Espenses</h1>
                    </div>
                    <div className="hidden transition-all duration-300" id="rpsTravelEDivBox">
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                    </div>
                </div>
                <div className=" w-full space-x-[10px] bg-gray-300 px-[30px] cursor-pointer transition-all duration-300" onClick={rpsTvelDiv} id="rpsTvel">
                    <div className="flex items-center h-[65px] space-x-[10px]">
                        <div>
                            <FaFileCircleCheck className="text-[20px]" />
                        </div>
                        <h1 className="text-[13px] text-black font-semibold font-sans transition-all duration-400  dark:text-[#d8d8d8]" >Attendance, Travel Espenses</h1>
                    </div>
                    <div className="hidden transition-all duration-300" id="rpsTvelBox">
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                    </div>
                </div>
                <div className=" w-full space-x-[10px] bg-gray-300 px-[30px] cursor-pointer transition-all duration-300" onClick={rpsVpelDiv} id="rpsVpel">
                    <div className="flex items-center h-[65px] space-x-[10px]">
                        <div>
                            <AiFillCarryOut className="text-[20px]" />
                        </div>
                        <h1 className="text-[13px] text-black font-semibold font-sans transition-all duration-400  dark:text-[#d8d8d8]" >Attendance, Travel Espenses</h1>
                    </div>
                    <div className="hidden transition-all duration-300" id="rpsVpelBox">
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                        <div className="pl-[30px] h-[50px]">
                            <h1 className="text-black text-[14px] hover:text-[#f5ecec] dark:text-white transition-all duration-100">Lorem ipsum dolor</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}