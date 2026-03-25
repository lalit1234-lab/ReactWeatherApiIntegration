import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, MapPin, Droplets, Wind, CloudSun } from 'lucide-react';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [initialMount, setInitialMount] = useState(true);

  // Default city on initial load
  useEffect(() => {
    fetchWeather('Bhubaneshwar');
    setInitialMount(false);
  }, []);

  const fetchWeather = async (searchCity) => {
    if (!searchCity.trim()) return;
    
    // Notice how we use the .env variable properly for React app bundled with Vite
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;

    try {
      setLoading(true);
      setError('');
      
      const response = await axios.get(URL);
      setWeatherData(response.data);
    } catch (err) {
      setWeatherData(null);
      if (err.response && err.response.status === 404) {
        setError("City not found. Please try another.");
      } else {
        setError("Failed to fetch weather data. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="app-container">
      <div className="weather-card">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            className="search-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            disabled={loading}
          />
          <button type="submit" className="search-btn" disabled={loading || !city.trim()}>
            <Search size={20} />
          </button>
        </form>

        {error && <div className="error-msg">{error}</div>}

        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : weatherData ? (
          <div className="weather-info">
            <div className="location">
              <MapPin size={24} />
              <span>{weatherData.name}, {weatherData.sys.country}</span>
            </div>

            <div className="weather-icon-container">
              {/* OWM icon */}
              <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} 
                alt="weather icon" 
              />
            </div>

            <h1 className="temperature">{Math.round(weatherData.main.temp)}°</h1>
            <p className="description">{weatherData.weather[0].description}</p>

            <div className="details-grid">
              <div className="detail-card">
                <div className="detail-icon">
                  <Droplets size={20} />
                </div>
                <div className="detail-info">
                  <span className="detail-value">{weatherData.main.humidity}%</span>
                  <span className="detail-label">Humidity</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <Wind size={20} />
                </div>
                <div className="detail-info">
                  <span className="detail-value">{Math.round(weatherData.wind.speed * 3.6)} km/h</span>
                  <span className="detail-label">Wind Speed</span>
                </div>
              </div>
            </div>
          </div>
        ) : !initialMount && !error ? (
          <div className="empty-state">
            <CloudSun size={64} strokeWidth={1} />
            <p>Enter a city to see the weather</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
