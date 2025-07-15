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
                    <div>
                        <span className="font-semibold font-sans text-[20px] text-gray-500 dark:text-[#d8d8d8]">Month</span>
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
                <div className="w-full h-auto mt-[30px]">
                    <div className="w-full flex  justify-between px-[20px]">
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">Date</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">Attendance Status</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">Clock-In</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">Clock-Out</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">Break</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">Reason for early/late</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">Detail</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">late enidance</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">save</h1>
                        <h1 className="px-[20px] py-[10px] text-center text-[13px] dark:text-[#d8d8d8]">Status</h1>
                    </div>
                    <div className="w-full flex bg-gray-300 h-auto">
                        <div className="flex justify-center w-[120px] bg-red-300 text-[14px]">
                            06/1
                        </div>
                        <div className="flex justify-center w-[140px] bg-red-300 text-[14px]">
                            inputbox
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}