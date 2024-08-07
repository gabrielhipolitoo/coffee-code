import { Request, Response, NextFunction } from "express";
import { EmailModel } from "../models/Emails";

const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { email } = req.body;

  const verifyEmail = await EmailModel.findOne({ email: email });

  if (verifyEmail) {
    res.status(500).json({
      status: "Este email ja esta inscrito",
    });
  } else {
    // console.log("Passei por aqui");
    next();
  }
};

export default verifyEmail;
