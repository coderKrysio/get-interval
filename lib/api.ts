import { FormData } from './types'

export const API = {
    postData: async (formData: FormData) => {
        try {
            const res = await fetch('/api/new-room', {
                method: 'POST',
                body: JSON.stringify({
                    username: formData.name,
                    roomcode: formData.roomCode,
                    timeRanges: formData.intervals,
                }),
            })

            return res.json()
        } catch (err: any) {
            console.log(err)
        }
    },

    getInterval: async (roomCode: string) => {
        try {
            const res = await fetch(`/api/${roomCode}`, {
                method: 'GET',
            })

            return res.json()
        } catch (err: any) {
            console.log(err)
        }
    },

    getUsers: async (roomCode: string) => {
        try {
            const res = await fetch(`/api/${roomCode}/review`, {
                method: 'GET',
            })

            return res.json()
        } catch (err: any) {
            console.log(err)
        }
    },

    deleteRoom: async (roomCode: string) => {
        try {
            const res = await fetch(`/api/${roomCode}/delete`, {
                method: 'DELETE',
            })

            return res.json()
        } catch (err: any) {
            console.log(err)
        }
    },
}
