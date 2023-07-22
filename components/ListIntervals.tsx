import { intervals } from '@/lib/utils'
import Image from 'next/image'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: '500',
})

const ListIntervals = ({ addInterval, removeInterval }: any) => {
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
                            className={`border-2 border-white text-black text-[24px] font-semibold rounded-lg py-[3px] px-4 m-1 focus:outline focus:outline-2 focus:outline-[#48d399] focus:border-[#48d399] focus:bg-transparent focus:text-white ${rajdhani.className}`}
                        />

                        <span className="font-semibold text-2xl">-</span>

                        <input
                            type="time"
                            defaultValue={'10:00'}
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
                </div>
            ))}
        </>
    )
}

export default ListIntervals
