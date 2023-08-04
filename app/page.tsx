'use client'
import {LandingPage} from '@/components/LandingPage'
import { Dashboard } from '@/components/dashboard/DashBoard'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#000] overflow-x-hidden">
            <Dashboard />
        </main>
    )
}
