import express from "express";
import cors from "cors";
import route from "./routes/routes";
import { connectDb } from "./database/connectdb";
const app = express();

const corsOpt = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOpt));
app.use(express.json());
app.use("/api/v1/", route);
app.use(express.urlencoded({ extended: true }));

const port = 3000;
app.listen(port, () => {
  connectDb();
  console.log("Server on in port:", 3000);
});
