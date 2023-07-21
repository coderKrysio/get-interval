import { intervals, timeIntervals } from "@/lib/utils"

const ListIntervals = () => {
    return (
        <div>
            {intervals.map((currentValue: string, index: number, key: any) =>
                <div className="w-full flex flex-col justify-center items-center">
                    <label htmlFor="interval" className='text-left w-full'>Choose your interval</label>
                    <select id="interval" className='text-black p-2 w-full rounded-lg border-2 border-black'>
                        {timeIntervals.map((data: string) => <option value={data}>{data}</option>
                        )}
                    </select>
                </div>
            )}
        </div>
    )
}

export default ListIntervals