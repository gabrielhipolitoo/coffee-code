import { Schema, model, createConnection } from "mongoose";

interface Email {
  email: string;
}

const EmailSchema = new Schema<Email>({
  email: { type: String },
});

export const UserModel = model("Emails", EmailSchema);
