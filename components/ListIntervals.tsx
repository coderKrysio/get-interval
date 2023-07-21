import { intervals, timeIntervals } from "@/lib/utils"

const ListIntervals = () => {
    return (
        <>
            {intervals.map((currentValue: string, index: number, key: any) =>
                <div className="w-full flex flex-col justify-center items-center mb-4">
                    <label htmlFor="interval" className='text-left w-full'>Enter time interval</label>

                    <div 
                    id="interval"
                    className="flex justify-center items-center gap-[10px]"
                    >
                        <input 
                        type="time"
                        className="border-2 border-white text-black rounded-lg py-1 px-4 m-1"
                        />
                        <span>-</span>
                        <input 
                        type="time"
                        className="border-2 border-white text-black rounded-lg py-1 px-4 m-1"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default ListIntervals