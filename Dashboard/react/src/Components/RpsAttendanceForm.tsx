import { RpsDailyForm } from "./RpsDailyForm"

export function RpsAttendanceForm() {
    return (
        <div className="w-full h-screen px-[10px] bg-gray-100">
            <div className="w-full flex justify-between">
                <div className="bg-[#d8d8d8] w-[25%] h-[50px] text-[14px] flex justify-center items-center">
                    <h1>Date</h1>
                </div>
                <div className="bg-gray-200 w-[25%] h-[50px] text-[14px] flex justify-center items-center">
                    <h1>Total</h1>
                </div>
                <div className="bg-gray-200 w-[25%] h-[50px] text-[14px] flex justify-center items-center">
                    <h1>Detail</h1>
                </div>
                <div className="bg-gray-200 w-[25%] h-[50px] text-[14px] flex justify-center items-center">
                    <h1></h1>
                </div>
            </div>
            <div>
                <RpsDailyForm/>
            </div>
        </div>
    )
}