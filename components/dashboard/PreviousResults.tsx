import Image from "next/image"

export const PreviousResults = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div
            className="w-[300px] h-[175px] bg-slate-200 rounded-lg mb-[10px]"
            ></div>

            <div className="w-full flex justify-between items-center">
                <p className="w-fit text-slate-500">Date: 00/00/0000</p>
                <div className="flex justify-center items-center gap-[13px]">
                    <button>
                        <Image
                        src={'/share.png'}
                        alt="share"
                        width={13}
                        height={13}
                        />
                    </button>

                    <button>
                        <Image
                            width="20"
                            height="20"
                            src="https://img.icons8.com/color/96/delete-forever.png"
                            alt="delete"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}