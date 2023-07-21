import { useEffect, useState } from "react"
import ListIntervals from "./ListIntervals"
import { intervals, timeIntervals } from "@/lib/utils"

const Form = () => {
    const [intLength, setIntLength] = useState<number>(intervals.length)

    const addInterval = () => {
        intervals.push(timeIntervals[0])
        setIntLength(intervals.length)
    }

    const renderForm = () => {
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

                <ListIntervals />

                <button
                className="m-4 p-2 border-2 border-white rounded-lg"
                onClick={() => addInterval()}
                >Add interval</button>
            </form>
        )
    }

    useEffect(() => {
        renderForm()
    }, [intLength])
    
    return( renderForm() );
}

export default Form