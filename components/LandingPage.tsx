import { Dekko } from 'next/font/google'
import Image from 'next/image'

const dekko = Dekko({
    subsets: ['latin'],
    weight: "400"
})

const LandingPage = () => {
    return (
        <div 
        className={`w-screen h-screen flex flex-col justify-center items-center text-white ${dekko.className}`}
        >
            <h1
            className='text-6xl text-[#48d399] font-semibold'
            >Get Intervals</h1>

            <p className='text-xl'
            >Unite Your Free Time: Find Common Slots Together!</p>

            <button
            className='text-[#48d399] text-2xl font-medium px-7 py-2 m-6 flex items-center gap-3 rounded-lg border-[3px] border-[#48d399] outline outline-2 outline-transparent hover:outline-[#48d399]'
            >
                Generate form link
                <Image width="20" height="20" src="https://img.icons8.com/48d399/external-tanah-basah-basic-outline-tanah-basah/96/external-share-arrows-pack-tanah-basah-basic-outline-tanah-basah.png" alt="share" />
            </button>
        </div>
    )
}

export default LandingPage