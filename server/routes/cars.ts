import { Express, Router } from "express";
import { Connection } from "mysql2";

const express = require("express");
const router: Router = express.Router();
const controller = require("../controllers/carController");

router.route("/").get(controller.getAllCars).post(controller.createCar);

module.exports = router;
