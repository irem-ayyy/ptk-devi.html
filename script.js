document.addEventListener("DOMContentLoaded", function () {
    const getWeatherButton = document.getElementById("getWeather");
    const cityInput = document.getElementById("city");
    const weatherInfoDiv = document.getElementById("weatherInfo");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    const weatherDescription = document.getElementById("weatherDescription");

    getWeatherButton.addEventListener("click", function () {
        const city = cityInput.value;
        if (!city) {
            alert("Lütfen bir şehir adı girin.");
            return;
        }

        const apiKey = 'your_api_key'; // OpenWeatherMap API anahtarınızı buraya ekleyin
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    cityName.textContent = data.name;
                    temperature.textContent = data.main.temp;
                    humidity.textContent = data.main.humidity;
                    windSpeed.textContent = data.wind.speed;
                    weatherDescription.textContent = data.weather[0].description;
                    weatherInfoDiv.classList.remove("hidden");
                } else {
                    alert("Şehir bulunamadı. Lütfen geçerli bir şehir adı girin.");
                }
            })
            .catch(error => {
                console.error("Hata:", error);
                alert("Hava durumu verileri alınamadı. Lütfen daha sonra tekrar deneyin.");
            });
    });
});
