import mongoose from 'mongoose';

let isConnected=false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("MongoDB is already connected!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"get_interval",
        });
        isConnected=true;
        console.log("Connection Successful!");
    } catch (error) {
        console.log(error);
    }   
}