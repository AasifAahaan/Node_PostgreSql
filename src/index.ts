import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { connectDatabase } from './config/database';
import userRoutes from "../src/routes/index"
import dotenv from 'dotenv';
import cors from "cors";
import path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

dotenv.config();

require('dotenv').config({ path: '.env', override: true });


// Middleware
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: process.env.ALLOWED_DOMAINS?.split(" "),
    optionsSuccessStatus: 200,
  })
);

// Middleware for logging (you can use morgan or other logging libraries)
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.use(express.json({ limit: "10000mb" }))
app.use(express.urlencoded({ limit: "10000mb", extended: true }))
app.use(express.static("public"))

app.use("/api", userRoutes)

app.get("/api/get", (req: Request, res: Response) => {
  res.send("Aasif Alvi...");
})

connectDatabase().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
});


function generateTxnId(length = 16) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let txnid = "";
  for (let i = 0; i < length; i++) {
    txnid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return txnid;
}

const transactionId = generateTxnId();
console.log({ transactionId })