

let button = document.querySelector('.search-button').addEventListener('click', () => {
    let input = document.querySelector('.search-city-input');
    let city = input.value;
    if(city){   
        grabData(city);
    }
    else{
        console.log(`Error, city name not valid`);
    }
    input.value = "";
})

async function grabData(city) {
    if(!city || typeof(city) != 'string'){
        //enter a city or city needs to be a string
        console.log("city not valid");
    }
    else if(city && typeof(city) == 'string'){
        let data = await fetch(`/api/city?city=${city}`);
        let response = await data.json();
        console.log("Back-End Responded");
        renderData(response);
    }
    else{
        console.log("Error, bad request");
    }
}


function renderData(data){

    const {name, main, weather} = data

    const cityDisplay = document.querySelector('.city');
    const temperatureDisplay = document.querySelector('.temp');
    const humidityDisplay = document.querySelector('.humidity');
    const weatherDisplay = document.querySelector('.weather');
    const img_display = document.querySelector('.image');

    cityDisplay.innerText = name;
    temperatureDisplay.innerHTML = Math.round(Number(main.temp) - 273.15) + `<span>&deg; C</span>`;
    humidityDisplay.innerText = "Humidity : " +main.humidity + "%";
    weatherDisplay.innerText = weather[0].main;
    img_display.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
}
