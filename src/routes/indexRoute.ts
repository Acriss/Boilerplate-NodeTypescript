import { Request, Response, NextFunction } from "express";

const indexRoute = (req: Request, res: Response, next: NextFunction) => {
  res.render("home", {
    title: "welcome home"
  });
};

export default indexRoute;
