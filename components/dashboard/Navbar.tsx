export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-[#16161a] flex justify-between items-center gap-4 p-4 z-[10]">
            <p className="text-2xl font-medium tracking-wide">Hey, coderKrysio</p>

            <button
            className="text-xl font-normal tracking-wide px-6 py-1 rounded-lg border-2 border-white outline outline-2 outline-transparent hover:font-medium hover:outline-black"
            >Log Out</button>
        </div>
    )
}