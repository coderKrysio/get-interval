import { rajdhani } from '@/lib/fonts'
import { intervals } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

const ListIntervals = ({ addInterval, removeInterval }: any) => {
    const [errorMsg, setErrorMsg] = useState<string>("");

    const [timeRange, setTimeRange] = useState({
        start: '08:00',
        end: '10:00'
    })

    const updatedRange = (e: any) => {
        const {name, value} = e.target
        setTimeRange((prev: any) => ({
            ...prev,
            [name]: value,
        }))

        if(timeRange.end < timeRange.start) setErrorMsg("Invalid time intervals: End time > Start time.")
        else setErrorMsg("")
    }

    console.log(timeRange)

    return (
        <>
            {intervals.map((currentValue: string, index: number) => (
                <div
                    className="w-full flex flex-col justify-center items-center mb-4"
                    key={index}
                >
                    <label htmlFor="interval" className="text-left w-full">
                        Enter time interval
                    </label>

                    <div
                        id="interval"
                        className="flex justify-center items-center gap-[10px]"
                    >
                        <input
                            type="time"
                            defaultValue={'08:00'}
                            name='start'
                            onChange={(e: any) => updatedRange(e)}
                            className={`border-2 border-white text-black text-[24px] font-semibold rounded-lg py-[3px] px-4 m-1 focus:outline focus:outline-2 focus:outline-[#48d399] focus:border-[#48d399] focus:bg-transparent focus:text-white ${rajdhani.className}`}
                        />

                        <span className="font-semibold text-2xl">-</span>

                        <input
                            type="time"
                            defaultValue={'10:00'}
                            name='end'
                            onChange={(e: any) => updatedRange(e)}
                            className={`border-2 border-white text-black text-[24px] font-semibold rounded-lg py-[3px] px-4 m-1 focus:outline focus:outline-2 focus:outline-[#48d399] focus:border-[#48d399] focus:bg-transparent focus:text-white ${rajdhani.className}`}
                        />

                        <div>
                            <button
                                className="w-[35px] h-[35px] rounded-[25px] ml-[20px]"
                                onClick={() => addInterval()}
                            >
                                <Image
                                    width="60"
                                    height="60"
                                    src="https://img.icons8.com/48d399/doodle/96/000000/add.png"
                                    alt="add"
                                />
                            </button>

                            {intervals.length > 1 ? (
                                <button
                                    className="w-[35px] h-[35px] rounded-[25px] ml-[15px]"
                                    onClick={() => removeInterval()}
                                >
                                    <Image
                                        width="60"
                                        height="60"
                                        src="https://img.icons8.com/color/96/delete-forever.png"
                                        alt="remove"
                                    />
                                </button>
                            ) : (
                                <button className="w-[35px] h-[35px] rounded-[25px] ml-[15px] z-[-1]"></button>
                            )}
                        </div>
                    </div>

                    {errorMsg != "" ?
                    <p
                    className='font-medium text-[#db696d]'
                    >{errorMsg}</p> :
                    <></>
                    }
                </div>
            ))}
        </>
    )
}

export default ListIntervals
