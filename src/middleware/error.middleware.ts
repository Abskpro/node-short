import { Request, Response, NextFunction } from "express";
import HttpException from "../commons/exceptions/httpExceptions";

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(error);
  if (error) {
    const status = error.code || error.status || 500;
    response.status(status).send(error);
  } else {
    next();
  }
};
