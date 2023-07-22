import Image from "next/image"
import Timeline from "./Timeline"
import MemberInfo from "./MemberInfo"
import { membersData } from "@/lib/utils"

interface MemberData {
    id: number,
    roomCode: string,
    name: string,
    intervals: number[][]
}

const Results = () => {
    const roomCode = 'ahd-kjha-hjah'

    return (
        <div
        className='w-screen min-h-screen flex flex-col justify-center items-center text-white bg-[#16161a] py-[70px]'
        >
            <div className="fixed top-0 left-0 w-full bg-[#16161a] flex justify-start items-center gap-4 p-4 z-[10]">
                <Image
                    width={30}
                    height={30}
                    src={
                        'https://img.icons8.com/ios-filled/100/48D399/session-timeout.png'
                    }
                    alt="session-timeout"
                />

                <h3 className="text-3xl font-semibold text-[#48d399]">
                    Get Intervals
                </h3>
            </div>

            <h2
            className="text-5xl font-semibold tracking-wide"
            >Union Free Interval</h2>

            <p
            className="text-2xl font-medium tracking-wide my-3 text-[#d4d4d4]"
            >Room Code: {roomCode}</p>

            <p
            className="text-3xl text-[#48d399] my-2"
            >14:00 - 15:00 <br /> 18:00 - 23:00</p>

            <Timeline />

            <p
            className="text-3xl text-[#d4d4d4] font-medium pb-3 my-4"
            >Members Slots</p>

            <div
            className="max-w[1200px] grid grid-flow-row grid-cols-3 justify-center items-start gap-[70px]"
            >
                {membersData.map((values: MemberData) => 
                    <MemberInfo name={values.name} intervals={values.intervals} />
                )}
            </div>
        </div>
    )
}

export default Results