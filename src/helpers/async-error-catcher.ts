import { Request, Response, NextFunction } from "express";

export function asyncErrorCatcher(fn: Function) {
  /*
  Any error must be .catch() and passed to .next()
*/
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}
