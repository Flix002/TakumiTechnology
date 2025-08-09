import { NRpsDailyForm } from "./NRpsDailyForm"
import { MonthSelectDropDown } from "./MonthSelectDropDown"

export function NRpsBox() {
    return (
        <div className="w-full h-full shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] dark:shadow-[-0.3px_-0.2px_30px_black] py-[20px] px-[30px] hidden xl:block z-20">
            <div className="mb-[30px]">
                <h1 className="font-semibold italic font-sans text-[20px] text-gray-500 dark:text-[#d8d8d8]">Zeka002</h1>
            </div>
            <div className="w-full flex justify-between space-x-[20px] shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] dark:shadow-[-0.3px_-0.2px_30px_black] h-[60px] items-center rounded-[10px] mb-[30px]">
                {/* Working Hour */}
                <div className="w-auto h-auto inline items-center px-[20px]">
                    <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_20px_gray] text-[13px]">Working Hour : 20:05</span>
                </div>

                {/* National Holiday */}
                <div className="w-auto h-auto inline items-center px-[20px]">
                    <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_20px_gray] text-[13px]">O.T (national Holiday)</span>
                </div>
                
                {/* 36 OT */}
                <div className="w-auto h-auto inline items-center px-[20px]">
                    <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_20px_gray] text-[13px]">36.O.T</span>
                </div>

                {/* Remaining Paid leave */}
                <div className="w-auto h-auto inline items-center px-[20px]">
                    <span className="text-gray-600 font-sans font-semibold dark:text-[#d8d8d8] text-shadow-[0.5px_0.5px_20px_gray] text-[13px]">Remaining Paid Leave</span>
                </div>

                {/* Leave with Nov 30? */}
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
                        {/* Set Clock Time */}
                        <button className="w-[120px] bg-black text-white text-[13px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            SetClockTime
                        </button>

                        {/* Temporary save*/}
                        <button className="w-[120px] bg-black text-white text-[13px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            Temporary Save
                        </button>

                        {/* Submit all */}
                        <button className="w-[120px] bg-black text-white text-[13px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            Submit All
                        </button>

                        {/* PDF file Upload */}
                        {/* <label htmlFor="pdf-upload" className="w-[120px] bg-black text-white text-[13px] h-[40px] rounded-[20px] cursor-pointer font-sans tracking-[0.5px] flex items-center justify-center hover:bg-linear-160 from-black to-purple-600 transition-all duration-300">
                            PDF
                            <input
                                id="pdf-upload"
                                type="file"
                                accept="application/pdf"
                                style={{ display: "none" }}
                                onChange={async (e) => {
                                    const file = e.target.files?.[0];
                                    if (!file) return;
                                    const formData = new FormData();
                                    formData.append("file", file);

                                    try {
                                        const res = await fetch("http://localhost:4000/upload-pdf", {
                                            method: "POST",
                                            body: formData,
                                        });
                                        if (res.ok) {
                                            alert("PDF uploaded successfully!");
                                        } else {
                                            alert("Upload failed.");
                                        }
                                    } catch (err) {
                                        alert("Error uploading PDF.");
                                    }
                                }}
                            />
                        </label> */}
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
                <div>
                    <NRpsDailyForm date="06/01"/>
                    <NRpsDailyForm date="06/02"/>
                    <NRpsDailyForm date="06/03"/>
                    <NRpsDailyForm date="06/04"/>
                    <NRpsDailyForm date="06/05"/>
                    <NRpsDailyForm date="06/06"/>
                </div>
            </div>
        </div>
    )
}