import { SignIn, auth, } from "@clerk/nextjs";

export default function Page() {
    const { userId } = auth();
    console.log(userId, "this is the id")
    return (
        <div
        className="w-screen h-screen flex justify-center items-center bg-black"
        >
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" redirectUrl="/"
            appearance={
                {
                    variables: {
                        colorPrimary: "#48d399",
                        colorBackground: "#16161a",
                        colorText: '#fff',
                        colorAlphaShade: '#fff',
                        fontSize: '24px'
                    }
                }
            } 
            />
        </div>
    );
}