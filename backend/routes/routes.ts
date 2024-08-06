import express, { Request, Response } from "express";
const route = express.Router();
import { UserModel } from "../models/Emails";
import validationEmail from "../middewares/validationEmail";

route.post(
  "/sendemail",
  validationEmail,
  async (req: Request, res: Response) => {
    console.log(req.body);
    const saveEmail = new UserModel<string>(req.body);
    try {
      await saveEmail.save();
    } catch (error: any) {
      new Error(error.message);
    }
  },
);

export default route;
