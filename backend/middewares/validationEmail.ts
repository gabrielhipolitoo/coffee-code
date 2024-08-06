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
    console.log("É um email valido");
    res.json({ status: 200 });
    next();
  } else {
    console.log("não é um email valido");
    res.json({ status: 400 });
  }
};

export default validationEmail;
