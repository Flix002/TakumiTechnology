import { AttendanceStatusSelect } from "./AttendanceStatusSelect"
import { HourSelectDropDown } from "./HourSelect.DropDown"
import { ReasonSelect } from "./ReasonSelect"
import { MdOutlineUploadFile } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";

export function RpsDailyForm(props: any) {
    const rpsAttendanceMainForm = document.getElementById('rpsAttendanceMainForm') as HTMLElement;
    
    function rpsDailyForm() : void {
        rpsAttendanceMainForm.classList.toggle('hidden');
    }

    return (
        <div className="w-full h-[50px] flex justify-between items-center mt-[2px] cursor-pointer">
            <div className="w-[25%] py-[15px] h-full bg-[#e7e7e7bf] flex justify-center items-center">
                <h1 className="text-[14px]">{props.date}</h1>
            </div>
            <div className="w-[25%] h-full bg-gray-100">

            </div>
            <div className="w-[25%] h-full bg-gray-100">

            </div>
            <div className="w-[25%] h-full bg-gray-100 flex justify-center items-center">
                <button className="text-white bg-blue-400 w-[65px] h-[35px] text-[14px] rounded-[10px] cursor-pointer hover:bg-black transition-all duration-200" id="RpsDetailBtn" onClick={rpsDailyForm}>Detail</button>
            </div>
            {/* RpsDailyForm */}
            <div className="w-[100%] transition-all duration-300 h-auto py-[10px] px-[10px] top-[80px] fixed bg-[#fdfbfbec] z-10 hidden backdrop-blur-[10px]" id="rpsAttendanceMainForm">
                <div className="w-full h-auto flex flex-row-reverse">
                    <HiMiniXMark className="text-[27px] text-gray-800 " onClick={rpsDailyForm}/>
                </div>
                <div className="w-full h-[80px] py-[10px] flex justify-around items-center">
                    <button className="w-[100px] h-[35px] text-white text-[13px] hover:bg-black cursor-pointer transition-all dur bg-blue-600 rounded-[10px] ">Lorem</button>
                    <button className="w-[100px] h-[35px] text-white text-[13px] hover:bg-black cursor-pointer transition-all dur bg-blue-600 rounded-[10px] ">Lorem</button>
                    <button className="w-[100px] h-[35px] text-white text-[13px] hover:bg-black cursor-pointer transition-all dur bg-gray-600 rounded-[10px] ">Lorem</button>
                </div>
                <div className="px-[10px] flex w-full ">
                    <div className="flex flex-col w-[32%]">
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">Date</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">Work Status</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">Clock In</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">Clock Out</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">Break</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">Reason</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[100px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">Detail</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">Total</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">O.T</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">late enidance</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-[50px] bg-[#f3f2f2ee]">
                            <h1 className="text-[12px]">Status</h1>
                        </div>
                    </div>
                    <div className="flex flex-col w-[68%] h-auto">
                        <div className="w-full h-[50px] flex px-[20px] items-center">
                            <h1 className="text-[12px]">{props.date}</h1>
                        </div>
                        <div className="w-full h-[50px] flex px-[15px] items-center">
                            <AttendanceStatusSelect />
                        </div>
                        <div className="w-full h-[50px] flex px-[15px] items-center">
                            <div className="flex py-[3px] h-full items-center">
                                <div className="w-[80px]">
                                    <HourSelectDropDown />
                                </div>
                                <div className="w-[50px] h-[40px]">
                                    <input type="number" className="w-full rounded-[5px] outline-1 outline-gray-200 border border-gray-200 h-full px-[4px] text-center py-[4px]" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[50px] flex px-[15px] items-center">
                            <div className="flex py-[3px] h-full items-center">
                                <div className="w-[80px]">
                                    <HourSelectDropDown />
                                </div>
                                <div className="w-[50px] h-[40px]">
                                    <input type="number" className="w-full rounded-[5px] outline-1 outline-gray-200 border border-gray-200 h-full px-[4px] text-center py-[4px]" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[50px] flex px-[15px] items-center">
                            <div className="w-[50px] h-[40px] py-[3px]">
                                <input type="number" className="w-full rounded-[5px] outline-1 outline-gray-200 border border-gray-200 h-full px-[4px] text-center py-[4px]" />
                            </div>
                        </div>
                        <div className="w-full h-[50px] flex px-[15px] items-center">
                            <div className="w-full h-full py-[3px]">
                                <ReasonSelect />
                            </div>
                        </div>
                        <div className="w-full h-[100px] flex px-[15px] items-center">
                            <div className="w-full h-[90px] py-[3px]">
                                <textarea name="text" id="" className="w-full h-full border border-gray-200 outline-0 p-[10px] text-[13px]">
                                </textarea>
                            </div>
                        </div>
                        <div className="w-full h-[50px] flex px-[20px] items-center">
                            <div className="w-full h-full flex items-center ">
                                <span className="text-[13px]">08 : 00</span>
                            </div>
                        </div>
                        <div className="w-full h-[50px] flex px-[20px] items-center">
                            <div className="w-full h-full flex items-center ">
                                <span className="text-[13px]">08 : 00</span>
                            </div>
                        </div>
                        <div className="w-full h-[50px] flex px-[20px] items-center">
                            <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-300 rounded-[5px]">
                                <MdOutlineUploadFile className="text-[20px] not-[]:text-gray-500"/>
                            </div>
                        </div>
                        <div className="w-full h-[50px] flex px-[20px] items-center">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}