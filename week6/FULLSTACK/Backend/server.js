import exp from "express";
import {config} from "dotenv";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import { empRoute } from "./APIS/employeeAPI.js";
import cors from "cors";
config();

// ─── Crash guards: prevent silent exits ──────────────────────────────────────
process.on('uncaughtException', (err) => {
  console.error('[uncaughtException]', err.name, err.message, err.stack);
});
process.on('unhandledRejection', (reason) => {
  console.error('[unhandledRejection]', reason);
});

const app = exp();

// ─── CORS: allow localhost in dev, Vercel URL in prod ────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn(`[CORS] Blocked origin: ${origin}`);
      return callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    credentials: true,
  }),
);

//body parser middleware
app.use(exp.json());
app.use(cookieParser());

//emp api middleware
app.use("/emp-api", empRoute);

// ─── 404 handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  console.warn(`[404] ${req.method} ${req.url}`);
  res.status(404).json({ message: `path ${req.url} is invalid` });
});

// ─── Global error handler ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.name, err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});

// ─── Connect to MongoDB then start server ────────────────────────────────────
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("✅ DB connected");
    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`🚀 Server listening on port ${port}`));
  } catch (err) {
    console.error("❌ DB connection failed:", err.name, err.message);
    process.exit(1);
  }
};

connectDB();