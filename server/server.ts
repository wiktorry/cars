import { Express } from "express";

const express = require("express");
const app: Express = express();
const carRouter = require("./routes/cars");
const userRouter = require("./routes/users");

app.use(express.json());

app.use("/cars", carRouter);
app.use("/users", userRouter);

app.listen(5000);
