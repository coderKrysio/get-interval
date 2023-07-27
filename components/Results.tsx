import Timeline from './Timeline'
import MemberInfo from './MemberInfo'
import { membersData,  } from '@/lib/utils'
import Navbar from './Navbar'
import Link from 'next/link'

interface MemberData {
    id: number
    roomCode: string
    name: string
    intervals: number[][]
}

interface RoomCode {
    roomCode: string
}

const Results = ({ roomCode }: RoomCode) => {
    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center text-white bg-[#16161a] py-[70px]">
            <Navbar />

            <div
            className='w-full px-10 flex justify-between items-center my-[30px]'
            >
                <Link
                className='text-2xl font-medium tracking-wide py-2 px-5 border-2 border-white rounded-lg outline outlint-2 outline-transparent hover:outline-white'
                href={`/${roomCode}`}
                >Back</Link>

                <p
                className='text-2xl font-medium tracking-wide'
                >Timer - [ 02:00:00 ]</p>
            </div>

            <h2 className="text-5xl font-semibold tracking-wide">
                Union Free Interval
            </h2>

            <p className="text-2xl font-medium tracking-wide my-3 text-[#d4d4d4]">
                Room Code: {roomCode}
            </p>

            <p className="text-3xl text-[#48d399] my-2">
                14:00 - 15:00 <br /> 18:00 - 23:00
            </p>

            <Timeline />

            <button
            className='min-[1470px]:hidden text-2xl tracking-wide font-medium py-2 px-5 border-2 border-white rounded-lg outline outline-2 outline-transparent hover:outline-white'
            
            >Show Timeline</button>

            <p className="text-3xl text-[#d4d4d4] font-medium pb-3 my-4">
                Members Info
            </p>

            <div className="max-w[1200px] grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-[70px]">
                {membersData.map((values: MemberData, id: number) => (
                    <MemberInfo
                        name={values.name}
                        intervals={values.intervals}
                        key={id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Results
