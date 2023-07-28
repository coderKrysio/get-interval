import { SetUser } from '@/lib/types'
import clientPromise from '@/utils/newdb'

export async function POST(request: Request) {
    const { username, roomcode, timeRanges }: SetUser = await request.json()
    try {
        const client = await clientPromise
        const db = client.db('get_interval')

        await db
            .collection('rooms')
            .insertOne({
                username: username,
                roomcode: roomcode,
                timeRanges: timeRanges,
            })

        return new Response(JSON.stringify(roomcode), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response('Failed to create a new room, try again later!', {
            status: 500,
        })
    }
}
