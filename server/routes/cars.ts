import { Router } from "express";

const express = require("express");
const router: Router = express.Router();
const controller = require("../controllers/carController");

router
  .route("/")
  .get(controller.getAllCars)
  .post(controller.createCar)
  .put(controller.updateCar);

router
  .route("/:id")
  .get(controller.getCarById)
  .delete(controller.deleteCarById);

module.exports = router;
