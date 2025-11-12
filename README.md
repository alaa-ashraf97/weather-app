# 🌤️ RouteWeather - Weather Forecast App

A beautiful and interactive weather application that displays 3-day forecasts with **dynamic backgrounds** and **animated weather effects**.

## ✨ Features

- 🔍 **Real-time Weather Search** - Search any city worldwide
- 📅 **3-Day Forecast** - View detailed weather predictions
- 🎨 **Dynamic Backgrounds** - Background changes based on weather conditions
- 🌧️ **Animated Effects** - Rain, snow, sun flares, fog, and stars animations
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast & Lightweight** - Built with vanilla JavaScript

## 🌈 Weather Conditions Supported

| Condition | Background | Animation |
|-----------|-----------|-----------|
| ☀️ Sunny/Clear | Bright sunny image | Sun flare effect |
| 🌧️ Rainy | Rainy atmosphere | Animated raindrops |
| ❄️ Snowy | Cold snowy scene | Falling snowflakes |
| ☁️ Cloudy | Cloudy sky | Cloud overlay |
| 🌫️ Foggy/Misty | Foggy view | Moving fog effect |
| 🌙 Night | Night sky | Twinkling stars |
| 🔥 Hot (>34°C) | Hot desert scene | - |
| 🧊 Cold (<10°C) | Cold winter scene | Snowflakes |

## 🚀 Live Demo

[View Live Demo](https://alaa-ashraf97.github.io/weather-app)

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling & Animations
- **JavaScript (ES6)** - Functionality
- **Bootstrap 5** - Responsive layout
- **Font Awesome** - Icons
- **Animate.css** - Card animations
- **WeatherAPI** - Weather data source

## 📦 Installation & Setup

### Prerequisites
- A modern web browser
- Internet connection (for API calls)

### Steps

1. **Clone the repository**
```bash
   git clone https://github.com/alaa-ashraf97/weather-app.git
```

2. **Navigate to project folder**
```bash
   cd weather-app
```

3. **Open in browser**
```bash
   # Simply open index.html in your browser
   # Or use Live Server in VS Code
```

### 🔑 API Key Setup

The app uses [WeatherAPI.com](https://www.weatherapi.com/) for weather data.

**Current API Key (included):**
```javascript
const API_KEY = "5910105c4362435cb6495321251211";
```

**To use your own API key:**
1. Sign up at [WeatherAPI.com](https://www.weatherapi.com/)
2. Get your free API key
3. Replace the API_KEY in `js/script.js`

## 📁 Project Structure
```
weather-app/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Custom styles & animations
│   ├── bootstrap.min.css
│   └── all.min.css     # Font Awesome
├── js/
│   ├── script.js       # Main JavaScript logic
│   └── bootstrap.bundle.min.js
├── images/
│   ├── hot.jpg         # Background images
│   ├── cold.jpg
│   ├── sunny.jpg
│   ├── cloudy.jpg
│   ├── rainy.jpg
│   ├── foggy.jpg
│   ├── night.jpg
│   └── weather.png     # Favicon
└── README.md           # This file
```

## 🎯 How It Works

1. **User Input**: Enter any city name in the search bar
2. **API Call**: Fetches weather data from WeatherAPI
3. **Dynamic Display**:
   - Background changes based on temperature/condition
   - Weather animations activate
   - 3-day forecast cards appear with smooth animations
4. **Real-time Updates**: Search updates as you type (after 3 characters)

## 🎨 Customization

### Change Background Images
Replace images in the `images/` folder with your own (same names):
- `hot.jpg` - Hot weather (>34°C)
- `cold.jpg` - Cold weather (<10°C)
- `sunny.jpg` - Sunny/clear conditions
- `cloudy.jpg` - Cloudy conditions
- `rainy.jpg` - Rainy conditions
- `foggy.jpg` - Foggy/misty conditions
- `night.jpg` - Night time

### Adjust Temperature Thresholds
Edit in `js/script.js`:
```javascript
if (currentTemp >= 34) setBackground("hot");     // Change 34
else if (currentTemp <= 10) setBackground("cold"); // Change 10
```

## 🔮 Future Enhancements

- [ ] Hourly forecast display
- [ ] Weather alerts and warnings
- [ ] Favorite cities list
- [ ] Geolocation auto-detect
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] Weather maps integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Animations from [Animate.css](https://animate.style/)
- Bootstrap framework

## 📞 Support

If you found this project helpful, please give it a ⭐!

For questions or issues, please [open an issue](https://github.com/alaa-ashraf97/weather-app/issues).

---

Made with ❤️ and ☕
