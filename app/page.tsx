'use client'
import {LandingPage} from '@/components/LandingPage'
import { auth, useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Home() {
    const { isLoaded, userId } = useAuth();
    const { isSignedIn } = useUser();  
    const router = useRouter();
    
    if(!isLoaded || !userId || !isSignedIn) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center bg-[#000] overflow-x-hidden">
                <LandingPage />
            </main>
        )
    }

    return router.push(`/dashboard/${userId.substring(5)}`)
}