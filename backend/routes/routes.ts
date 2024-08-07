import express, { Request, Response } from "express";
const route = express.Router();
import { EmailModel } from "../models/Emails";
import validationEmail from "../middewares/validationEmail";
import verifyEmail from "../middewares/verifyEmail";

route.post(
  "/sendemail",
  validationEmail,
  verifyEmail,
  async (req: Request, res: Response) => {
    const saveEmail = await new EmailModel<string>(req.body);
    try {
      await saveEmail.save();
      res.status(200).json({
        status: "Email inscrito",
      });
    } catch (error: any) {
      new Error();
    }
  },
);

route.get("/lengthsubscribes",async  (req: Request, res: Response) => {
  const lengthSubscribe = await EmailModel.collection.countDocuments();
  res.json({ length: lengthSubscribe });
}); 

export default route;
