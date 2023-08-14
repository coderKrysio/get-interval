import { RoomCodeRouteContext } from '@/lib/types';
import clientPromise from '@/utils/newdb';
import { auth } from '@clerk/nextjs';

export async function GET(_request: Request, context: RoomCodeRouteContext) {
    try {
        const userId = auth();

        if (!userId) {
            return new Response('Unauthenticated!', { status: 403 });
        }

        const client = await clientPromise;
        const db = client.db('get_interval');

        const rooms = await db
            .collection('rooms')
            .find({ roomcode: context.params.roomcode })
            .limit(15)
            .toArray();

        if (rooms.length === 0) {
            return new Response('Oops, No data!', { status: 400 });
        }

        return new Response(JSON.stringify(rooms), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response('Failed to get your data, try again later!', {
            status: 200,
        });
    }
}
