import clientPromise from "@/utils/newdb";
import z from "zod";


type RoomCodeRouteContext =  {
  params: {
    roomcode: string,
  }
}

export async function GET(request:Request,  context: RoomCodeRouteContext){
    try {
      const client = await clientPromise;
      const db = client.db("get_interval");
      
      const rooms = await db.collection("rooms").find({roomcode:context.params.roomcode}).limit(10).toArray();
      
      console.log(rooms);
      
      //to get all the intervals in a single array
      let intervals:any[] = [[]];
      let counter = 0;
      for(let i=0;i<rooms.length;i++){
        var room=rooms[i].timeRanges;
        for(let j=0;j<room.length;j++){
          intervals[counter] = room[j];
          counter++;
        }
      }

      //to sort the array 
        for (let i = 0; i < intervals.length-1; i++) {
            for (let j = 0; j < intervals.length-1-i; j++) {
                if(intervals[j][0]>intervals[j+1][0]){
                    let t=intervals[j];
                    intervals[j]=intervals[j+1];
                    intervals[j+1]=t;
                }
            }
        }

        //to merge the intervals
        let finalintervals : any[];
        finalintervals = [[intervals[0][0], intervals[0][1]]]
        for(let i=0;i<intervals.length;i++){
          if(finalintervals[finalintervals.length -1][1]>=intervals[i][0]){
            finalintervals[finalintervals.length-1][1]= Math.max(finalintervals[finalintervals.length-1][1],intervals[i][1]);
          }
          else{
            finalintervals.push(intervals[i]);
          }
        }

      // console.log(finalintervals);

      //to get the free intervals
      let result : any[];
      result = [[0, finalintervals[0][0]]];
      for(let i=1;i<finalintervals.length;i++){
        result[i]=[finalintervals[i-1][1]+1,finalintervals[i][0]+1];
      }
      result[result.length]=[finalintervals[finalintervals.length-1][1]+1, 1440];
      // console.log(result);

      return new Response(JSON.stringify(result), {status:200});
    } catch (error) {
        return new Response("Failed to fetch the data, Try again later!!", {status:500});
    }
}