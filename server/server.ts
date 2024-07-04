import { Express } from "express";

const express = require("express");
const app: Express = express();
const carRouter = require("./routes/cars");

app.use("/cars", carRouter);

app.get("/", (req, res) => {
  res.send("XD");
});

app.listen(5000);
