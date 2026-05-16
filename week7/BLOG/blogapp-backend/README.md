# ⚙️ MERN Blog App - Backend

Welcome to the backend repository of the MERN Blog Application! This server handles all the business logic, database interactions, and API endpoints required to run the blog platform securely and efficiently.

---

## 📖 Backend Overview

Built with Node.js and Express.js, this RESTful API serves as the backbone for the frontend application. It connects to a MongoDB database to persist user data and articles, handles authentication and authorization, and provides endpoints for managing the blog's content.

### ✨ Key Features
*   **RESTful Architecture**: Clean, modular, and scalable API design.
*   **Secure Authentication**: JWT-based stateless authentication with password hashing (bcrypt).
*   **Role-Based Access Control (RBAC)**: Middleware to protect routes based on user roles (Admin, Author, User).
*   **Media Handling**: Integration with Cloudinary via Multer for seamless image uploads.
*   **Robust Error Handling**: Centralized error management to ensure reliable client responses.

---

## 🛠️ Technologies Used

*   **Node.js**: JavaScript runtime environment.
*   **Express.js**: Fast, unopinionated web framework for Node.js.
*   **MongoDB**: NoSQL document database.
*   **Mongoose**: Elegant MongoDB object modeling for Node.js.
*   **JSON Web Token (JWT)**: For secure, stateless authentication.
*   **Bcrypt**: Library to help hash passwords.
*   **Multer**: Middleware for handling `multipart/form-data` (file uploads).
*   **Cloudinary**: Cloud service for image storage and management.
*   **Dotenv**: Module to load environment variables from a `.env` file.
*   **CORS**: Middleware to enable Cross-Origin Resource Sharing.
*   **Cookie-parser**: Parse Cookie header and populate `req.cookies`.

---

## 📁 Folder Structure

```text
blogapp-backend/
├── API/
│   ├── adminApi.js       # Endpoints specific to Admin operations
│   ├── articleApi.js     # Endpoints for article retrieval/management
│   ├── authorApi.js      # Endpoints specific to Author operations
│   ├── commonApi.js      # Shared endpoints (login, registration)
│   └── userApi.js        # Endpoints specific to User operations
├── config/               # Database and third-party service configurations
├── middlewears/          # Custom Express middlewares (Auth, Error handling, Uploads)
├── models/
│   ├── ArticleModel.js   # Mongoose schema for Articles
│   └── UserModel.js      # Mongoose schema for Users (Admin, Author, User)
├── server.js             # Main application entry point
├── .env                  # Environment variables (not committed)
└── package.json          # Dependencies and scripts
```

---

## 🧱 Models

The application uses **Mongoose** to define data structures:
*   **UserModel**: Defines the schema for all users. Includes fields like username, email, hashed password, role (user/author/admin), and profile details.
*   **ArticleModel**: Defines the schema for blog posts. Includes title, content, author reference, timestamps, category, and an optional image URL (from Cloudinary).

---

## 🛣️ Routes

API routes are organized logically by domain in the `API` folder:
*   `/admin-api/*`: Routes for administrative tasks (e.g., managing users).
*   `/author-api/*`: Routes for authors to create, edit, and delete their articles.
*   `/user-api/*`: Routes for standard users (e.g., viewing profiles, saving articles).
*   `/common-api/*`: Routes shared across roles, primarily for authentication (login/register).

---

## 🛡️ Middleware

*   **VerifyToken Middleware**: Intercepts incoming requests, verifies the JWT in the headers/cookies, and attaches the decoded user payload to the request object. Blocks unauthorized access.
*   **Role-checking Middleware**: Further protects routes by ensuring the verified user has the correct role (e.g., `isAdmin`, `isAuthor`).
*   **Multer/Cloudinary Middleware**: Processes incoming form-data containing files, uploads them directly to Cloudinary, and attaches the secure URL to the request body before hitting the final route handler.
*   **Error Handling Middleware**: A centralized `(err, req, res, next)` function in Express that catches any thrown errors or unhandled promise rejections and sends a formatted JSON error response to the client.

---

## 🔐 Authentication & Authorization Flow

1.  **Registration**: User details are sent to the server. The password is hashed using `bcrypt` before saving to MongoDB.
2.  **Login**: User credentials are verified. If valid, a **JWT** is generated containing the user's ID and role.
3.  **Token Delivery**: The JWT is sent back to the client (often stored in HttpOnly cookies or localStorage by the frontend).
4.  **Protected Requests**: The client sends the JWT in the `Authorization` header (`Bearer <token>`). The server validates the token before processing the request.

---

## 🌐 API Endpoints Overview

*(Example endpoints based on standard MERN architecture)*
*   `POST /common-api/login` - Authenticate user
*   `POST /common-api/register` - Create new user account
*   `POST /author-api/article` - Create a new article (Requires Author auth)
*   `GET /article-api/articles` - Fetch all public articles
*   `PUT /author-api/article/:id` - Update an existing article
*   `DELETE /admin-api/user/:id` - Delete a user (Requires Admin auth)

---

## ⚙️ Environment Variables

Create a `.env` file in the root of `blogapp-backend/`. You will need the following variables:

```env
PORT=4000
DB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/blogapp?retryWrites=true&w=majority
SECRET_KEY=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
FRONTEND_URL=http://localhost:5174
```

---

## 🚀 Setup & Startup Commands

1.  **Navigate to the backend directory**:
    ```bash
    cd blogapp-backend
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Setup Environment Variables**:
    Ensure your `.env` file is properly configured with your MongoDB URI and Cloudinary credentials.
4.  **Start the Server**:

    *For Development (using Node's native watch mode):*
    ```bash
    npm run dev
    ```

    *For Production:*
    ```bash
    npm start
    ```
    The server will start running on the port defined in your `.env` (usually `http://localhost:4000`).

---

## 🔮 Future Improvements

*   Implement refresh tokens for better security and user experience.
*   Add rate limiting to prevent brute-force attacks on login routes.
*   Implement full-text search indexing in MongoDB for efficient article searching.
*   Add data validation middleware (like Joi or express-validator) before hitting the controllers.
*   Write automated unit and integration tests using Jest and Supertest.

---
*Developed with ❤️ using Node.js and Express.*
