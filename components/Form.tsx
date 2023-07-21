import { useEffect, useState } from "react"
import ListIntervals from "./ListIntervals"
import { intervals, timeIntervals } from "@/lib/utils"
import Image from "next/image"

const Form = () => {
    const [intLength, setIntLength] = useState<number>(intervals.length)

    const addInterval = () => {
        intervals.push(timeIntervals[0])
        setIntLength(intervals.length)
    }

    const renderForm = () => {
        return (
            <form
            className='w-[350px] border-2 border-white text-white text-xl p-4 flex flex-col justify-center items-center bg-[#16161a] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
            onSubmit={(e) => {
                e.preventDefault()
            }}
            >
                <label htmlFor="my-name" className='text-left w-full'>Name</label>
                <input 
                name="name" 
                id="my-name" 
                type="text" 
                className='placeholder:text-slate-300 w-full mb-4 p-2 border-2 border-white bg-transparent rounded-lg focus:outline focus:outline-2 focus:outline-[#48d399] focus:border-[#48d399]' 
                placeholder='name' />

                <ListIntervals />

                <button
                className="w-[50px] h-[50px] rounded-[25px]"
                onClick={() => addInterval()}
                >
                    <Image width="60" height="60" src="https://img.icons8.com/doodle/96/add.png" alt="add" />
                </button>

                <button
                className="m-4 py-2 px-5 border-2 border-white rounded-lg font-medium hover:bg-white hover:font-semibold hover:text-[#16161a]"
                >Submit</button>
            </form>
        )
    }

    useEffect(() => {
        renderForm()
    }, [intLength])

    return( renderForm() );
}

export default Form