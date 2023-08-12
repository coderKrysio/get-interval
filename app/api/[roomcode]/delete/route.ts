import { RoomCodeRouteContext } from '@/lib/types';
import clientPromise from '@/utils/newdb';
import { auth } from '@clerk/nextjs';

export async function DELETE(_request: Request, context: RoomCodeRouteContext) {
    try {
        const userId = auth();

        if (!userId) {
            return new Response('Unauthenticated!', { status: 403 });
        }

        const client = await clientPromise;
        const db = client.db('get_interval');

        db.collection('rooms').deleteMany({
            roomcode: context.params.roomcode,
        });

        return new Response(JSON.stringify(''), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response('Failed to delete, Try again later!!', {
            status: 500,
        });
    }
}
