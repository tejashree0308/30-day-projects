// Fake weather data (no API)
const weatherData = {
  "bangalore": {
    temp: "28°C",
    humidity: "65%",
    desc: "Sunny ☀️"
  },
  "mumbai": {
    temp: "32°C",
    humidity: "75%",
    desc: "Humid 🌫️"
  },
  "delhi": {
    temp: "30°C",
    humidity: "60%",
    desc: "Cloudy ☁️"
  },
  "chennai": {
    temp: "34°C",
    humidity: "80%",
    desc: "Hot 🔥"
  }
};

function getWeather() {
  const cityInput = document.getElementById("city").value.toLowerCase().trim();
  const weatherBox = document.getElementById("weatherBox");

  if (weatherData[cityInput]) {
    const data = weatherData[cityInput];

    document.getElementById("cityName").innerText = cityInput.toUpperCase();
    document.getElementById("temperature").innerText = "🌡️ Temp: " + data.temp;
    document.getElementById("humidity").innerText = "💧 Humidity: " + data.humidity;
    document.getElementById("description").innerText = "🌥️ " + data.desc;

    weatherBox.classList.remove("hidden");
  } else {
    alert("City not found (Demo only)");
  }
}