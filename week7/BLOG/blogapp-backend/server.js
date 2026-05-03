import exp from 'express'
import {config} from 'dotenv'
import {connect} from 'mongoose'
import {userApp} from './API/userApi.js'
import {articleApp} from './API/articleApi.js'
import {adminApp} from './API/adminApi.js'
import {authorApp} from './API/authorApi.js'
import {commonApp} from './API/commonApi.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
config();

// ─── Crash guards: prevent silent exits ───────────────────────────────────────
process.on('uncaughtException', (err) => {
    console.error('[uncaughtException]', err.name, err.message, err.stack);
});
process.on('unhandledRejection', (reason) => {
    console.error('[unhandledRejection]', reason);
});

// ─── Express app ──────────────────────────────────────────────────────────────
const app = exp()

// ─── CORS: allow localhost in dev, Vercel URL in prod ────────────────────────
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    process.env.FRONTEND_URL,   // set to https://your-app.vercel.app in Render
].filter(Boolean); // remove undefined if FRONTEND_URL is not set

app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin (Postman, curl, server-to-server)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        console.warn(`[CORS] Blocked origin: ${origin}`);
        return callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    credentials: true,  // allow cookies to be sent
}))

// ─── Body / cookie middleware ─────────────────────────────────────────────────
app.use(exp.json())
app.use(cookieParser())

// ─── Route middleware ─────────────────────────────────────────────────────────
app.use("/user-api",    userApp)
app.use("/article-api", articleApp)
app.use("/author-api",  authorApp)
app.use("/auth",        commonApp)
app.use("/admin-api",   adminApp)

// ─── 404 handler ─────────────────────────────────────────────────────────────
app.use((req, res, next) => {
    console.warn(`[404] ${req.method} ${req.url}`);
    res.status(404).json({message:`path ${req.url} is invalid`})
})

// ─── Global error handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
    console.error(`[ERROR] ${err.name}: ${err.message}`);
    if (err.name === "ValidationError") {
        return res.status(400).json({message:"error occured", error:err.message});
    }
    if (err.name === "CastError") {
        return res.status(400).json({message:"error occured", error:err.message});
    }
    const errCode    = err.code         ?? err.cause?.code         ?? err.errorResponse?.code;
    const keyValue   = err.keyValue     ?? err.cause?.keyValue     ?? err.errorResponse?.keyValue;
    if (errCode === 11000) {
        const field = Object.keys(keyValue)[0];
        const value = keyValue[field];
        return res.status(409).json({
            message: "error occurred",
            error: `${field} "${value}" already exists`,
        });
    }
    res.status(500).json({message:"error occured", error:err.message});
})

// ─── Connect to MongoDB Atlas then start server ───────────────────────────────
const connectDB = async () => {
    try {
        await connect(process.env.DB_URL);
        console.log("✅ DB server connected");

        const port = process.env.PORT || 4000
        app.listen(port, () => console.log(`🚀 Server listening on port ${port}`))
    } catch(err) {
        console.error("❌ DB connection failed:", err.name, err.message);
        // Exit so Render/process managers restart the service automatically
        process.exit(1);
    }
}
connectDB();
