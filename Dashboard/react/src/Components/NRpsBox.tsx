import { DailyForm } from "./DailyForm"
import { MonthSelectDropDown } from "./MonthSelectDropDown"

export function NRpsBox() {
    return (
        <div className="w-full h-full shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] dark:shadow-[-0.3px_-0.2px_30px_black] py-[20px] px-[30px] hidden xl:block">
            <div className="mb-[30px]">
                <h1 className="font-semibold font-sans text-[20px] text-gray-500 dark:text-[#d8d8d8]">Box Heading</h1>
            </div>
            <div className="w-full flex justify-between space-x-[20px] shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] dark:shadow-[-0.3px_-0.2px_30px_black] h-[60px] items-center rounded-[10px] mb-[30px]">
                <div className="w-auto h-auto inline items-center px-[20px]">
                    <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_20px_gray] text-[13px]">Working Hour : 20:05</span>
                </div>
                <div className="w-auto h-auto inline items-center px-[20px]">
                    <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_20px_gray] text-[13px]">O.T (national Holiday)</span>
                </div>
                <div className="w-auto h-auto inline items-center px-[20px]">
                    <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_20px_gray] text-[13px]">36.O.T</span>
                </div>
                <div className="w-auto h-auto inline items-center px-[20px]">
                    <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_20px_gray] text-[13px]">Remaining Paid Leave</span>
                </div>
                <div className="w-auto h-auto inline items-center px-[20px]">
                    <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_20px_gray] text-[13px]">Leave With Nov 30?</span>
                </div>
            </div>
            <div className="w-full shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] dark:shadow-[-0.3px_-0.2px_30px_black] py-[30px]">
                <div className="w-full flex justify-between px-[30px] py-[30px] h-[60px] items-center">
                    <div className="">
                        <MonthSelectDropDown />
                    </div>
                    <div className="flex space-x-[20px]">
                        <button className="w-[120px] bg-black text-white text-[13px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            SetClockTime
                        </button>
                        <button className="w-[120px] bg-black text-white text-[13px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            Temporary
                        </button>
                        <button className="w-[120px] bg-black text-white text-[13px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            Submit All
                        </button>
                        <button className="w-[120px] bg-black text-white text-[13px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            PDF
                        </button>
                    </div>
                </div>
                <div className="w-full h-full mt-[30px]">
                    <div className="w-full h-[60px] flex justify-between space-x-[5px] px-[20px]">
                        <h1 className="w-[100px] py-[10px] text-center bg-gray-300 text-[13px] dark:text-[#d8d8d8] dark:bg-black">Date</h1>
                        <h1 className="px-[20px] w-[130px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">Attendance Status</h1>
                        <h1 className="px-[20px] py-[10px] text-center w-[110px] text-[13px] dark:text-[#d8d8d8]">Clock-In</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] w-[110px] dark:text-[#d8d8d8]">Clock-Out</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] w-[60px] dark:text-[#d8d8d8]">Break</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] w-[130px] dark:text-[#d8d8d8]">Reason for early/late</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] w-[220px] dark:text-[#d8d8d8]">Detail</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] w-[90px] dark:text-[#d8d8d8]">late enidance</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] w-[90px] dark:text-[#d8d8d8]">save</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] w-[120px] dark:text-[#d8d8d8]">Status</h1>
                    </div>
                </div>
                {/* daily form */}
                {/* <div className="w-full h-full">
                    <div className="w-full flex h-[50px] justify-between items-center bg-red-400 px-[20px]">
                        <div className="flex justify-center cursor-pointer items-center w-[100px]  h-full bg-gray-300 text-[14px]">
                            <span>01/01</span>
                        </div>
                        <div className="flex justify-center w-[130px] h-full text-[14px] ">
                            <AttendanceStatusSelect />
                        </div>
                        <div className="flex space-x-[5px]  items-center w-[110px] h-full text-[14px]">
                            <div className="">
                                <HourSelectDropDown />
                            </div>
                            <div className="w-[50px] h-[45px]">
                                <input type="number" className="bg-white w-full h-full outline-0 border-0 rounded-[5px] text-center "/>
                            </div>
                        </div>
                        <div className="flex space-x-[5px] items-center w-[110px] h-full text-[14px]">
                            <div>
                                <HourSelectDropDown />
                            </div>
                            <div className="w-[50px] h-[45px]">
                                <input type="number" className="bg-white w-full h-full outline-0 border-0 rounded-[5px] text-center "/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-[60px] h-full">
                            <div className="w-[60px] h-[45px]">
                                <input type="number" className="bg-white w-full h-full outline-0 border-0 rounded-[5px] text-center "/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <ReasonSelect/>
                        </div>
                        <div>
                            <div className="w-[220px] h-[45px] overflow-hidden">
                               <input type="text" className="bg-white w-full h-full p-[10px_15px] rounded-[5px] outline-0 border-0"/>
                            </div>
                        </div>
                        <div className="w-[90px] h-full flex justify-center items-center ">
                            <div className="bg-transparent border border-gray-300 p-[5px] rounded-[5px] cursor-pointer">
                                <MdOutlineUploadFile className="text-[30px] text-gray-300" />
                            </div>
                        </div>
                        <div className="w-[90px] h-[45px] flex justify-center items-center ">
                            <button className="bg-blue-500 w-[80px] text-white h-full p-[5px] text-[14px] outline-0 rounded-[5px] cursor-pointer hover:bg-black transform-all duration-300">
                               Submit
                            </button>
                        </div>
                        <div  className="w-[120px] h-[45px] flex justify-center items-center">
                            <div className="bg-white h-full w-full rounded-[5px]">

                            </div>
                        </div>
                    </div>
                </div> */}
                <div>
                    <DailyForm date="06/01"/>
                    <DailyForm date="06/02"/>
                    <DailyForm date="06/03"/>
                    <DailyForm date="06/04"/>
                    <DailyForm date="06/05"/>
                    <DailyForm date="06/06"/>
                </div>
            </div>
        </div>
    )
}