# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack banking application using Express, MongoDB, and React (via CDN). It demonstrates basic CRUD operations for user accounts including registration, login, deposits, withdrawals, and balance tracking.

## Development Commands

### Start the Application
```bash
npm start
```
Starts the Express server on port 3000. Access the app at http://localhost:3000

### Install Dependencies
```bash
npm install
```

### MongoDB Setup
Start MongoDB with Docker:
```bash
docker run -p 27017:27017 --name bank-app -d mongo
```

## Architecture

### Backend Structure
- **index.js**: Express server with REST API endpoints
- **dal.js**: Data Access Layer that handles all MongoDB operations

The application uses a two-layer architecture:
1. Express routes in `index.js` handle HTTP requests
2. DAL functions in `dal.js` handle database operations via promises

MongoDB connection is established on server startup (dal.js:8-16) and maintained globally.

### Frontend Structure
- **public/index.html**: Single-page app entry point with React CDN dependencies
- **public/index.js**: React Router setup with UserContext for authentication state
- **public/components/**: React components for each page (createaccount, login, deposit, withdraw, balance, alldata, navbar, home)

The frontend uses React Router with hash-based routing and a global UserContext to manage the currently logged-in user.

### API Endpoints
- `POST /account/createaccount` - Creates new user (dal.js:19)
- `GET /account/login/:email` - Finds user by email (dal.js:30)
- `GET /find/user/:id` - Finds user by MongoDB ObjectId (dal.js:39)
- `POST /update/balance` - Updates user balance with increment/decrement (dal.js:48)
- `GET /find/allData` - Returns all users (dal.js:57)

### Database Schema
Collection: `myProject.users`
```javascript
{
  name: String,
  email: String,
  password: String,  // Note: stored in plain text
  balance: Number
}
```

## Important Notes

- MongoDB connection is global and established once on server startup
- Uses deprecated MongoDB callback-based API (not promises/async-await)
- Passwords are stored in plain text (no hashing)
- CORS is enabled for all origins
- UserContext state management tracks the logged-in user's MongoDB `_id`
- Balance updates use MongoDB's `$inc` operator for atomic operations
