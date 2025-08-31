This simple application displays weather data based on the city provided.
Technologies used to make this application.

+ Front-end: HTML, CSS, Javascript.
+ Back-end: Node.js, Express. 
<br/>
How this application works:
The Frontend takes in user input via a textbox. The input is validated, then a GET request is made to the backend to fetch the data. This is not done directly to Open Weather. The backend uses Open Weather's api to request weather data for the city provided by the frontend.
<br/> Front-end --> Back-end --> Open-Weather-API --> Back-end --> Front-end 
<br/>This is to ensure security and not release any environmental variables.


For more information: visit https://openweathermap.org/

#Deployment..
+ project is deployed on https://weather-application-tw6a.onrender.com/
