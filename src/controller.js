import dotenv from 'dotenv';

dotenv.config();


const apiController = async (req, res) => {
    if (!req.query || !req.query.city){
        res.status(404).send("<h1>Bad Request, enter a proper city</h1>");
    }
    else if(req.query.city){
        let city = req.query.city;
        let query = `?q=${city}&APPID=${process.env.API_KEY}`
        let response = await getData(process.env.API_URL, query);
        res.status(200).send(response);
    }
    else{
        res.status(404).send("<h1>Bad Request, enter a proper city</h1>");
    }
    res.end();
}


//Handle API CALL and return proper data
const getData = async (URL, query)=>{
    const data = await fetch(`${URL + query}`);
    const response = await data.json();
    console.log("API_Responded......");
    return response;
}

export default apiController