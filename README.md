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
- **User Info Card** — name, username, email, and selected genre tags; shrinks to compact mode when widgets expand
- **Weather Widget** — auto-detects location via Geolocation API, reverse-geocodes to a city, fetches live conditions (temperature, pressure, humidity, wind) from OpenWeatherMap; also has compact mode
- **News Widget** — top headlines from NewsAPI cycling every 5 seconds with a smooth auto-carousel; graceful fallback if unavailable
- **Notes Widget** — persistent scratchpad saved in Zustand store
- **Countdown Timer** — set H/M/S, start / pause / resume / stop, animated SVG progress ring
- **`+` button animation** — pressing `+` spins and shrinks away while Notes slides in from the left and Timer slides up from below; UserInfoCard and WeatherWidget smoothly shrink to compact size

### 🎥 Movie Browser
- Movies fetched from **OMDb API** based on your chosen genres
- Genre-grouped sections with a horizontal movie carousel (Swiper)
- Click any movie to open a **Movie Modal** with poster, plot, and ratings
- Deep-link to a full **Movie Detail page** (`/movie/:imdbID`) showing IMDB / Rotten Tomatoes / Metacritic scores, cast, director, writers, box office, and awards
- Skeleton loaders while data fetches
---
 
## 🗂️ Project Structure
 
```
super-app/
├── api/                              ← Vercel serverless functions (production API proxy)
│   ├── news.js                       ← Proxies NewsAPI, keeps key server-side
│   └── weather.js                    ← Proxies OpenWeatherMap, keeps key server-side
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                       ← Images and category artwork
│   ├── components/
│   │   ├── CategoryCard/             ← Colour-coded genre selection tile
│   │   ├── MovieCard/                ← Full movie detail page
│   │   ├── MovieModal/               ← Genre section with Swiper carousel
│   │   ├── NewsWidget/               ← Auto-cycling news carousel
│   │   ├── NotesWidget/              ← Persistent textarea
│   │   ├── RegistrationForm/         ← Validated sign-up form
│   │   ├── TimerWidget/              ← SVG ring countdown timer
│   │   ├── UserInfoCard/             ← Profile card (max / min modes)
│   │   └── WeatherWidget/            ← Live weather card (max / min modes)
│   ├── pages/
│   │   ├── Register/                 ← Landing / sign-up
│   │   ├── Categories/               ← Genre picker
│   │   ├── Dashboard/                ← Main hub with animated widget expand
│   │   └── Movies/                   ← Genre-grouped movie browser
│   ├── routes/
│   │   ├── AppRoutes.jsx             ← BrowserRouter + all route definitions
│   │   └── ProtectedRoute.jsx        ← Redirects unauthenticated users to /
│   ├── services/
│   │   ├── movieApi.js               ← OMDb search + detail (direct, CORS-safe)
│   │   ├── newsApi.js                ← DEV: direct | PROD: /api/news proxy
│   │   └── weatherApi.jsx            ← DEV: direct | PROD: /api/weather proxy
│   └── store/
│   |   └── useStore.js               ← Zustand store: user, categories, notes
|   └── utils/
|       └──sound.jsx                  ← utility for get alram sound for 5 seconds
├── .env.example                      ← Template for required environment variables
├── vercel.json                       ← Rewrites: /api/* → functions, /* → index.html
├── vite.config.js
└── package.json
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
| [BigDataCloud](https://www.bigdatacloud.com/) | Reverse geocoding | (free, no key) |

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

### 3. Set up environment variables
 
Copy the example file and fill in your keys:
 
```bash
cp .env.example .env
```
 
```env
# .env
 
# Used in local dev — browser calls these APIs directly
VITE_NEWS_API=your_newsapi_key_here
VITE_WEATHER_API=your_openweathermap_key_here
 
# Used in both local and production
VITE_MOVIE_API=your_omdb_key_here
```
 
> **Getting free API keys:**
> - **NewsAPI** → [newsapi.org/register](https://newsapi.org/register)
> - **OpenWeatherMap** → [home.openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up) — new keys activate in ~10 min
> - **OMDb** → [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

In local dev, the services call the external APIs directly from the browser using your `VITE_` keys — no serverless functions needed locally.

### 5. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---
 
## 🌐 Deploying to Vercel
 
### 1. Push to GitHub and import on Vercel
 
Go to [vercel.com/new](https://vercel.com/new), import the repo. Vercel auto-detects Vite.
 
### 2. Add environment variables in Vercel dashboard
 
Go to **Project → Settings → Environment Variables** and add:
 
| Name | Value | Note |
|---|---|---|
| `NEWS_API` | your NewsAPI key | No `VITE_` prefix — server only |
| `WEATHER_API` | your OpenWeatherMap key | No `VITE_` prefix — server only |
| `VITE_MOVIE_API` | your OMDb key | `VITE_` prefix — frontend safe |
 
Make sure **Production**, **Preview**, and **Development** are all ticked for each variable.
 
### 3. Deploy
 
Click **Deploy**. Vercel automatically runs `npm run build` and serves the `dist/` folder. The `api/` folder is deployed as serverless functions.
 
### 4. Verify the functions work
 
Open these URLs directly after deploy — both should return JSON:
 
```
https://your-app.vercel.app/api/news?category=general
https://your-app.vercel.app/api/weather?city=Bangalore
```
 
If they return `{ "articles": [] }` or `{ "error": "..." }`, check **Vercel → Deployments → Functions tab** for server-side logs.
 
---
 
## 🔄 How the API proxy works
 
```
LOCAL DEV (npm run dev)
  Browser → NewsAPI / OpenWeatherMap directly
  Uses VITE_NEWS_API / VITE_WEATHER_API from .env ✅
 
PRODUCTION (Vercel)
  Browser → /api/news  → Vercel function → NewsAPI        (key hidden) ✅
  Browser → /api/weather → Vercel function → OpenWeatherMap (key hidden) ✅
  Browser → OMDb directly (CORS-safe, key in bundle is acceptable) ✅
```
 
The `import.meta.env.DEV` flag in each service file handles switching automatically — no manual changes between environments.
 
---
 
## 📱 App Flow
 
```
/ (Register)
    │  name · username · email · mobile · consent checkbox
    ▼
/categories
    │  select ≥ 3 genres → Next Page
    ▼
/dashboard
    │  UserInfoCard · WeatherWidget · NewsWidget
    │  [+] animates → NotesWidget slides in · TimerWidget slides up
    │  [Browse] →
    ▼
/movies
    │  genre-grouped Swiper carousels (OMDb)
    │  click poster →
    ▼
/movie/:imdbID
    └── Full detail: poster · ratings · cast · director · writers · box office · awards
```
 
---
 
## 🔑 Key Implementation Notes
 
**Protected routes** — `ProtectedRoute` reads `user.email` from Zustand. Any page without a valid email redirects to `/`.
 
**Persistent state** — Zustand's `persist` middleware saves user data, categories, and notes to `localStorage` under `super-app-storage`. Refreshing the page keeps you logged in.
 
**Geolocation chain** — WeatherWidget calls `navigator.geolocation`, reverse-geocodes the coordinates with BigDataCloud's free API to get a city name, then passes it to the weather service.
 
**Dashboard expand animation** — toggling `display: none` can't be animated. Instead, CSS classes swap `max-width` / `max-height` + `opacity` + `transform` so Notes slides in from the left and Timer slides up, with the `+` button spinning and shrinking away — all done in pure CSS, no animation library.
 
**Serverless API proxy** — `api/news.js` and `api/weather.js` use Axios on the server side. `res.end(JSON.stringify(data))` is used instead of `res.json()` for compatibility with Vercel's Node runtime across versions.
 
**`vercel.json` rewrites** — ensures `/api/*` routes hit the serverless functions and all other routes fall through to `index.html` for client-side routing to work correctly.
 
---

## 📄 License

This project was built as a frontend assessment. Feel free to fork and build on it.

---

<div align="center">
  Made with using React + Vite &nbsp;|&nbsp; <a href="https://super-app-assessment.vercel.app/">Live Demo →</a>
</div>
