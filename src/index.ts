import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.get("/env", (req, res) => {
  res.send({
    variavel: process.env.VAR_EXEMPLO,
  });
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
