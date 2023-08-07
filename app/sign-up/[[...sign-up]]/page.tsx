import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div
        className="w-screen h-screen flex justify-center items-center bg-black"
        >
            <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/"
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