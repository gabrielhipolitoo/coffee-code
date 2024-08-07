import { Schema, model, createConnection } from "mongoose";

interface Email {
  email: Object;
}

const EmailSchema = new Schema<Email>({
  email: { type: String },
});

export const EmailModel = model("Emails", EmailSchema);
