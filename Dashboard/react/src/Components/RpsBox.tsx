import { MonthSelectDropDown } from "./MonthSelectDropDown";
import { RpsAttendanceForm } from "./RpsAttendanceForm";


export function RpsBox() {
    return (
        <div className="w-full h-auto xl:hidden relative">
            <div className="flex items-center w-full h-[60px] bg-[#ececec94]">
                <h1 className="pl-[30px] text-black text-[20px]">| Attendance Form</h1>
            </div>
            <div className="w-full h-auto bg-white ">
                <div className="w-full h-[60px] flex items-center pl-[25px]">
                    <h1 className="text-[23px] font-medium">ナルト</h1>
                </div>
                <div className="w-full h-auto pl-[25px]">
                    <div className="flex space-x-[20px]">
                        <div className="w-full h-[60px]">
                            <MonthSelectDropDown />
                        </div>
                    </div>
                </div>
                <div className="w-ful h-auto mt-[10px] pl-[10px]">
                    <div className="w-full h-full sm:h-[60px] bg-[#ffe86677] p-[10px_20px] flex flex-col sm:flex-row space-y-[10px] sm:space-y-[0px] sm:justify-around sm:items-center">
                        <div className="flex items-center">
                            <h1 className="text-[16px] text-[#4d4d4ddd] font-medium">Working Hour : <span>00:00</span></h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-[16px] text-[#4d4d4ddd] font-medium">O.T : <span>00:00</span></h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-[16px] text-[#4d4d4ddd] font-medium">36 O.T : <span>00:00</span></h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-[16px] text-[#4d4d4ddd] font-medium">Remaining Paid Leave : <span>00:00</span></h1>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto mt-[20px] px-[10px] py-[10px] flex sm:justify-center">
                    <div className="flex w-full space-x-[10px] space-y-[10px] flex-wrap sm:justify-around">
                        <button className="w-[100px] sm:w-[120px] sm:text-[13px] bg-black text-white text-[10px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            SetClockTime
                        </button>
                        <button className="w-[100px] sm:w-[120px] sm:text-[13px] bg-black text-white text-[10px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            Temporary
                        </button>
                        <button className="w-[100px] sm:w-[120px] sm:text-[13px] bg-black text-white text-[10px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            Submit All
                        </button>
                        <button className="w-[100px] sm:w-[120px] sm:text-[13px] bg-black text-white text-[10px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            PDF
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <RpsAttendanceForm/>
            </div>
        </div>
    )
}