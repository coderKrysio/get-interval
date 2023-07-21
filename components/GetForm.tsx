import Image from "next/image"
import Form from "./Form"
import { Dekko } from 'next/font/google'

const dekko = Dekko({
    subsets: ['latin'],
    weight: "400"
})

const GetForm = () => {
    return (
        <div className={`w-screen h-screen flex flex-col justify-center items-center ${dekko.className}`}>
            <div className='fixed top-0 left-0 flex justify-center items-center gap-4 m-4'>
                <Image 
                width={30} 
                height={30} 
                src={"https://img.icons8.com/ios-filled/100/48D399/session-timeout.png"}
                alt="session-timeout"/>

                <h3
                className='text-3xl font-semibold text-[#48d399]'
                >Get Intervals</h3>
            </div>
            
            <Form />
        </div>
    )
}

export default GetForm