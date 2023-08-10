'use client'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-[#16161a] flex justify-start items-center gap-4 p-4 z-[10]">
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
    )
}