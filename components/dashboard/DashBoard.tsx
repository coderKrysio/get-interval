'use client'
import Image from "next/image"
import { Navbar } from "./Navbar"
import { ToGetRoomCode } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useAuth, useUser } from "@clerk/nextjs"
import { PreviousResults } from "./PreviousResults"

export const Dashboard = () => {
    const router = useRouter()
    const roomCode = ToGetRoomCode()
    const { user } = useUser();
    
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
            <Navbar />

            <div
            className="w-screen h-screen p-[70px] pb-[20px] flex flex-col overflow-hidden"
            >
                <div className="flex justify-between items-center my-[30px] ">
                    <p
                    className="text-3xl font-[500] tracking-wider"
                    >Hey, {user?.firstName}</p>

                    <button
                        className="w-fit text-[#48d399] text-2xl font-medium px-7 py-2 flex items-center gap-3 rounded-lg border-[3px] border-[#48d399] outline outline-2 outline-transparent hover:outline-[#48d399]"
                        onClick={() => router.replace(`/${roomCode}`)}
                    >
                        Generate form link
                        <Image
                            width="20"
                            height="20"
                            src="https://img.icons8.com/48d399/external-tanah-basah-basic-outline-tanah-basah/96/external-share-arrows-pack-tanah-basah-basic-outline-tanah-basah.png"
                            alt="share"
                        />
                    </button>
                </div>

                <div className="w-full flex flex-col justify-center items-center overflow-auto">
                    <p className="text-2xl w-full border-b-2 border-slate-500 pb-[15px]"
                    >Previous Forms</p>

                    <div className="w-full flex flex-wrap justify-center items-center p-7 mt-[20px] gap-[80px] overflow-y-scroll">
                        <PreviousResults />
                        <PreviousResults />
                        <PreviousResults />
                        <PreviousResults />
                        <PreviousResults />
                        <PreviousResults />
                    </div>
                </div>
            </div>
        </div>
    )
}