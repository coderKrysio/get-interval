"use client";

import GetForm from "@/components/GetForm";
import { ValidateURL } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter()
    if(ValidateURL(params.id)) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#000] overflow-x-hidden">
                <GetForm />
            </div>
        )
    } else {
        return ( router.push('/not-found') )
    }
}