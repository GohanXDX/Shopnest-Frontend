# SHOPNEST MERN Project

## Overview

SHOPNEST is a MERN stack e-commerce application built with:
- **MongoDB** for database storage
- **Express** and **Node.js** for the backend API
- **React** with **Vite** for the frontend
- **Tailwind CSS** for styling

The repository is organized into a root project folder with separate `backend` and `frontend/vite-project` apps.

## Project structure

- `backend/`
  - `index.js` - backend entrypoint and server setup
  - `package.json` - backend dependencies and scripts
  - `config/` - database, Cloudinary, Razorpay, and other service configuration files
  - `controllers/` - request handlers for auth, products, orders, payments, analytics
  - `middleware/` - authentication and request middleware
  - `model/` - Mongoose models for `User`, `Product`, `Order`, `Review`
  - `routes/` - Express routes for auth, products, orders, payments, analytics
  - `utils/` - helper utilities such as email and file sending
  - `upload/` - local upload storage folder

- `frontend/`
  - `src/` - React source code
    - `App.jsx` - main application component
    - `main.jsx` - frontend entrypoint
    - `pages/` - route pages like `Home`, `Shop`, `Cart`, `Checkout`, `Login`, `Register`, etc.
    - `admin/` - admin dashboard pages and product management UI
    - `components/` - reusable components such as `Navbar`, `Footer`, `ProductCart`
    - `context/` - application context providers
    - `redux/` - Redux store and cart slice
  - `package.json` - frontend scripts and dependencies
  - `vite.config.js` - Vite configuration

- `.gitignore` - files and folders excluded from version control, including `node_modules`, `.env`, and build output

## Root scripts

From the project root, use:

- `npm install-all` - install dependencies for root, backend, and frontend
- `npm run build` - build the frontend app
- `npm start` - start the backend server
- `npm run dev` - run both frontend and backend in development mode using `concurrently`
- `npm run client` - start frontend dev server
- `npm run server` - start backend dev server
- `npm run seed` - seed backend data (if defined in backend scripts)

## Frontend scripts

From `frontend/vite-project`:

- `npm run dev` - start Vite development server
- `npm run build` - build production-ready frontend bundle
- `npm run preview` - preview built frontend locally
- `npm run lint` - run ESLint

## Backend scripts

From `backend`:

- `npm start` - run backend with Node
- `npm run dev` - run backend with Nodemon for development

## Deployment notes

- Build the frontend first: `npm run build`
- Make sure environment variables are stored in `.env`, and do not commit `.env` to Git
- The production frontend build output is located in `frontend/vite-project/dist/`
- Files in `backend/node_modules/`, `frontend/vite-project/node_modules/`, and `frontend/vite-project/dist/` are excluded by `.gitignore`

## Important files

- `backend/.env` - backend environment variables
- `backend/config/database.js` - database connection configuration
- `backend/routes/*.js` - route definitions
- `frontend/vite-project/src/App.jsx` - React application wiring
- `frontend/vite-project/src/pages/` - page components

## Notes

This project is ready for deployment once the frontend has been built and backend environment variables are configured.
