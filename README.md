# Express Screen and Window API

This project is an Express.js application that provides various routes for managing orders, users, and other resources. It utilizes the Node.js runtime environment and connects to a database for data storage.

## Setup

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Set up environment variables by creating a `.env` file and adding the necessary configurations. Refer to the `.env.example` file for required variables.
4. Start the application: `npm start`

## Usage

Once the application is running, you can access the various routes provided by the Express.js application.

### Routes

- `/` - Home route
- `/users` - Users route
- `/orders` - Orders route

Please refer to the code and comments within the application files for more details on each route and its functionality.

## Dependencies

- `dotenv` - Loads environment variables from a `.env` file
- `express` - Web application framework for Node.js
- `http-errors` - Creates HTTP errors for Express.js applications
- `path` - Provides utilities for working with file and directory paths
- `cookie-parser` - Parses cookie headers and populates `req.cookies` with an object keyed by cookie names
- `morgan` - HTTP request logger middleware for Node.js
- `cors` - Express middleware to enable Cross-Origin Resource Sharing (CORS)
- `node-fetch` - A light-weight module that brings `window.fetch` to Node.js
