import exp from "express";
import {config} from "dotenv";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import { empRoute } from "./APIS/employeeAPI.js";
import cors from "cors";
config();

const app = exp();
//add cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
const port = process.env.PORT || 3000
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);
app.use(cookieParser());
//DB connection
const connectDB = async () => {
  try {
    await connect("process.env.DB_URL");
    console.log("DB connected");
    app.listen(port, () => console.log(`server listening port ${port}...`));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});