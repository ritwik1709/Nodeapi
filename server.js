import { app } from "./app.js";
import { connectDb } from "./data/database.js";

connectDb;

app.listen(process.env.port, () => {
    console.log(`server listening at port ${process.env.port} in ${process.env.node_env} mode`)
})