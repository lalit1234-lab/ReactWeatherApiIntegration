# React Weather Dashboard 🌤️

A beautiful, fully responsive React application that fetches dynamic weather information for any city directly from the OpenWeatherMap API.

## Features ✨

- **Real-Time Data**: Queries the OpenWeatherMap API for live temperature, weather conditions, humidity, and wind speed.
- **Modern UI**: Styled strictly with vanilla CSS utilizing a deep dark-mode aesthetic with frosted glass elements (glassmorphism).
- **Responsive Layout**: Designed to look stunning on both desktop and mobile devices.
- **Dynamic Feedback**: Loading spinners and smooth animations on state changes provide a premium user experience.
- **Zero Configuration Backend**: This project runs securely as a frontend-only React architecture.

## Tech Stack 🛠️

- **⚛️ Frontend Framework**: [React](https://reactjs.org/)
- **⚡ Bundler**: [Vite](https://vitejs.dev/)
- **🎨 Styling**: Pure CSS variables (`index.css`)
- **📡 HTTP Client**: [Axios](https://axios-http.com/)
- **💠 Icons**: [Lucide React](https://lucide.dev/)

## Getting Started 🚀

### 1. Prerequisites 

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Setup your Environment

The app requires an OpenWeatherMap API key. In the root directory, create a `.env` file and insert your API credentials like this:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

### 3. Installation

Install all the required dependencies using npm:

```bash
npm install
```

### 4. Running the App Locale

Spin up the local development server:

```bash
npm run dev
```

Visit the displayed local URL in your browser (usually `http://localhost:5173/`).

## Project Structure 📁

- `/src/App.jsx`: The main entry point component containing state logic, the search bar, and API handling.
- `/src/index.css`: All the beautifully crafted application-wide styling, animations, and root variables.
- `/.env`: Secret environment variables containing API keys (Not tracked via git in standard configuration).
- `/index.html`: Base entry point for Vite.

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Runs the app in the development mode.
- `npm run build` - Builds the app for production to the `dist` folder.
- `npm run preview` - Locally preview the production build.

## API Integration Details 🔗

This app interacts directly with the OpenWeatherMap REST API using the endpoint `https://api.openweathermap.org/data/2.5/weather`. It passes a search city query (`q=city_name`) along with metric preference (`units=metric`). Errors such as 404 (City Not Found) are gracefully caught and displayed to the user.
