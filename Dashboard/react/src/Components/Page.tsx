import { Navbar } from "./Navbar"
import userIcon from '../assets/icons/user-solid.svg'

export function Page() {
    return (
        <div className="w-screen h-[120vh] bg-[#e9e9e9dd] flex overflow-hidden">
            <div className="w-[400px] h-full">
                <Navbar/>
            </div>
            <div className="w-full h-full px-[50px]">
                <div className="w-full flex justify-between items-center h-[80px] mb-[20px]">
                    <div className="border-l-[5px] border-l-yellow-300 px-[10px]">
                        <h1 className="font-bold text-[30px] text-gray-500">Heading</h1>
                    </div>
                    <div className="flex space-x-[10px] items-center">
                        <div className="font-sans text-[20px]">
                            Zeka002
                        </div>
                        <div className="w-[60px] h-[60px] bg-gray-400 p-[10px] rounded-[50%]">
                            <img src={userIcon} alt="" className="w-full h-full"/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full shadow-[-0.3px_-0.2px_30px_#d7d7d7dd] py-[20px] px-[30px]">
                    <div className="mb-[30px]">
                        <h1 className="font-semibold font-sans text-[25px] text-gray-500">Box Heading</h1>
                    </div>
                    <div className="w-full flex justify-between space-x-[20px] bg-amber-200 h-[60px] items-center rounded-[10px] mb-[30px]"> 
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">Working Hour : 20:05</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">O.T (national Holiday)</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">36.O.T</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">Remaining Paid Leave</span>
                        </div>
                        <div className="w-auto h-auto inline items-center px-[20px]">
                            <span className="text-gray-600 font-sans font-semibold">Leave With Nov 30?</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-between h-[60px] items-center">
                        <div>
                            <span className="font-semibold font-sans text-[25px] text-gray-500">Month</span>
                        </div>
                        <div className="flex space-x-[20px]">
                            <div className="w-[110px] h-[50px]">
                                <button className="w-full h-full bg-blue-500 text-white rounded-[10px] font-sans font-semibold hover:brightness-125 transition-all duration-300 cursor-pointer text-[13px]">Set Clock Time</button>
                            </div>
                            <div className="w-[110px] h-[50px]">
                                <button className="w-full h-full bg-blue-500 text-white rounded-[10px] font-sans font-semibold hover:brightness-125 transition-all duration-300 cursor-pointer text-[13px]">Temparary Save</button>
                            </div>
                            <div className="w-[110px] h-[50px]">
                                <button className="w-full h-full bg-blue-500 text-white rounded-[10px] font-sans font-semibold hover:brightness-125 transition-all duration-300 cursor-pointer text-[13px]">Submit All</button>
                            </div>
                            <div className="w-[110px] h-[50px]">
                                <button className="w-full h-full bg-blue-500 text-white rounded-[10px] font-sans font-semibold hover:brightness-125 transition-all duration-300 cursor-pointer text-[13px]">PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}