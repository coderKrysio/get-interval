import { v4 as uuidv4 } from 'uuid'

export const svgSrc: string =
    'https://lottie.host/?file=bb4ff104-0736-4bec-b1f9-ffd889aef6e1/QFgg5zIw0w.json'

export const timeIntervals = [480, 600]

export const intervals: number[][] = [timeIntervals]

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
    const regexExp: RegExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}$/gi
    return regexExp.test(uuidUrl)
}

export function GetRoomCode() {
    return uuidv4().substring(0, 13)
}

export const timeline: number[] = []
for (let x = 0; x < 24 * 60; x++) {
    timeline[x] = x
}

export const conditionMet = (time: number, timeRanges: number[][]) => {
    for (let x = 0; x < timeRanges.length; x++) {
        let range = timeRanges[x]
        if (time >= range[0] && time <= range[1]) return true
    }
    return false
}
