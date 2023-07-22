export const timeIntervals = [480, 600]

export const intervals: number[][] = [timeIntervals]

export const membersData = [
    {
        id: 0,
        roomCode: 'ahd-kjha-hjah',
        name: 'Anushree',
        intervals: [
            [0 , 839],
            [901, 1079],
            [1381, 1439]
        ]
    },
    {
        id: 1,
        roomCode: 'ahd-kjha-hjah',
        name: 'Ishank',
        intervals: [
            [0 , 659],
            [901, 1259],
        ]
    },
    {
        id: 2,
        roomCode: 'ahd-kjha-hjah',
        name: 'Shubh',
        intervals: [
            [0 , 540],
            [750, 839],
        ]
    },
]

export default function NumToTime(num: number) { 
    var hours = Math.floor(num / 60).toString();  
    var minutes: string = (num % 60).toString();
    if(hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes; 
    }
    return hours + ":" + minutes;
}