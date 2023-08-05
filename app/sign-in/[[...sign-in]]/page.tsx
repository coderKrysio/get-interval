import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div
        className="w-screen h-screen flex justify-center items-center"
        >
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-in" redirectUrl="/" />
        </div>
    );
}