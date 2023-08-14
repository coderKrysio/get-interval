import { rajdhani } from '@/lib/fonts'
import { TimeRange } from '@/lib/types'
import { isConditionMet, TIME_LINE } from '@/lib/utils'

export const Timeline = ({ timeRanges }: TimeRange) => {
    const blockLine = (result: boolean, time: number) => {
        if (result)
            return (
                <div
                    className={`py-[20px] mx-[-7px] relative flex justify-start border-t-4 border-[#48d399]`}
                >
                    <span
                        className={`before:content-[''] before:w-[7px] before:h-[25px] before:absolute before:top-[-13px] before:left-0 before:border-4 before:border-[#48d399] font-semibold text-[#48d399] text-xl`}
                    >
                        {time}
                    </span>
                </div>
            )
        else
            return (
                <div
                    className={`py-[20px] mx-[-7px] relative flex justify-start border-t-4 border-[#db696d]`}
                >
                    <span
                        className={`before:content-[''] before:w-[7px] before:h-[25px] before:absolute before:top-[-13px] before:left-0 before:border-4 before:border-[#db696d] font-semibold text-[#db696d] text-xl`}
                    >
                        {time}
                    </span>
                </div>
            )
    }

    return (
        <div className="mx-auto my-[40px] flex text-center px-2 select-none">
            {TIME_LINE.map((time: number, index: number) => (
                <div
                    key={index}
                    className={`w-[1px] text-center text-lg ${rajdhani.className}`}
                >
                    {time % 60 == 0 ? (
                        blockLine(isConditionMet(time, timeRanges), time / 60)
                    ) : (
                        <>
                            {isConditionMet(time, timeRanges) ? (
                                <div className="py-[20px] relative flex justify-start border-t-4 border-[#48d399]"></div>
                            ) : (
                                <div className="py-[20px] relative flex justify-start border-t-4 border-[#db696d]"></div>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}