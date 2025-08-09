import { AttendanceStatusSelect } from "./AttendanceStatusSelect"
import { HourSelectDropDown } from "./HourSelect.DropDown"
import { ReasonSelect } from "./ReasonSelect"
import { MdOutlineUploadFile } from "react-icons/md";

export function NRpsDailyForm(props : any) {
    return (
        <div className="w-full h-full ">
            <div className="w-full flex h-[60px] justify-between items-center px-[20px]">
                <div className="flex justify-center cursor-pointer items-center w-[100px]  h-full bg-gray-300 text-[14px]">
                    <span>{props.date}</span>
                </div>
                <div className="flex justify-center w-[130px] h-full text-[14px] ">
                    <AttendanceStatusSelect />
                </div>
                <div className="flex space-x-[5px]  items-center w-[110px] h-full text-[14px]">
                    <div className="">
                        <HourSelectDropDown />
                    </div>
                    <div className="w-[50px] h-[45px]">
                        <input type="number" className="bg-white w-full h-full outline-0 border-0 rounded-[5px] text-center " />
                    </div>
                </div>
                <div className="flex space-x-[5px] items-center w-[110px] h-full text-[14px]">
                    <div>
                        <HourSelectDropDown />
                    </div>
                    <div className="w-[50px] h-[45px]">
                        <input type="number" className="bg-white w-full h-full outline-0 border-0 rounded-[5px] text-center " />
                    </div>
                </div>
                <div className="flex justify-center items-center w-[60px] h-full">
                    <div className="w-[60px] h-[45px]">
                        <input type="number" className="bg-white w-full h-full outline-0 border-0 rounded-[5px] text-center " />
                    </div>
                </div>
                <div className="flex justify-center">
                    <ReasonSelect />
                </div>
                <div>
                    <div className="w-[220px] h-[45px] overflow-hidden">
                        <input type="text" className="bg-white w-full h-full p-[10px_15px] rounded-[5px] outline-0 border-0" />
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
                <div className="w-[120px] h-[45px] flex justify-center items-center">
                    <div className="bg-white h-full w-full rounded-[5px]">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}