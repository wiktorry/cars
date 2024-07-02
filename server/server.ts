import { Express } from "express";

const express = require("express");
const app: Express = express();
const db = require("./dbConnection");

app.get("/", (req, res) => {
  res.send("XD");
});

app.listen(5000);
