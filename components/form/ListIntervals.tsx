'use client'
import { rajdhani } from '@/lib/fonts'
import { useToUpdateIntervalAndErrors } from '@/lib/hooks'
import { intervals } from '@/lib/utils'
import Image from 'next/image'

export const ListIntervals = ({ addInterval, removeInterval, setFormData }: any) => {
    const { errorMsg, updatedRange } = useToUpdateIntervalAndErrors({ setFormData })

    return (
        <>
            {intervals.map((_currentValue: number[], index: number) => (
                <div
                    className="w-full flex flex-col justify-center items-center mb-4"
                    key={index}
                >
                    <label htmlFor="interval" className="text-left w-full">
                        Enter time interval
                    </label>

                    <div
                        id="interval"
                        className="relative flex justify-center items-center gap-[10px] max-[500px]:mb-[40px]"
                    >
                        <input
                            type="time"
                            defaultValue={'08:00'}
                            name="start"
                            onChange={(e: any) => updatedRange(e, index)}
                            className={`border-2 border-white text-black text-[24px] font-semibold rounded-lg py-[3px] px-4 m-1 focus:outline focus:outline-2 focus:outline-[#48d399] focus:border-[#48d399] focus:bg-transparent focus:text-white max-[500px]:w-fit ${rajdhani.className}`}
                        />

                        <span className="font-semibold text-2xl">-</span>

                        <input
                            type="time"
                            defaultValue={'10:00'}
                            name="end"
                            onChange={(e: any) => updatedRange(e, index)}
                            className={`border-2 border-white text-black text-[24px] font-semibold rounded-lg py-[3px] px-4 m-1 focus:outline focus:outline-2 focus:outline-[#48d399] focus:border-[#48d399] focus:bg-transparent focus:text-white max-[500px]:w-fit ${rajdhani.className}`}
                        />

                        <div className="flex max-[500px]:absolute gap-[15px] max-[500px]:-bottom-full">
                            <button
                                className="w-[35px] h-[35px] rounded-[25px]"
                                onClick={() => addInterval()}
                            >
                                <Image
                                    width="60"
                                    height="60"
                                    src="/add.png"
                                    alt="add"
                                />
                            </button>

                            {intervals.length > 1 && (
                                <button
                                    className="w-[35px] h-[35px] rounded-[25px]"
                                    onClick={() => removeInterval()}
                                >
                                    <Image
                                        width="60"
                                        height="60"
                                        src="/remove.png"
                                        alt="remove"
                                    />
                                </button>
                            )}
                        </div>
                    </div>

                    {errorMsg != '' &&
                        <p className="text-center font-medium text-[#db696d] max-[500px]:mt-[20px]">
                            {errorMsg}
                        </p>
                    }
                </div>
            ))}
        </>
    )
}