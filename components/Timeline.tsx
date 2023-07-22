import { rajdhani } from "@/lib/fonts";

const timeline: number[] = [];
for(let x = 0; x < 24; x++) {
    timeline[x] = x;
}
const Timeline = () => {
    return (
        <div
        className="my-[50px] flex p-0 text-center border-[1px] border-white"
        >
            {timeline.map((time: number, index: number) =>
                <div key={index}
                className={`w-[60px] text-center text-lg ${rajdhani.className}`}
                >
                    {time >= 14 && time < 15 || time >= 18 && time <= 23 ?
                        <div
                        className="py-[20px] relative flex justify-start border-t-4 border-[#48d399]"
                        >
                            <span
                            className="before:content-[''] before:w-[3px] before:h-[25px] before:bg-[#48d399] before:absolute before:top-[-13px] before:left-0 before:border-4 before:border-[#48d399] before:z-[1] font-semibold text-[#48d399] text-xl"
                            >{time}</span> 
                        </div>
                        :
                        <div
                        className="py-[20px] relative flex justify-start border-t-4 border-[#db696d]"
                        >
                            <span
                            className="before:content-[''] before:w-[3px] before:h-[25px] before:bg-[#db696d] before:absolute before:top-[-13px] before:left-0 before:border-4 before:border-[#db696d] font-semibold text-[#db696d] text-xl"
                            >{time}</span>
                        </div>
                    }
                </div>
            )}
        </div>
    )
}

export default Timeline