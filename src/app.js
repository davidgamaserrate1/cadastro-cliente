import express from "express"
import db from "./config/dbConnect.js"
import clients from "./models/Client.js"
import router from "./routes/clientesRoutes.js"
import routes from "./routes/index.js"

db.on("error",console.log.bind(console,'Conection Error X.X'))
db.once("open", ()=>{
    console.log("Database connected!")
})

const app = express();
app.use(express.json())
routes(app)

export default app;