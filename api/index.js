import express from "express";
import apiRoutes from "./routes.js";

const app = express();

// On Vercel, the function receives the full URL including /api
app.use("/api", apiRoutes);

export default app;
