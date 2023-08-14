import { SetUser } from '@/lib/types';
import clientPromise from '@/utils/newdb';
import { auth } from '@clerk/nextjs';
import { Db, MongoClient } from 'mongodb';
import * as z from 'zod';

export async function POST(request: Request) {
    const userId = auth();

    if (!userId) {
        return new Response('Unauthenticated!', { status: 403 });
    }

    const user: SetUser = await request.json();
    try {
        const client: MongoClient = await clientPromise;
        const db: Db = client.db('get_interval');

        await db.collection('rooms').insertOne({ user });

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response('Failed to create a new room, try again later!', {
            status: 500,
        });
    }
}
