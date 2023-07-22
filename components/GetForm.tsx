import Image from 'next/image'
import Form from './Form'

const GetForm = () => {
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

            <div className="relative w-fit border-2 border-white ml-6 p-8 rounded-2xl flex justify-start items-start bg-[#16161a]">
                <div>
                    <p className="text-2xl mb-[20px]">Room Code: {roomCode}</p>

                    <Form />
                </div>

                <div className="mt-[20px] ml-[20px]">
                    <iframe
                        className="border-none w-[450px] h-[275px] z-[-1]"
                        src="https://lottie.host/?file=bb4ff104-0736-4bec-b1f9-ffd889aef6e1/QFgg5zIw0w.json"
                    ></iframe>
                </div>

                <div className="absolute bottom-0 right-0 m-8 flex gap-6">
                    <button className="py-2 px-5 border-[3px] border-white rounded-lg text-xl font-medium hover:font-semibold hover:border-[#48d399] hover:text-[#48d399]">
                        Submit
                    </button>

                    <button className="py-2 px-5 border-[3px] border-white rounded-lg text-xl font-medium hover:font-semibold hover:border-[#48d399] hover:text-[#48d399]">
                        Results
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetForm
