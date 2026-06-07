# CRAVUE

CRAVUE is a React + Vite marketing website for a creative strategy company.  
It includes service, about, blog, article, and contact pages with SEO metadata and structured data.

## Project Structure

- `cravue/` — main frontend application
  - `src/Pages/` — route-level pages (`Home`, `Services`, `About`, `Blog`, `Contact`, `Article`)
  - `src/Pages/components/` — reusable UI components
  - `src/styles/` — page and shared styles
  - `src/assets/` — image and icon assets

## Tech Stack

- React 19
- React Router
- Vite
- ESLint
- React Helmet Async

## Getting Started

### 1) Install dependencies

```bash
cd /tmp/workspace/Sneakyorca/CRAVUE/cravue
npm ci
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Available Scripts

From `/tmp/workspace/Sneakyorca/CRAVUE/cravue`:

- `npm run dev` — start local dev server
- `npm run build` — create production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Environment Variables

Copy `.env.example` to `.env.local` inside `cravue/` and adjust values as needed:

- `VITE_API_URL` — backend API base URL

## Deployment

The frontend is configured for SPA routing on Vercel (`cravue/vercel.json` rewrite to `/`).
