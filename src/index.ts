import express from 'express';
import bodyParser from 'body-parser';
import { connectDatabase } from './config/database';
import userRoutes from "../src/routes/index"
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

dotenv.config();

// Middleware
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.ALLOWED_DOMAINS?.split(" "),
    optionsSuccessStatus: 200,
  })
);

app.use(express.json({ limit: "20mb" }))
app.use(express.urlencoded({ limit: "20mb", extended: true }))
app.use(express.static("public"))

app.use("/api", userRoutes)

connectDatabase().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
});
