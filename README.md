# Rakesh Dhangar Portfolio

Modern MERN developer portfolio for Rakesh Dhangar with:

- React + Vite frontend
- Framer Motion animations
- Express backend
- MongoDB-ready contact form API
- Responsive dark glassmorphism UI

## Scripts

- `npm run dev` starts the Vite client and also attempts to start the Express server
- `npm run dev:client` starts only the Vite client
- `npm run dev:server` starts only the Express server with Node watch mode
- `npm run build` builds the client into `dist`
- `npm run start` starts the Express server
- `npm run preview` previews the production build from `dist`

## Setup

1. Install dependencies:
   - `npm install`
2. Copy environment variables:
   - duplicate `.env.example` to `.env`
3. Add a working `MONGODB_URI`
4. Run the app:
   - `npm run dev`

If backend packages are not installed yet, `npm run dev` will still bring up the frontend and print that API routes are unavailable.

## Environment Variables

- `PORT` server port, default `5000`
- `MONGODB_URI` MongoDB connection string
- `MONGODB_DB_NAME` optional database name override
- `CLIENT_ORIGIN` allowed frontend origin for CORS
- `NODE_ENV` use `production` to serve the built client from Express

## Project Structure

- `client/` React frontend
- `client/src/components/` reusable UI sections
- `client/src/data/portfolioData.js` portfolio content
- `server/` Express API, routes, controller, model, and database config

## Notes

- The resume download uses a generated HTML resume because no PDF asset was provided in the project.
- The contact form stores messages only when MongoDB is configured successfully.
