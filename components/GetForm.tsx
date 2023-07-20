import Image from "next/image"
import Form from "./Form"

const GetForm = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex justify-center items-center gap-4 mb-4'>
                <Image 
                width={40} 
                height={40} 
                src={"https://img.icons8.com/ios-filled/100/48D399/session-timeout.png"}
                alt="session-timeout"/>

                <h3
                className='text-5xl font-semibold text-[#48d399]'
                >Get Intervals</h3>
            </div>
            
            <Form />
        </div>
    )
}

export default GetForm