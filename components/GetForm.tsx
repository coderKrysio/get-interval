import Navbar from './Navbar'
import { svgSrc } from '@/lib/utils'
import Link from 'next/link'
import { RoomCode } from '@/lib/types'
import Form from './Form'
import { SetForm } from '@/lib/hooks'
import { API } from '@/lib/api'
import { useRouter } from 'next/navigation'

const GetForm = ({ roomCode }: RoomCode) => {
    const router = useRouter()
    const { showError, setFormData, formData, setShowError } = SetForm(roomCode)

    const checkFields = () => {
        if (formData.name === '') setShowError(true)
        else {
            setShowError(false)
            API.postData(formData)
            router.push(`/${roomCode}/result`)
        }
    }

    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center text-white pb-[70px] pt-[90px]">
            <Navbar />

            <div className="relative w-fit border-2 border-white ml-6 p-8 rounded-2xl flex justify-start items-start bg-[#16161a] max-[985px]:flex-col max-[500px]:p-4 max-[500px]:ml-0 max-[500px]:py-8">
                <div>
                    <p className="text-2xl text-[#d4d4d4] mb-[20px]">
                        Room Code: {roomCode}
                    </p>

                    <Form {...{ setFormData }} />
                </div>

                <div className="mt-[20px] ml-[20px] max-[985px]:hidden">
                    <iframe
                        className="border-none w-[450px] h-[275px] z-[-1]"
                        src={svgSrc}
                    ></iframe>
                </div>

                <div className="absolute bottom-0 right-0 m-8 mb-[42px] flex gap-6 max-[985px]:relative max-[985px]:my-0 max-[985px]:mx-auto max-[500px]:mt-[20px]">
                    <button
                        className="py-2 px-5 border-[3px] border-white rounded-lg text-xl font-medium hover:font-semibold hover:border-[#48d399] hover:text-[#48d399]"
                        onClick={() => checkFields()}
                    >
                        Submit
                    </button>

                    <Link
                        className="py-2 px-5 border-[3px] border-white rounded-lg text-xl font-medium hover:font-semibold hover:border-[#48d399] hover:text-[#48d399]"
                        href={`/${roomCode}/result`}
                    >
                        Result
                    </Link>

                    {showError && (
                        <p className="text-xl text-[#db696d] font-semibold tracking-wide w-max absolute -bottom-[35px] left-1/2 -translate-x-1/2">
                            Name field is empty !
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GetForm
