# Week 3: Advanced Express API with Authentication & MongoDB

This directory contains a functional REST API built with Express.js. It demonstrates a significant step up from basic routing by introducing persistent databases, security, and authentication.

## Folder Structure (`06-03-26`)
- **`APIS/`**: Contains the route handlers (`userAPI.js`, `productAPI.js`) which include the core business logic for registering, logging in, updating users, and managing a shopping cart.
- **`models/`**: Defines the Mongoose schemas for MongoDB collections (e.g., `userModel.js`).
- **`middlewares/`**: Contains custom middleware logic, such as `verifyToken.js` to protect secure routes from unauthorized access.
- **`server.js`**: The main entry point that initializes the Express app, connects to MongoDB, and registers the API routes.

## Technologies & Concepts Used
- **MongoDB & Mongoose**: Persistent database storage and object data modeling (Schema definitions, `$push`, `populate`).
- **Bcrypt**: Used for hashing and salting user passwords securely before saving them to the database.
- **JSON Web Tokens (JWT)**: Implemented for stateless user authentication and authorization.
- **HTTP Cookies**: Storing the generated JWT securely in a cookie (`httpOnly`).
- **Minimal Express Architecture**: As noted in code reviews, this setup is "minimal"—meaning all business logic is intentionally kept within the route definitions for a lightweight, fast, and easy-to-read configuration.
