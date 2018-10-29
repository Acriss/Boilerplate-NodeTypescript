import { Application } from "express";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import lusca from "lusca";

import routes from "./routes";

// Loading environment variables into process.env
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env" });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: ".env.development" });
}

const app: Application = express();

// Express configuration and middlewares
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use("/", routes);

export default app;
