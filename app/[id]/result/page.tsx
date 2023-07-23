'use client'

import Results from '@/components/Results'
import { ValidateURL } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter()
    if (ValidateURL(params.id)) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#000] overflow-x-hidden">
                <Results />
            </div>
        )
    } else {
        return router.push('/not-found')
    }
}
