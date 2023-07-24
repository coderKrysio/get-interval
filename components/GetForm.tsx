import { useState } from 'react'
import Form from './Form'
import Navbar from './Navbar'
import { svgSrc, timeIntervals } from '@/lib/utils'
import Link from 'next/link'
interface RoomCode {
    roomCode: string
}

interface FormData {
    name: string,
    roomCode: string,
    intervals: number[][],
}

const GetForm = ({ roomCode }: RoomCode) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        roomCode: roomCode,
        intervals: [timeIntervals]
    })

    console.log(formData)

    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center text-white py-[70px]">
            <Navbar />

            <div className="relative w-fit border-2 border-white ml-6 p-8 rounded-2xl flex justify-start items-start bg-[#16161a]">
                <div>
                    <p className="text-2xl text-[#d4d4d4] mb-[20px]">Room Code: {roomCode}</p>

                    <Form setFormData={setFormData} />
                </div>

                <div className="mt-[20px] ml-[20px]">
                    <iframe
                        className="border-none w-[450px] h-[275px] z-[-1]"
                        src={svgSrc}
                    ></iframe>
                </div>

                <div className="absolute bottom-0 right-0 m-8 mb-[42px] flex gap-6">
                    <Link className="py-2 px-5 border-[3px] border-white rounded-lg text-xl font-medium hover:font-semibold hover:border-[#48d399] hover:text-[#48d399]"
                    href={`/${roomCode}/result`}
                    >
                        Submit
                    </Link>

                    <Link className="py-2 px-5 border-[3px] border-white rounded-lg text-xl font-medium hover:font-semibold hover:border-[#48d399] hover:text-[#48d399]"
                    href={`/${roomCode}/result`}
                    >
                        Result
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GetForm
