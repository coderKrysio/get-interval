import { rajdhani } from "@/lib/fonts"
import { NumToTime } from "@/lib/utils"

interface Info {
    name: string,
    intervals: number[][]
}

const MemberInfo = ({name, intervals}: Info) => {
    return (
        <div className="min-h-36 w-[330px] rounded-lg bg-gradient-to-b from-[#48d399] via-[#21212b] to-[#db696d] p-1">
            <div
            className="w-full h-full bg-[#21212b] rounded-[4px] p-3 flex flex-col gap-[8px]"
            >
                <p 
                className="text-3xl font-semibold tracking-wide"
                >{name}</p>

                <span
                className="text-xl font-medium text-[#d4d4d4]"
                >Busy Slots:</span>

                {intervals.map((slot: number[], index: number) => 
                    <p
                    key={index}
                    className={`text-2xl tracking-wider font-medium ${rajdhani.className}`}
                    >{NumToTime(slot[0])} - {NumToTime(slot[1])}</p>
                )}
            </div>
        </div>
    )
}

export default MemberInfo