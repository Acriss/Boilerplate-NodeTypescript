import express from "express";
import { Router } from "express";

import indexRoute from "./indexRoute";

const routes: Router = express.Router();

routes.use("/", indexRoute);

export default routes;
