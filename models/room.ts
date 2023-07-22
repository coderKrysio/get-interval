import mongoose, {Schema, model, models} from "mongoose";

var SchemaTypes = mongoose.Schema.Types;
const RoomSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    roomcode:{
        type:String,
        required:true
    },
    timeRanges:[
        {
            type:[
                {
                    type:SchemaTypes.Decimal128,
                    required:true
                }
            ],
            required:true
        }
    ]
});

const Room=models.Room || model('Room', RoomSchema);
export default Room;