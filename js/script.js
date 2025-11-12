// DOM elements
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherCards = document.getElementById("weatherCards");
const weatherAnimation = document.getElementById("weatherAnimation");

// Trigger search on Enter key press inside text box
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !cityInput.length > 2) {
    e.preventDefault();
    initiateSearch();
  }
});

cityInput.addEventListener("input", (e) => {
  e.preventDefault();
  initiateSearch();
});

// Trigger search on search button click
searchBtn.addEventListener("click", initiateSearch);

// Initialize background on page load
window.addEventListener("DOMContentLoaded", () => {
  setBackground("sunny");
});

// Search initialization
function initiateSearch() {
  const city = cityInput.value.trim();
  if (city.length > 2) fetchWeather(city);
}

// Set background image by condition or temperature keyword
function setBackground(condition) {
  const images = {
    hot: "../images/hot.jpg",
    cold: "../images/cold.jpg",
    sunny: "../images/sunny.jpg",
    cloudy: "../images/cloudy.jpg",
    rain: "../images/rainy.jpg",
    snow: "../images/cold.jpg",
    fog: "../images/foggy.jpg",
    night: "../images/night.jpg",
  };

  if (condition.includes("hot"))
    document.body.style.backgroundImage = `url(${images.hot})`;
  else if (condition.includes("cold"))
    document.body.style.backgroundImage = `url(${images.cold})`;
  else if (condition.includes("rain"))
    document.body.style.backgroundImage = `url(${images.rain})`;
  else if (condition.includes("snow"))
    document.body.style.backgroundImage = `url(${images.snow})`;
  else if (condition.includes("fog") || condition.includes("mist"))
    document.body.style.backgroundImage = `url(${images.fog})`;
  else if (condition.includes("cloud"))
    document.body.style.backgroundImage = `url(${images.cloudy})`;
  else if (condition.includes("night") || condition.includes("moon"))
    document.body.style.backgroundImage = `url(${images.night})`;
  else document.body.style.backgroundImage = `url(${images.sunny})`;
}

// Add weather animation based on condition and temperature
function addWeatherAnimation(condition, temp) {
  weatherAnimation.innerHTML = ""; // Clear previous

  condition = condition.toLowerCase();

  if (condition.includes("sun") || condition.includes("clear")) {
    weatherAnimation.innerHTML = '<div class="sunflare"></div>';
  } else if (
    condition.includes("rain") ||
    condition.includes("drizzle") ||
    condition.includes("shower")
  ) {
    for (let i = 0; i < 100; i++) {
      const raindrop = document.createElement("div");
      raindrop.className = "rain";
      raindrop.style.left = Math.random() * 100 + "%";
      raindrop.style.animationDelay = Math.random() * 2 + "s";
      raindrop.style.height = 10 + Math.random() * 20 + "px";
      weatherAnimation.appendChild(raindrop);
    }
  } else if (condition.includes("snow") || temp <= 10) {
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snow";
      snowflake.style.left = Math.random() * 100 + "%";
      snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";
      weatherAnimation.appendChild(snowflake);
    }
  } else if (condition.includes("cloud")) {
    weatherAnimation.innerHTML = `
      <img src="./images/real-cloud-icon.png" style="position:absolute; top:30%; left:70%; width:120px; opacity:0.7;" alt="Cloud icon">`;
  } else if (condition.includes("fog") || condition.includes("mist")) {
    const fog = document.createElement("div");
    fog.className = "fog";
    weatherAnimation.appendChild(fog);
  } else if (condition.includes("night") || condition.includes("moon")) {
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "stars";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 80 + "%";
      star.style.width = 1 + Math.random() * 2 + "px";
      star.style.height = star.style.width;
      star.style.animationDuration = 2 + Math.random() * 3 + "s";
      weatherAnimation.appendChild(star);
    }
  }
}

// Fetch weather data from WeatherAPI
async function fetchWeather(city) {
  const API_KEY = "5910105c4362435cb6495321251211";
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    if (data.error) {
      alert("City not found!");
      return;
    }

    // Clear old cards and animations
    weatherCards.innerHTML = "";
    weatherAnimation.innerHTML = "";

    // Current temp and condition
    const currentTemp = data.current.temp_c;
    const currentCondition = data.current.condition.text.toLowerCase();

    // Set background precisely
    if (currentTemp >= 34) setBackground("hot");
    else if (currentTemp <= 10) setBackground("cold");
    else setBackground(currentCondition);

    // Show forecast cards for 3 days
    data.forecast.forecastday.forEach((day, idx) => {
      const date = new Date(day.date);
      const dayCondition = day.day.condition.text;
      const avgTemp = Math.round(day.day.avgtemp_c);
      const minTemp = Math.round(day.day.mintemp_c);
      const maxTemp = Math.round(day.day.maxtemp_c);
      const humidity = day.day.avghumidity;
      const wind = day.day.maxwind_kph;

      const card = document.createElement("div");
      card.className = "col-md-4 animate__animated animate__fadeInUp";
      card.innerHTML = `
        <div class="card">
          <h4>${date.toLocaleDateString("en-US", { weekday: "long" })}</h4>
          <p>${dayCondition}</p>
          <h2>${avgTemp}°C</h2>
          <p>Min: ${minTemp}°C | Max: ${maxTemp}°C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind: ${wind} kph</p>
          <img src="https:${day.day.condition.icon}" alt="${dayCondition}">
        </div>
      `;
      weatherCards.appendChild(card);

      // Add animation only for first day
      if (idx === 0) addWeatherAnimation(dayCondition, avgTemp);
    });
  } catch (error) {
    alert("City not found or API error!");
    console.error(error);
  }
}
