'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-[15px] bg-[#16161a] text-white overflow-x-hidden">
            <h2 className="text-5xl font-semibold tracking-wider text-[#db696d]">
                Not Found
            </h2>

            <p className="text-2xl text-center tracking-wide">
                Entered room code must have expired or it does not exist. <br />
                Generate a new link from home page
            </p>

            <button
                className="text-2xl text-[#48d399] font-medium tracking-wide px-5 py-2 m-4 border-2 border-[#48d399] rounded-lg outline outline-4 outline-transparent hover:outline-[#48d399] hover:font-semibold"
                onClick={() => router.push('/')}
            >
                Back to home page
            </button>
        </div>
    )
}
