import {v4 as uuidv4} from 'uuid';

export const svgSrc: string = "https://lottie.host/?file=bb4ff104-0736-4bec-b1f9-ffd889aef6e1/QFgg5zIw0w.json";

export const timeIntervals = [480, 600]

export const intervals: number[][] = [timeIntervals]

export const membersData = [
    {
        id: 0,
        roomCode: 'ahd-kjha-hjah',
        name: 'Anushree',
        intervals: [
            [0, 839],
            [901, 1079],
            [1381, 1439],
        ],
    },
    {
        id: 1,
        roomCode: 'ahd-kjha-hjah',
        name: 'Ishank',
        intervals: [
            [0, 659],
            [901, 1259],
        ],
    },
    {
        id: 2,
        roomCode: 'ahd-kjha-hjah',
        name: 'Shubh',
        intervals: [
            [0, 540],
            [750, 839],
        ],
    },
    {
        id: 0,
        roomCode: 'ahd-kjha-hjah',
        name: 'Anushree',
        intervals: [
            [0, 839],
            [901, 1079],
            [1381, 1439],
        ],
    },
    {
        id: 1,
        roomCode: 'ahd-kjha-hjah',
        name: 'Ishank',
        intervals: [
            [0, 659],
            [901, 1259],
        ],
    },
    {
        id: 2,
        roomCode: 'ahd-kjha-hjah',
        name: 'Shubh',
        intervals: [
            [0, 540],
            [750, 839],
        ],
    },
]

export function NumToTime(num: number) {
    var hours = Math.floor(num / 60).toString()
    var minutes: string = (num % 60).toString()
    if (hours.length < 2) {
        hours = '0' + hours
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes
    }
    return hours + ':' + minutes
}

export function ValidateURL(uuidUrl: string) {
    const regexExp: RegExp =
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}$/gi
    return regexExp.test(uuidUrl)
}

export function GetRoomCode() {
    return uuidv4().substring(0, 13)
}