'use client'
import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

export const Navbar = () => {
    const [openOptions, setOpenOptions] = useState<boolean>(false);
    return (
        <div className="fixed top-0 left-0 w-full h-[60px] bg-[#16161a] flex justify-between items-center gap-4 p-4 z-[10]">
            <div className="flex justify-start items-center gap-4">
                <Image
                    width={30}
                    height={30}
                    src={
                        'https://img.icons8.com/ios-filled/100/48D399/session-timeout.png'
                    }
                    alt="session-timeout"
                />

                <Link href={'/'} className="text-3xl font-semibold text-[#48d399]">
                    Get Intervals
                </Link>
            </div>

            <button
            className=""
            onClick={() => setOpenOptions((prev: boolean) => !prev)}
            >
                <Image
                src={'/menu.png'}
                alt="menu"
                width={15}
                height={15}
                />
            </button>

            {openOptions && <div
            className="absolute top-[65px] right-0 p-2 mr-4 rounded-lg bg-[#16161a] w-fit h-fit flex flex-col justify-center items-center"
            >
                <SignOutButton>
                    <button 
                    className="w-full p-3 text-xl font-medium hover:font-semibold tracking-wider border-b-2 border-slate-500"
                    >Sign Out</button>
                </SignOutButton>

                <button
                className="p-3 text-xl text-[#db696d] font-medium hover:font-semibold tracking-wider"
                >Delete Account</button>
            </div>}
        </div>
    )
}