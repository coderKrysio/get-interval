import { Dispatch, SetStateAction } from 'react'

export interface SetUser {
    username: string
    roomcode: string
    timeRanges: number[][]
}

export type RoomCodeRouteContext = {
    params: {
        roomcode: string
    }
}

export interface RoomCode {
    roomCode: string
}

export interface FormData {
    name: string
    roomCode: string
    intervals: number[][]
}

export interface Info {
    name: string
    intervals: number[][]
}

export interface MemberData {
    id: number
    roomcode: string
    username: string
    timeRanges: number[][]
}

export interface SetFormData {
    setFormData: Dispatch<SetStateAction<FormData>>
}

export type TimeRange = {
    timeRanges: number[][]
}
