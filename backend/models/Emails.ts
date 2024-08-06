import { Schema, model, createConnection } from "mongoose";

interface Email {
  email: Object;
}

const EmailSchema = new Schema<Email>({
  email: { type: String },
});

export const UserModel = model("Emails", EmailSchema);
