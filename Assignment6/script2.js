function updateWeather(weatherData) {
    document.getElementById('weather').textContent = weatherData.weather;
    document.getElementById('temperature').textContent = weatherData.temperature;
    
    var thirtyMinutes = 30 * 60 * 1000;
    setTimeout(getWeatherData, thirtyMinutes);
}

function getWeatherData() {
    var xhr = new XMLHttpRequest();
    var apiKey = "fb12a73a00cad754efb1e8e67214d63d"; 
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Richmond Hill,CA&appid=" + apiKey;
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var currentForecast = {
                weather: response.weather[0].main,
                temperature: (response.main.temp - 273.15).toFixed(2) + '°C'
            };
            updateWeather(currentForecast);
        } else {
            console.error('Failed to fetch weather data: ' + xhr.status);
            updateWeather({ weather: 'unknown (error)', temperature: 'unknown (error)' });
        }
    }
    xhr.onerror = function() {
        console.error('Failed to fetch weather data');
        updateWeather({ weather: 'unknown (error)', temperature: 'unknown (error)' });
    };
    xhr.open("GET", url);
    xhr.send();
}


window.onload = getWeatherData;
