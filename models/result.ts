import mongoose, {Schema, model, models} from "mongoose";

const ResultSchema = new Schema({
    roomcode:{
        type:String,
        required:true
    },
    result:[
        {
            type:[
                {
                    type:Number,
                    required:true
                }
            ],
            required:true
        }
    ]
});

const Result=models.Room || model('Result', ResultSchema);
export default Result;