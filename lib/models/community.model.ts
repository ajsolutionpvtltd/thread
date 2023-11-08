import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
    id : { type : String , required : true },
    name : { type : String , required : true },
    username : { type : String , required : true , unique : true },
    image : String , 
    bio : String,
    threads : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Thread"
        }
    ],
    members : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ]
})

 const  Community : any = mongoose.models.Community || mongoose.model("Community",communitySchema)

 export default Community;