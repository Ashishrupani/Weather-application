import express from "express";
import dotenv from "dotenv";
import path from "path";


//To use these variables edit the .env files
//with appropriate API_KEY and API_URL to fecth weather data
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.static('./public'));

//Routes
app.get("/", (req, res)=>{
    console.log("User hit");
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'));
});

app.get("/api/city", async (req, res)=>{
    console.log(req.query);
    if (!req.query || !req.query.city){
        res.status(404).send("<h1>Bad Request, enter a proper city</h1>");
    }
    else if(req.query.city){
        let city = req.query.city;
        let query = `?q=${city}&APPID=${process.env.API_KEY}`
        const data = await fetch(`${process.env.API_URL + query}`);
        const response = await data.json();
        console.log("API_Responded......");
        res.status(200).send(response);
    }
    else{
        res.status(404).send("<h1>Bad Request, enter a proper city</h1>");
    }
});

//Error Handling


//Server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});


