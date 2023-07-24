import clientPromise from "@/utils/newdb";

type RoomCodeRouteContext = {
    params:{
        roomcode:string
    }
}

export async function DELETE(request:Request, context:RoomCodeRouteContext){
   try {
    const client = await clientPromise;
    const db = client.db("get_interval");
      
    const rooms = await db.collection("rooms").find({roomcode:context.params.roomcode}).limit(10).toArray();

    for(let i=0;i<rooms.length;i++){
        db.collection("rooms").findOneAndDelete({_id:rooms[i]._id});
    }
    return new Response ("Deleted Successfully!!", {status:200});
   } catch (error) {
    console.log(error);
    return new Response("Failed to delete, Try again later!!", {status:500});    
   }
}