'use client'
import { Dashboard } from "@/components/dashboard/DashBoard";
import { useAuth } from "@clerk/nextjs";

export default function Page({}) {
    const { userId } = useAuth()

    return (
        <Dashboard />
    )
}