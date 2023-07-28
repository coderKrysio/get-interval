import mongoose, { Schema, model, models } from 'mongoose'

const RoomSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    roomcode: {
        type: String,
        required: true,
    },
    timeRanges: [
        {
            type: [
                {
                    type: Number,
                    required: true,
                },
            ],
            required: true,
        },
    ],
})

const Room = models.Room || model('Room', RoomSchema)
export default Room
