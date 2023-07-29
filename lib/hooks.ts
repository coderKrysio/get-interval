import { useState, useRef, useEffect, SetStateAction, Dispatch } from 'react'
import { API } from './api'
import { FormData, MemberData, RoomCode, SetFormData } from './types'
import { intervals, timeIntervals } from './utils'
import { useRouter } from 'next/navigation'

export const GetResult = (roomCode: string) => {
    const [result, setResult] = useState<number[][]>([])
    const [membersData, setMembersData] = useState<MemberData[]>([])
    const [time, setTime] = useState<number>(7200000)

    const intervalRef = useRef<ReturnType<typeof setInterval>>()
    const decreaseNum = () => setTime((prev) => prev - 1)

    useEffect(() => {
        API.getInterval(roomCode).then((res: any) => {
            setResult(res)
        })
        API.getUsers(roomCode).then((res: any) => {
            setMembersData(res)
        })

        intervalRef.current = setInterval(decreaseNum, 1000)
        return () => clearInterval(intervalRef.current)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { result, membersData, time }
}

export const WriteForm = ({ setFormData }: SetFormData) => {
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

    return { intLength, addInterval, removeInterval, handleChange }
}

export const SetForm = (roomCode: string) => {
    const router = useRouter()
    const [showError, setShowError] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormData>({
        name: '',
        roomCode: roomCode,
        intervals: [timeIntervals],
    })

    const checkFields = () => {
        if (formData.name === '') setShowError(true)
        else {
            setShowError(false)
            API.postData(formData)
            router.push(`/${roomCode}/result`)
        }
    }

    return { showError, setFormData, checkFields }
}

export const SetIntervals = ({ setFormData }: SetFormData) => {
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [arrIndex, setArrIndex] = useState<number>(0)

    const [timeRange, setTimeRange] = useState({
        start: 480,
        end: 600,
    })

    const updatedRange = (e: any, index: number) => {
        const { name, value } = e.target
        var array = value.split(':')
        var minutes = parseInt(array[0], 10) * 60 + parseInt(array[1], 10)
        setArrIndex(index)
        setTimeRange((prev: any) => ({
            ...prev,
            [name]: minutes,
        }))
    }

    useEffect(() => {
        if (timeRange.end <= timeRange.start)
            setErrorMsg('Invalid time intervals: End time > Start time.')
        else {
            setErrorMsg('')
            intervals[arrIndex] = [timeRange.start, timeRange.end]
            setFormData((prev: any) => ({
                ...prev,
                intervals: intervals,
            }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRange])

    return { errorMsg, updatedRange }
}
