import { useEffect } from "react"

const timeIntervals = [
    "8:30 - 10:00",
    "10:05 - 11:35",
    "11:40 - 13:10",
    "13:15 - 14:45",
    "14:50 - 16:20",
    "16:25 - 17:55",
    "18:00 - 19:30"
]

const intervals: string[] = [timeIntervals[0]]
console.log(intervals.length)

const Form = () => {
    const ListIntervals = () => {
        return(
            <div>
            hi
                {/* {intervals.map((currentValue: string, index: number) =>
                    <div className="w-full flex flex-col justify-center items-center">
                        <label htmlFor="interval" className='text-left w-full'>Choose your interval</label>
                        <select id="interval" className='text-black p-2 w-full rounded-lg border-2 border-black'>
                            {timeIntervals.map((data: string) => <option value={data}>{data}</option>
                            )}
                        </select>
                    </div>
                )} */}
            </div>
        )
    }

    const addInterval = () => {
        intervals.push(timeIntervals[0])
    }

    useEffect(() => {
        <ListIntervals />
    }, [intervals.length])

    return (
        <form
        className='border-2 border-white text-white w-fit p-4 flex flex-col justify-center items-center'
        onSubmit={(e) => {
            e.preventDefault()
        }}
        >
            <label htmlFor="my-name" className='text-left w-full'>Name</label>
            <input 
            name="name" 
            id="my-name" 
            type="text" 
            className='placeholder:text-white w-[244px] mb-4 p-2 border-2 border-white bg-transparent rounded-lg' 
            placeholder='name' />

            <label htmlFor="code" className='text-left w-full'>Room Code</label>
            <input 
            name="code" 
            id="code" 
            type="text" 
            className='placeholder:text-white w-[244px] mb-4 p-2 border-2 border-white bg-transparent rounded-lg' 
            placeholder='room code' />
            
            <button
            className="m-4 p-2 border-2 border-white rounded-lg"
            onClick={() => addInterval()}
            >Add interval</button>
        </form>
    )
}

export default Form