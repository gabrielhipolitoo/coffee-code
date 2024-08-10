import { Request, Response, NextFunction } from "express";

const validationEmail = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const regexEmail = new RegExp(
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  );
  if (regexEmail.test(req.body.email)) {
    next();
  } else {
    console.log(req.body);
    res.status(202).json({
      status: "E-mail invalido",
    });
  }
};
 
export default validationEmail;
