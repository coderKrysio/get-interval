import Image from 'next/image'
import React from 'react'

const Form = () => {
    return (
        <form
        className='border-2 border-white text-white p-4 flex flex-col justify-center items-center'
        >
            <div className='flex justify-center items-center'>
                <Image 
                width={100} 
                height={100} 
                src={"https://img.icons8.com/ios-filled/100/000000/session-timeout.png"}
                alt="session-timeout"/>

                <h3
                className='text-3xl font-semibold mb-5 text-[#48d399]'
                >Get Intervals</h3>
            </div>
            

            <label htmlFor="my-name" className='text-left w-full'>Name</label>
            <input 
            name="name" 
            id="my-name" 
            type="text" 
            className='placeholder:text-white p-2 border-2 border-white bg-transparent rounded-lg mb-4' 
            placeholder='name' />

            <label htmlFor="code" className='text-left w-full'>Room Code</label>
            <input 
            name="code" 
            id="code" 
            type="text" 
            className='placeholder:text-white p-2 border-2 border-white bg-transparent rounded-lg mb-4' 
            placeholder='room code' />

            <select className='text-black border-2 border-black m-3'>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

            <select className='text-black border-2 border-black m-3'>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </form>
    )
}

export default Form