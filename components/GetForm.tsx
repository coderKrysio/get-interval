import { useRouter } from 'next/navigation'
import Form from './Form'
import Navbar from './Navbar'
interface RoomCode {
    roomCode: string
}

const GetForm = ({ roomCode }: RoomCode) => {
    const router = useRouter()
    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center text-white py-[70px]">
            <Navbar />

            <div className="relative w-fit border-2 border-white ml-6 p-8 rounded-2xl flex justify-start items-start bg-[#16161a]">
                <div>
                    <p className="text-2xl text-[#d4d4d4] mb-[20px]">Room Code: {roomCode}</p>

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

                    <button className="py-2 px-5 border-[3px] border-white rounded-lg text-xl font-medium hover:font-semibold hover:border-[#48d399] hover:text-[#48d399]"
                    onClick={() => router.push(`/${roomCode}/result`)}
                    >
                        Result
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetForm
