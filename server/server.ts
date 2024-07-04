import { Express } from "express";

const express = require("express");
const app: Express = express();
const carRouter = require("./routes/cars");

app.use(express.json());

app.use("/cars", carRouter);

app.listen(5000);
