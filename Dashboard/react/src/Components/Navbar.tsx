import { useState } from "react"
import { Link } from "react-router"
import clockIcon from '../assets/icons/stopwatch-solid.svg'
import textFileIcon from '../assets/icons/file-lines-solid.svg'
import textFileWordIcon from '../assets/icons/file-word-solid.svg'

export function Navbar() {
    const [ attendanceActive, setAttendanceActive ] = useState(false);
    const [ sDanceActive, setSDanceActive ] = useState(false);
    const [ tDanceActive, setTDanceActive ] = useState(false);
    const [ fDanceActive, setFDanceActive ] = useState(false);
    const [ fiDanceActive, setFIDanceActive ] = useState(false);

    return (
        <div className="h-full w-[350px] bg-[#d7d7d7dd] " style={{ boxShadow : '0.5px 1px 5px gray' }}>
            <div className="logo bg-[#e9e9e9dd] w-full h-[80px] flex items-center justify-center space-x-[10px]">
                <Link to='/' className="logo text-[25px] text-[#dda900] text-shadow-black italic" style={{textShadow : "1px 1px 1px gray"}}><span className="text-[35px] text-[#dda900] not-italic">匠</span> Takumi Technology</Link>
            </div>
            <div className="nav">  
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    attendanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400  ${
                        attendanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setAttendanceActive( !attendanceActive )
                        }>
                        <img src={clockIcon} alt="" className="w-[20px] h-[20px]"/>
                        <h1 className="text-[16px] font-semibold font-sans">Attendance, Travel Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        attendanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        attendanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        attendanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Monthly Overall</h1>
                    </div>
                </div>
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    sDanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400  ${
                        sDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setSDanceActive( !sDanceActive )
                        }>
                        <img src={textFileIcon} alt="" className="w-[20px] h-[20px]"/>
                        <h1 className="text-[16px] font-semibold font-sans">Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        sDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        sDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        sDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Monthly Overall</h1>
                    </div>
                </div>
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    tDanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400  ${
                        tDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setTDanceActive( !tDanceActive )
                        }>
                        <img src={textFileWordIcon} alt="" className="w-[20px] h-[20px]"/>
                        <h1 className="text-[16px] font-semibold font-sans">Travel Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        tDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        tDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        tDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Monthly Overall</h1>
                    </div>
                </div>
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    fDanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400  ${
                        fDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setFDanceActive( !fDanceActive )
                        }>
                        <img src={textFileIcon} alt="" className="w-[20px] h-[20px]"/>
                        <h1 className="text-[16px] font-semibold font-sans">Attendance, Travel Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Monthly Overall</h1>
                    </div>
                </div>
                <div className={`flex flex-col items-center w-full h-auto transition-all duration-200 cursor-pointer ${
                    fiDanceActive ? 'bg-gray-400' : 'bg-none'
                }`} id="attendanceDiv">
                    <div className={`flex space-x-[10px] items-center h-[80px] w-full justify-start pl-[30px] cursor-pointer transition-all duration-200 hover:bg-gray-400  ${
                        fiDanceActive ? 'border-l-[6px] border-l-yellow-500' : 'border-0'
                    }`} onClick={
                            () => setFIDanceActive( !fiDanceActive )
                        }>
                        <img src={textFileWordIcon} alt="" className="w-[20px] h-[20px]"/>
                        <h1 className="text-[16px] font-semibold font-sans">Travel Espenses</h1>
                    </div>
                    <div className={`transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fiDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Attendance</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fiDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Edit</h1>
                    </div>
                    <div className={`flex transition-all space-x-[10px] items-center h-[80px] w-full justify-start pl-[40px] cursor-pointer ${
                        fiDanceActive ? 'flex' : 'hidden'
                    }`}>
                        <h1 className="text-[16px] font-semibold font-sans">Monthly Overall</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}