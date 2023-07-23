"use client";

import GetForm from "@/components/GetForm";

export default function Page({ params }: { params: { id: string } }) {
    console.log(params.id)
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#000] overflow-x-hidden">
            <GetForm />
        </div>
    )
}