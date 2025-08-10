import { RpsDailyForm } from "./RpsDailyForm"

export function RpsAttendanceForm() {
    return (
        <div className="w-full h-auto px-[10px] bg-gray-100">
            <div className="w-full flex justify-between">
                <div className="bg-[#e7e7e7bf] w-[25%] h-[50px] text-[14px] flex justify-center items-center">
                    <h1>Date</h1>
                </div>
                <div className="bg-gray-100 w-[25%] h-[50px] text-[14px] flex justify-center items-center">
                    <h1>Total</h1>
                </div>
                <div className="bg-gray-100 w-[25%] h-[50px] text-[14px] flex justify-center items-center">
                    <h1>Detail</h1>
                </div>
                <div className="bg-gray-100 w-[25%] h-[50px] text-[14px] flex justify-center items-center">
                    <h1></h1>
                </div>
            </div>
            <div className="w-full h-auto">
                <RpsDailyForm date="08/01"/>
                <RpsDailyForm date="08/02"/>
                <RpsDailyForm date="08/03"/>
                <RpsDailyForm date="08/04"/>
                <RpsDailyForm date="08/05"/>
                <RpsDailyForm date="08/06"/>
                <RpsDailyForm date="08/07"/>
                <RpsDailyForm date="08/08"/>
                <RpsDailyForm date="08/09"/>
                <RpsDailyForm date="08/10"/>
                <RpsDailyForm date="08/11"/>
                <RpsDailyForm date="08/12"/>
                <RpsDailyForm date="08/13"/>
                <RpsDailyForm date="08/14"/>
                <RpsDailyForm date="08/15"/>
                <RpsDailyForm date="08/16"/>
                <RpsDailyForm date="08/17"/>
                <RpsDailyForm date="08/18"/>
                <RpsDailyForm date="08/19"/>
                <RpsDailyForm date="08/20"/>
            </div>
        </div>
    )
}