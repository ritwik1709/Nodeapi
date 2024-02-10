
import mongoose from "mongoose";

export const connectDb=mongoose.connect(process.env.mongo_uri, {
    dbName: "backendApi",
})
    .then(() => console.log("database connected successfully"))
    .catch((error) => console.log(error))
