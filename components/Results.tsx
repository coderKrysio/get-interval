import Image from "next/image"
import Timeline from "./Timeline"

const Results = () => {
    const roomCode = 'ahd-kjha-hjah'

    return (
        <div
        className='w-screen h-screen flex flex-col justify-center items-center text-white'
        >
            <div className="fixed top-0 left-0 flex justify-center items-center gap-4 m-4">
                <Image
                    width={30}
                    height={30}
                    src={
                        'https://img.icons8.com/ios-filled/100/48D399/session-timeout.png'
                    }
                    alt="session-timeout"
                />

                <h3 className="text-3xl font-semibold text-[#48d399]">
                    Get Intervals
                </h3>
            </div>

            <h2
            className="text-5xl font-semibold tracking-wide"
            >Union Free Interval</h2>

            <p
            className="text-2xl font-medium tracking-wide my-3 text-[#48d399]"
            >Room Code: {roomCode}</p>

            <p
            className="text-3xl my-2"
            >14:00 - 15:00 <br /> 18:00 - 23:00</p>

            <Timeline />
        </div>
    )
}

export default Results