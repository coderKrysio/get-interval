import { rajdhani } from "@/lib/fonts"

const MemberInfo = () => {
    return (
        <div className="min-h-36 w-[330px] rounded-lg bg-gradient-to-b from-[#48d399] via-[#21212b] to-[#db696d] p-1">
            <div
            className="w-full h-full bg-[#21212b] rounded-[4px] p-3 flex flex-col gap-[8px]"
            >
                <p 
                className="text-3xl font-semibold tracking-wide"
                >Anushree</p>

                <span
                className="text-xl font-medium text-[#d4d4d4]"
                >Busy Slots:</span>

                <p
                className={`text-2xl tracking-wider font-medium ${rajdhani.className}`}
                >00:00 - 13:59</p>

                <p
                className={`text-2xl tracking-wider font-medium ${rajdhani.className}`}
                >15:01 - 17:59</p>
            </div>
        </div>
    )
}

export default MemberInfo