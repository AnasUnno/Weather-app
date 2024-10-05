const apiKey = "f951ff2001f6fbb60b1302e2b66958e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const cityInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
const weatherImg = document.getElementById("weather-img");
const humidityPercent = document.getElementById("humidity%");
const  windSpeed = document.getElementById("wind-speed");
const cityName = document.getElementById("city");
const  temperature = document.getElementById("temp");
const wrongCity = document.getElementById("wrong-city");
searchBtn.addEventListener('click', async () =>{
    try{
        if (!cityInput.value)
            return;
        const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${cityInput.value}`);
        if (!response.ok)
        {
            wrongCity.textContent = "City not found";
            throw new Error("Wrong city name");
        }
        wrongCity.textContent = "";
        const data = await response.json();
        const temp = data.main.temp;
        const city = data.name;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const weatherDescrtiption = data.weather[0].main;
        console.log(weatherDescrtiption);
        switch (weatherDescrtiption){
            case ("Clear") :
                weatherImg.src = "images/weather/clear.png"
                break;
            case ("Clouds") :
                weatherImg.src = "images/weather/clouds.png"
                break;
            case ("Drizzle") :
                weatherImg.src = "images/weather/drizzle.png"
                break;
            case ("Rain") :
                weatherImg.src = "images/weather/rain.png"
                break;
            case ("Snow") :
                weatherImg.src = "images/weather/snow.png"
                break;
        }
        cityName.textContent = city;
        temperature.textContent = Math.floor(temp) + "°C";
        humidityPercent.textContent = humidity + '%';
        windSpeed.textContent = wind + "Km/h";
    }
    catch(error){
        console.error(error);
    }
})
