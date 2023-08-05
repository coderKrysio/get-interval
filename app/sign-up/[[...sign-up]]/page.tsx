import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div
        className="w-screen h-screen flex justify-center items-center"
        >
            <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/"  />
        </div>
    );
}