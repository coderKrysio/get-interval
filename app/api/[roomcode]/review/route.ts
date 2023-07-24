import clientPromise from "@/utils/newdb";


type RoomCodeRouteContext =  {
  params: {
    roomcode: string,
  }
}

export async function GET(request:Request,  context: RoomCodeRouteContext){
    try {
      const client = await clientPromise;
      const db = client.db("get_interval");

      const rooms = await db.collection("rooms").find({roomcode:context.params.roomcode}).limit(15).toArray();
      console.log(rooms);
        
      return new Response(JSON.stringify(rooms), {status:200});
    } catch(error){
        console.log(error);
        return new Response("Failed to get your data, try again later!", {status:200});
    }
}      