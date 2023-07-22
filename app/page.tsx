'use client'
import GetForm from '@/components/GetForm'
import LandingPage from '@/components/LandingPage'
import Results from '@/components/Results'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#000]">
            <Results />
        </main>
    )
}
