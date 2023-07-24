import Room from "@/models/room";
import clientPromise from "@/utils/newdb";

export async function POST(request: Request) {
    const {username, roomcode, timeRanges} = await request.json();
    try {
      //await connectToDB()
      const client = await clientPromise;
      const db = client.db("get_interval");
      
      const newRoom = new Room({
        username:username,
        roomcode:roomcode,
        timeRanges:timeRanges
      });

      await db.collection("rooms").insertOne({"username":username, "roomcode":roomcode, "timeRanges":timeRanges});
      console.log("New Room Created!");
      return new Response ("Success!", {status:200}); 
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new room, try again later!", {status:500});
    }
}
