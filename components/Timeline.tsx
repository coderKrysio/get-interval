import { rajdhani } from '@/lib/fonts'

const timeline: number[] = []
for (let x = 0; x < 24 * 60; x++) {
    timeline[x] = x
}

const Timeline = () => {
    const blockLine = (result: boolean, time: number) => {
        const color: string = result ? '#48d399' : '#db696d'
        return (
            <div
                className={`py-[20px] mx-[-7px] relative flex justify-start border-t-4 border-[${color}]`}
            >
                <span
                    className={`before:content-[''] before:w-[3px] before:h-[25px] before:bg-[${color}] before:absolute before:top-[-13px] before:left-0 before:border-4 before:border-[${color}] font-semibold text-[${color}] text-xl`}
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
        <div className="my-[50px] flex p-0 text-center">
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
