

//Handle API CALL and return proper data
const api_controller = async (URL, query)=>{
    const data = await fetch(`${URL + query}`);
    const response = await data.json();
    console.log("API_Responded......");
    return response;
}

export default api_controller