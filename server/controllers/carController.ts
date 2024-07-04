import { error } from "console";
import { Request, Response } from "express";

const service = require("../services/carService");

const getAllCars = async function (req: Request, res: Response) {
  try {
    const result = await service.findAllCars();
    res.status(200).json(result);
  } catch {
    res.status(404).json({ message: "Cars not found" });
    console.log(error);
  }
};

const createCar = async function (req: Request, res: Response) {
  try {
    const result = await service.createCar(req.body);
    res.status(200).json(result);
  } catch {
    res.status(400).json({ message: "" });
    console.log(error);
  }
};

module.exports = {
  getAllCars,
  createCar,
};
