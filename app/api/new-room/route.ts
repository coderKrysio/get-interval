import { SetUser } from '@/lib/types'
import clientPromise from '@/utils/newdb'
import { Db, MongoClient } from 'mongodb'

export async function POST(request: Request) {
    const { username, roomcode, timeRanges }: SetUser = await request.json()
    try {
        const client: MongoClient = await clientPromise
        const db: Db = client.db('get_interval')

        await db.collection('rooms').insertOne({
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
