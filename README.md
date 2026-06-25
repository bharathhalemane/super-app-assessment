<div align="center">

# 🚀 Super App

### A personalised entertainment & productivity dashboard

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-22c55e?style=for-the-badge)](https://super-app-assessment.vercel.app/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-FF6B35?style=for-the-badge)](https://zustand-demo.pmnd.rs/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>

---

## 📖 Overview

**Super App** is a single-page React application that merges entertainment discovery with personal productivity tools. After a quick sign-up, users choose their favourite movie genres and land on a personalised dashboard that brings together live news, real-time weather, a notes pad, a countdown timer, and a full movie browser — all in one place.

---

## ✨ Features

### 🔐 Registration & Onboarding
- Client-side validated sign-up form (name, username, email, 10-digit mobile)
- Terms & conditions consent checkbox
- Persistent session via Zustand + `localStorage` — refresh without losing your data
- Protected routes — every page after registration requires a valid user session

### 🎬 Category Selection
- Pick from **9 movie genres**: Action, Drama, Romance, Thriller, Western, Horror, Fantasy, Music, Fiction
- Minimum 3 genres required before proceeding
- Selected tags displayed inline with one-click removal

### 🖥️ Personalised Dashboard
- **User Info Card** — displays your name, username, email, and chosen categories
- **Weather Widget** — auto-detects your location via the browser Geolocation API, reverse-geocodes to a city name, and fetches live conditions (temperature, pressure, humidity, wind speed) from OpenWeatherMap
- **News Widget** — pulls top headlines from NewsAPI and cycles through them every 5 seconds with a smooth auto-carousel
- **Notes Widget** — a persistent scratchpad backed by Zustand store
- **Countdown Timer** — set hours / minutes / seconds, start / pause / resume / stop, with an animated SVG progress ring
- **Expand animation** — the `+` button reveals Notes and Timer with slide-in / fade-in transitions; the UserInfoCard and WeatherWidget gracefully shrink to compact mode

### 🎥 Movie Browser
- Movies fetched from **OMDb API** based on your chosen genres
- Genre-grouped sections with a horizontal movie carousel (Swiper)
- Click any movie to open a **Movie Modal** with poster, plot, and ratings
- Deep-link to a full **Movie Detail page** (`/movie/:imdbID`) showing IMDB / Rotten Tomatoes / Metacritic scores, cast, director, writers, box office, and awards

---

## 🗂️ Project Structure

```
super-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Images & category artwork
│   ├── components/
│   │   ├── CategoryCard/    # Selectable genre tile
│   │   ├── MovieCard/       # Full movie detail view
│   │   ├── MovieModal/      # Quick-view modal
│   │   ├── NewsWidget/      # Auto-cycling news carousel
│   │   ├── NotesWidget/     # Persistent notes textarea
│   │   ├── RegistrationForm/# Validated sign-up form
│   │   ├── TimerWidget/     # SVG ring countdown timer
│   │   ├── UserInfoCard/    # Profile summary (max/min modes)
│   │   └── WeatherWidget/   # Live weather (max/min modes)
│   ├── pages/
│   │   ├── Register/        # Landing / sign-up page
│   │   ├── Categories/      # Genre picker
│   │   ├── Dashboard/       # Main hub
│   │   └── Movies/          # Genre-grouped movie browser
│   ├── routes/
│   │   ├── AppRoutes.jsx    # BrowserRouter + route definitions
│   │   └── ProtectedRoute.jsx
│   ├── services/
│   │   ├── movieApi.js      # OMDb API (search + detail)
│   │   ├── newsApi.js       # NewsAPI top headlines
│   │   └── weatherApi.jsx   # OpenWeatherMap current weather
│   └── store/
│       └── useStore.js      # Zustand store (user, categories, notes)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Routing | React Router DOM v7 |
| State management | Zustand 5 (with `persist` middleware) |
| HTTP client | Axios |
| Icons | Lucide React · React Icons |
| Carousel | Swiper · React Slick |
| Skeleton loaders | react-loading-skeleton |
| Linting | OXLint |
| Deployment | Vercel |

### External APIs

| API | Used for | Env variable |
|---|---|---|
| [OMDb API](https://www.omdbapi.com/) | Movie search & detail | `VITE_MOVIE_API` |
| [NewsAPI](https://newsapi.org/) | Top headlines | `VITE_NEWS_API` |
| [OpenWeatherMap](https://openweathermap.org/api) | Live weather data | `VITE_WEATHER_API` |
| [BigDataCloud](https://www.bigdatacloud.com/) | Reverse geocoding (free, no key) | — |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- API keys for OMDb, NewsAPI, and OpenWeatherMap (all have free tiers)

### 1. Clone the repository

```bash
git clone https://github.com/bharathhalemane/super-app-assessment.git
cd super-app-assessment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_MOVIE_API=your_omdb_api_key
VITE_NEWS_API=your_newsapi_key
VITE_WEATHER_API=your_openweathermap_api_key
```

> **Getting free API keys:**
> - **OMDb** → [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
> - **NewsAPI** → [newsapi.org/register](https://newsapi.org/register)
> - **OpenWeatherMap** → [home.openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up)

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🌐 Deployment

The app is deployed on **Vercel**. To deploy your own fork:

1. Push your fork to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add the three environment variables (`VITE_MOVIE_API`, `VITE_NEWS_API`, `VITE_WEATHER_API`) in the Vercel project settings under **Environment Variables**
4. Deploy — Vercel auto-detects Vite and sets the correct build command (`npm run build`) and output directory (`dist`)

---

## 📱 App Flow

```
/ (Register)
    │  fill name, username, email, mobile + consent
    ▼
/categories
    │  select ≥ 3 genres → Next Page
    ▼
/dashboard
    │  UserInfoCard · WeatherWidget · NewsWidget
    │  [+] → NotesWidget · TimerWidget slide in
    │  [Browse] →
    ▼
/movies
    │  genre-grouped carousel (OMDb)
    │  click poster →
    ▼
/movie/:imdbID
    └── Full detail: ratings, cast, box office, awards
```

---

## 🔑 Key Implementation Details

**Protected routes** — `ProtectedRoute` reads `user.email` from the Zustand store. Any route without a valid email redirects to `/`.

**Persistent state** — Zustand's `persist` middleware saves user data, selected categories, and notes to `localStorage` under the key `super-app-storage`, so the session survives a page refresh.

**Geolocation + weather** — The Weather Widget calls `navigator.geolocation.getCurrentPosition`, then reverse-geocodes the coordinates with BigDataCloud's free API to get a city name before hitting OpenWeatherMap.

**Dashboard expand animation** — Instead of toggling `display: none`, the `+` button swaps CSS classes that animate `max-width` / `max-height` + `opacity` + `transform`, giving smooth slide-in transitions for the Notes and Timer widgets without any JS animation library.

---

## 📄 License

This project was built as a frontend assessment. Feel free to fork and build on it.

---

<div align="center">
  Made with ❤️ using React + Vite &nbsp;|&nbsp; <a href="https://super-app-assessment.vercel.app/">Live Demo →</a>
</div>