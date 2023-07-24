'use client'

import GetForm from '@/components/GetForm'
import { ValidateURL } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter()
    const roomCode: string = params.id

    if (ValidateURL(roomCode)) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#000] overflow-x-hidden">
                <GetForm roomCode={roomCode} />
            </div>
        )
    } else {
        return router.push('/not-found')
    }
}
