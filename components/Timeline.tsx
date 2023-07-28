import { rajdhani } from '@/lib/fonts'

const timeline: number[] = []
for (let x = 0; x < 24 * 60; x++) {
    timeline[x] = x
}

const Timeline = () => {
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

    const conditionMet = (time: number) => {
        return (time >= 14 && time <= 15) || (time >= 18 && time <= 23)
    }

    return (
        <div className="mx-auto my-[40px] flex text-center px-2">
            {timeline.map((time: number, index: number) => (
                <div
                    key={index}
                    className={`w-[1px] text-center text-lg ${rajdhani.className}`}
                >
                    {time % 60 == 0 ? (
                        blockLine(conditionMet(time / 60), time / 60)
                    ) : (
                        <>
                            {conditionMet(time / 60) ? (
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

export default Timeline
