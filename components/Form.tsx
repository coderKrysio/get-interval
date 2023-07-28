import { useEffect, useState } from 'react'
import ListIntervals from './ListIntervals'
import { intervals, timeIntervals } from '@/lib/utils'

const Form = ({ setFormData }: any) => {
    const [intLength, setIntLength] = useState<number>(intervals.length)

    const addInterval = () => {
        intervals.push(timeIntervals)
        setIntLength(intervals.length)
        handleChange('intervals', intervals)
    }

    const removeInterval = () => {
        intervals.pop()
        setIntLength(intervals.length)
        handleChange('intervals', intervals)
    }

    const handleChange = (name: string, value: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    const renderForm = () => {
        return (
            <form
                className="w-[350px] min-h-[350px] text-xl flex flex-col justify-start items-center max-[500px]:w-[300px]"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <label htmlFor="my-name" className="text-left w-full">
                    Name
                </label>

                <input
                    name="name"
                    id="my-name"
                    type="text"
                    className="placeholder:text-slate-300 w-full p-2 mb-6 border-2 border-white bg-transparent rounded-lg focus:outline focus:outline-2 focus:outline-[#48d399] focus:border-[#48d399]"
                    placeholder="name"
                    onChange={(e: any) =>
                        handleChange(e.target.name, e.target.value)
                    }
                />

                <ListIntervals
                    addInterval={addInterval}
                    removeInterval={removeInterval}
                    setFormData={setFormData}
                />
            </form>
        )
    }

    useEffect(() => {
        renderForm()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [intLength])

    return renderForm()
}

export default Form
