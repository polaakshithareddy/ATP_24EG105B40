# 🚀 MERN Stack Blog Application

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge&logo=mongodb)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

Welcome to the **MERN Stack Blog Application**! This is a complete, full-stack web application built to demonstrate modern web development practices. It provides a robust platform for authors to publish articles and for users to read and interact with content.

---

## 📑 Table of Contents
- [Project Overview](#-project-overview)
- [Problem Statement](#-problem-statement)
- [Features](#-features)
- [Tech Stack Used](#-tech-stack-used)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [API Overview](#-api-overview)
- [Authentication Flow](#-authentication-flow)
- [Database Overview](#-database-overview)
- [Installation & Setup](#-installation--setup)
- [Project Workflow](#-project-workflow)
- [Future Enhancements](#-future-enhancements)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🌟 Project Overview

This project is a comprehensive blogging platform where users can register with different roles (Admin, Author, User). Authors have the ability to create, edit, and publish rich-text articles with images. Normal users can read these articles and view author profiles. The application is built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) ensuring high performance, scalability, and a seamless single-page application experience.

---

## 🎯 Problem Statement

Traditional blogging platforms often lack a clean separation of concerns regarding user roles, making it difficult to manage who can write versus who can only read. Furthermore, many modern solutions are bloated. This project aims to solve this by providing a lightweight, role-based, and highly responsive blogging application tailored specifically for seamless content creation and consumption, while adhering to secure RESTful API principles.

---

## ✨ Features

*   **Role-Based Access Control (RBAC)**: Secure routing and API access for Admins, Authors, and standard Users.
*   **Secure Authentication**: JWT-based login/registration with encrypted passwords using `bcrypt`.
*   **Dynamic Content Management**: Authors can perform full CRUD operations on their articles.
*   **Cloud Media Storage**: Integrated with Cloudinary for secure and reliable image uploads.
*   **Responsive Modern UI**: Built with React and Tailwind CSS v4 to look great on any device.
*   **State Management**: Utilizes Zustand for efficient, boilerplate-free global state handling.
*   **Form Validation**: Robust client-side validation using React Hook Form.

---

## 💻 Tech Stack Used

### **Frontend**
*   **React (v19)**: UI Library
*   **Vite**: Build Tool
*   **Tailwind CSS (v4)**: Styling
*   **Zustand**: State Management
*   **React Router DOM**: Client-side Routing
*   **Axios**: HTTP Client
*   **React Hook Form**: Form Handling

### **Backend**
*   **Node.js**: Runtime Environment
*   **Express.js**: Web Framework
*   **MongoDB & Mongoose**: Database & ODM
*   **JSON Web Tokens (JWT)**: Authentication
*   **Bcrypt**: Password Hashing
*   **Cloudinary & Multer**: Image Upload & Storage

---

## 🏗️ System Architecture

The application follows a standard Client-Server architecture:
1.  **Client Tier (React)**: Handles the UI, state, and client-side routing. Makes asynchronous HTTP requests to the backend.
2.  **Server Tier (Node/Express)**: Receives requests, processes business logic, validates JWT tokens, and interacts with the database.
3.  **Data Tier (MongoDB)**: Persists application data (users, articles, metadata) in a NoSQL document format.
4.  **Cloud Storage (Cloudinary)**: Handles image assets uploaded by authors.

---

## 📁 Project Structure

The project is structured into two main independent folders:

### `blogapp-frontend/`
Contains the React application. Responsible for the user interface, routing, and state management.
👉 **[Read the Frontend README](./blogapp-frontend/README.md)** for detailed frontend documentation.

### `blogapp-backend/`
Contains the Node.js/Express server. Responsible for API endpoints, database connection, authentication logic, and media processing.
👉 **[Read the Backend README](./blogapp-backend/README.md)** for detailed backend documentation.

---

## 📸 Screenshots

*(Replace the placeholder links with actual paths to your screenshots once you take them)*

| Home Page | Author Dashboard | Write Article |
| :---: | :---: | :---: |
| ![Home](https://via.placeholder.com/300x200.png?text=Home+Page+Screenshot) | ![Dashboard](https://via.placeholder.com/300x200.png?text=Dashboard+Screenshot) | ![Write](https://via.placeholder.com/300x200.png?text=Write+Article+Screenshot) |

---

## 🌐 API Overview

The backend exposes several RESTful endpoints categorized by roles:
*   `/common-api/*`: Public endpoints for login and registration.
*   `/author-api/*`: Protected endpoints for article creation, editing, and deletion.
*   `/user-api/*`: Protected endpoints for user-specific actions.
*   `/admin-api/*`: Highly protected endpoints for platform administration.

---

## 🔐 Authentication Flow

1.  User submits credentials via the frontend login form.
2.  Backend verifies credentials and generates a **JWT (JSON Web Token)** containing the user's ID and Role.
3.  Token is sent back to the client and stored in the global state (Zustand).
4.  For subsequent protected requests, the frontend attaches the JWT as a `Bearer` token in the HTTP `Authorization` header.
5.  Backend middleware intercepts the request, verifies the token, and grants or denies access.

---

## 🗄️ Database Overview

**MongoDB** is used as the database, structured using **Mongoose** schemas:
*   **Users Collection**: Stores `username`, `email`, `hashed password`, `role` (user/author/admin), and profile picture URL.
*   **Articles Collection**: Stores article `title`, `content`, `category`, `author reference ID`, timestamps, and cover image URL.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### Prerequisites
*   Node.js installed on your machine.
*   A MongoDB URI (local or Atlas).
*   A Cloudinary account for API keys.

### 1. Clone the Repository
```bash
git clone <your-github-repo-url>
cd BLOG
```

### 2. Backend Setup
```bash
cd blogapp-backend
npm install
```
**Environment Variables (`blogapp-backend/.env`)**
Create a `.env` file and add the following:
```env
PORT=4000
DB_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
FRONTEND_URL=http://localhost:5174
```
**Run Backend:**
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal window:
```bash
cd blogapp-frontend
npm install
```
**Run Frontend:**
```bash
npm run dev
```

---

## 🔄 Project Workflow

1.  **Run both servers**: Ensure the Node.js backend and React frontend are running simultaneously.
2.  **Register**: Create an account as an `Author`.
3.  **Login**: Authenticate with your new credentials.
4.  **Create**: Navigate to the dashboard and publish a new article with an image.
5.  **View**: Switch to the Home page to see your article dynamically fetched from the database.

---

## 🚀 Future Enhancements

*   **Comment System**: Allow users to leave comments on articles.
*   **Like/Bookmark Functionality**: Enable users to save favorite posts.
*   **Rich Text Editor**: Upgrade simple textareas to a WYSIWYG editor (e.g., Quill.js).
*   **Pagination**: Implement lazy loading or numbered pagination for articles.
*   **SEO Optimization**: Add dynamic meta tags for better search engine visibility.

---

## 👥 Contributors

*   **Pola Akshitha Reddy** - *Full Stack Developer* - [GitHub Profile](https://github.com/polaakshithareddy)

---

## 📄 License

This project is licensed under the **ISC License**. Feel free to use, modify, and distribute as per the license terms.

---
*Thank you for checking out the MERN Blog Application! ⭐ Don't forget to star the repo if you found it helpful.*
