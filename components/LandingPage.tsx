export const LandingPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center text-white bg-[url(https://res.cloudinary.com/db7nrltsv/image/upload/v1690070858/Untitled_design_4_iyvlcc.png)] bg-center bg-cover bg-no-repeat">
            <div className="w-screen h-screen flex flex-col justify-center items-center bg-black/75 z-[2]">
                <h1 className="text-6xl text-[#48d399] font-semibold">
                    Get Intervals
                </h1>

                <p className="text-xl text-center">
                    Unite Your Free Time: Find Common Slots Together!
                </p>

                <button
                    className="text-[#48d399] text-2xl font-medium tracking-wider px-7 py-2 m-6 flex items-center gap-3 rounded-lg border-[3px] border-[#48d399] outline outline-2 outline-transparent hover:outline-[#48d399] hover:font-semibold"
                    // onClick={() => router.push(roomCode)}
                >
                    Sign In / Up
                </button>

                <p
                className="mt-[10px] tracking-wider text-center "
                >* Passwordless Sign In / Up Options</p>
            </div>
        </div>
    )
}