import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { router } from "./Routes/router.js";
import connectToDB from "./connection";


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use("/",router);

dotenv.config();

const port = 8080;
app.listen(port,() => {
     console.log(`Server on ${port}`);
     connectToDB();
});
