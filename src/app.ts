import express from "express";
import "dotenv/config";
import "express-async-errors";
import router from "./routes/routes";

const app = express();

app.use(express.json());

app.use(router);

export { app };
