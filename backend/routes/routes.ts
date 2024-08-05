import express, { Request, Response } from "express";
const route = express.Router();
import { UserModel } from "../models/Emails";

route.get("/sendemail", async (req: Request, res: Response) => {
  const saveEmail =  new UserModel({
    email: "teste",
  });
  await saveEmail.save();
  res.json({ status: 200 });
});

export default route;
