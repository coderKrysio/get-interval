import Room from "@/models/room";
import { connectToDB } from "@/utils/database";

export async function POST(request: Request) {
    const {username, roomcode, timeRanges} = await request.json();
    try {
      await connectToDB();
      
      const newRoom = new Room({
        username:username,
        roomcode:roomcode,
        timeRanges:timeRanges
      });

      await newRoom.save();
      console.log("New Room Created!");
       
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new room, try again later!", {status:500});
    }
}