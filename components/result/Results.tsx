import {Timeline} from './Timeline'
import {MemberInfo} from './MemberInfo'
import { ConvertNumToTime } from '@/lib/utils'
import {Navbar} from '../Navbar'
import Link from 'next/link'
import { MemberData, RoomCode } from '@/lib/types'
import { API } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useToGetResult } from '@/lib/hooks'

export const Results = ({ roomCode }: RoomCode) => {
    const router = useRouter()
    const { result, membersData, time } = useToGetResult(roomCode)

    if (time === 0) {
        API.deleteRoom(roomCode)
        router.push('/')
    }

    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center text-white bg-[#16161a] py-[70px]">
            <Navbar />

            <div className="w-full px-10 flex justify-between items-center my-[30px] max-[600px]:justify-center">
                <Link
                    className="text-2xl font-medium tracking-wide py-2 px-5 border-2 border-white rounded-lg outline outlint-2 outline-transparent hover:outline-white"
                    href={`/${roomCode}`}
                >
                    Back
                </Link>

                <button
                    className="text-2xl font-medium tracking-wide py-2 px-5 border-2 border-white rounded-lg outline outlint-2 outline-transparent hover:outline-white"
                >
                    Share
                </button>
            </div>

            <h2 className="text-5xl text-center font-semibold tracking-wide m-2">
                Union Free Interval
            </h2>

            <p className="text-2xl text-center font-medium tracking-wide mx-2 my-3 text-[#d4d4d4]">
                Room Code: {roomCode}
            </p>

            {result.length == 0 ? (
                <p className="text-3xl text-[#db696d]">No data found</p>
            ) : (
                result.map((interval: number[], index: number) => (
                    <p className="text-3xl text-[#48d399] my-1" key={index}>
                        { ConvertNumToTime(interval[0]) } - { ConvertNumToTime(interval[1]) }
                    </p>
                ))
            )}

            <div className="timeline px-4 flex items-center justify-start w-full overflow-auto">
                <Timeline timeRanges={result} />
            </div>

            <p className="text-3xl text-[#d4d4d4] font-medium pb-3 my-4">
                Members Info
            </p>

            <div className="max-w[1200px] flex flex-wrap justify-center items-center gap-[70px]">
                {membersData.length == 0 ? (
                    <p className="text-2xl text-center text-[#db696d]">No Data Found</p>
                ) : (
                    membersData.map((values: MemberData, id: number) => (
                        <MemberInfo
                            name={values.username}
                            intervals={values.timeRanges}
                            key={id}
                        />
                    ))
                )}
            </div>
        </div>
    )
}