import Image from "next/image"
import { Navbar } from "./Navbar"

export const Dashboard = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center text-white">
            <Navbar />

            <div
            className="w-screen h-screen p-[70px] flex flex-col"
            >
                <button
                    className="w-fit text-[#48d399] text-2xl font-medium px-7 py-2 my-[40px] flex items-center gap-3 rounded-lg border-[3px] border-[#48d399] outline outline-2 outline-transparent hover:outline-[#48d399]"
                    // onClick={() => router.push(roomCode)}
                >
                    Generate form link
                    <Image
                        width="20"
                        height="20"
                        src="https://img.icons8.com/48d399/external-tanah-basah-basic-outline-tanah-basah/96/external-share-arrows-pack-tanah-basah-basic-outline-tanah-basah.png"
                        alt="share"
                    />
                </button>

                <div className="w-full">
                    <p className="text-2xl w-full border-b-2 border-white pb-[15px]"
                    >Previous Forms</p>
                </div>
            </div>
        </div>
    )
}