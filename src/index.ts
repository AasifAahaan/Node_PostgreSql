import express from 'express';
import bodyParser from 'body-parser';
import { connectDatabase } from './config/database';
import userRoutes from "../src/routes/index"
import dotenv from 'dotenv';

const app = express();
const port = 3000;

dotenv.config();

// Middleware
app.use(bodyParser.json());

app.use("/api", userRoutes)

connectDatabase().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
});
