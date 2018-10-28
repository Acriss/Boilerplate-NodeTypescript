import express from "express";
import dotenv from "dotenv";

// Loading environment variables into process.env
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env" });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: ".env.development" });
}

const app = express();

export default app;
