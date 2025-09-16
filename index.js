import express from "express";
import dotenv from "dotenv";
import path from "path";
import apiController from "./controller/controller.js";
import cors from "cors";
import job from "./controller/cron.js";


//To use these variables edit the .env files
//with appropriate API_KEY and API_URL to fecth weather data
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

if (process.env.NODE_ENV === "production") job.start();

//Middleware
app.use(express.json());
app.use(express.static('./public'));
app.use(cors());

//Routes
app.get("/", (req, res)=>{
    console.log("User hit");
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'));
    res.end();
});

app.get("/api/city", apiController);

//Error Handling


//Server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});


