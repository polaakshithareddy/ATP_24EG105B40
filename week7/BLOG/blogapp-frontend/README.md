# 🌐 MERN Blog App - Frontend

Welcome to the frontend repository of the MERN Blog Application! This application provides a modern, responsive, and intuitive interface for authors and readers to interact with blog articles. It is built using modern React ecosystem tools, providing a seamless user experience.

---

## 📖 Frontend Overview

The frontend is a Single Page Application (SPA) that communicates with the backend RESTful API. It provides different interfaces based on user roles (Admin, Author, User), allowing them to read, write, edit, and manage articles effortlessly.

### ✨ Key Features
*   **Role-based Access Control**: Distinct views and capabilities for Users, Authors, and Admins.
*   **Authentication & Authorization**: Secure login and registration with state persistence.
*   **Article Management**: Create, edit, and read rich-text articles (with image uploads).
*   **Responsive UI**: Optimized for mobile, tablet, and desktop viewing.
*   **Real-time Feedback**: Toast notifications for user actions (success, error, etc.).

---

## 🛠️ Technologies Used

*   **React (v19)**: Component-based UI library.
*   **Vite**: Next-generation frontend tooling for blazing fast builds.
*   **Tailwind CSS (v4)**: Utility-first CSS framework for rapid and responsive styling.
*   **React Router DOM**: Client-side routing for navigating between pages without reloading.
*   **Zustand**: Lightweight and fast state management solution.
*   **Axios**: Promise-based HTTP client for making API requests.
*   **React Hook Form**: Performant, flexible, and extensible forms with easy validation.
*   **React Hot Toast**: Beautiful, customizable notifications.

---

## 📁 Folder Structure

```text
blogapp-frontend/
├── src/
│   ├── assets/       # Static assets (images, icons, etc.)
│   ├── components/   # Reusable UI components and specific page components
│   ├── store/        # Zustand state management files
│   ├── styles/       # Global CSS/Tailwind styles
│   ├── App.jsx       # Root layout and application wrapper
│   └── main.jsx      # Application entry point
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
└── index.html        # HTML template
```

---

## 🧩 Components and Pages

The `src/components` directory houses all modular parts of the UI:
*   `Header.jsx` / `Footer.jsx`: Global layout components.
*   `Home.jsx`: The landing page showcasing recent articles.
*   `Login.jsx` / `Register.jsx`: Authentication forms handled via `react-hook-form`.
*   `User.jsx` / `Author.jsx` / `Admin.jsx`: Role-specific dashboards.
*   `Articles.jsx` / `Articlebyid.jsx`: Views for listing multiple articles and reading a single article.
*   `Writearticle.jsx` / `Editarticle.jsx`: Interfaces for content creation and modification.
*   `ProtectedRoute.jsx`: Wrapper component enforcing route access based on authentication status.

---

## 📦 State Management

This project uses **Zustand** for global state management. It handles:
*   **Authentication State**: Storing the current logged-in user, their role, and auth tokens.
*   **Global UI State**: (If applicable) managing loading states or global theme preferences.
Zustand was chosen over Redux for its simpler, boilerplate-free API while still providing excellent performance.

---

## 🪝 Hooks Used

*   `useState` & `useEffect`: Standard React hooks for local component state and side-effects (like fetching data on mount).
*   `useForm` (from react-hook-form): For managing form state, validation, and submission without excessive re-renders.
*   `useNavigate` & `useLocation` (from react-router): For programmatic navigation and reading current URL details.
*   Custom Zustand hooks (e.g., `useAuthStore`): To subscribe to global state changes.

---

## 🛣️ Routing

Client-side routing is implemented using **React Router DOM**.
*   **Public Routes**: `/`, `/login`, `/register`
*   **Protected Routes**: Managed by `ProtectedRoute.jsx` component.
    *   `/user-profile`: Accessible only to 'user' role.
    *   `/author-profile`: Accessible only to 'author' role (includes nested routes for `/new-article`, `/articles`).
    *   `/admin-dashboard`: Accessible only to 'admin' role.

---

## 🔌 API Integration

**Axios** is used to communicate with the Node.js/Express backend.
*   Interceptors can be configured to automatically attach JWT tokens to the `Authorization` header.
*   API calls are centralized or encapsulated within specific functions to maintain clean components.

---

## 📱 Responsive UI

The application utilizes **Tailwind CSS** to achieve a fully responsive design. Utility classes (like `md:flex`, `lg:grid`) ensure that the layout adapts gracefully from mobile screens to large desktop monitors, providing an optimal reading and authoring experience on any device.

---

## 🚀 Setup Instructions

1.  **Clone the repository** (if not already done).
2.  **Navigate to the frontend directory**:
    ```bash
    cd blogapp-frontend
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
4.  **Environment Variables**:
    Create a `.env` file in the root of the frontend folder (if required by your setup) to store the backend API URL.
    ```env
    VITE_API_URL=http://localhost:4000
    ```

---

## 💻 Commands

### Run Development Server
```bash
npm run dev
```
Starts the Vite development server (usually on `http://localhost:5173`).

### Build for Production
```bash
npm run build
```
Compiles and minifies the application into the `dist/` folder for deployment.

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

---

## 🔮 Future Improvements

*   Implement server-side pagination for better performance on the articles list.
*   Add a rich text editor (like Draft.js or Quill) for the `Writearticle` component instead of standard textareas.
*   Implement dark mode toggle.
*   Add skeleton loading states for smoother UI transitions during API calls.
*   Enhance SEO with `react-helmet` for dynamic meta tags.

---
*Developed with ❤️ using React and Vite.*
