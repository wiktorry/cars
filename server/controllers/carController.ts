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

const getCarById = async function (req: Request, res: Response) {
  try {
    const result = await service.findCarById(req.params.id);
    res.status(200).json(result);
  } catch {
    res.status(404).json({ message: "Car not found" });
  }
};

const createCar = async function (req: Request, res: Response) {
  try {
    const result = await service.createCar(req.body);
    res.status(200).json(result);
  } catch {
    res.status(400).json({ message: "Can't create this car" });
  }
};

const updateCar = async function (req: Request, res: Response) {
  try {
    const result = await service.updateCar(req.body);
    res.status(200).json(result);
  } catch {
    res.status(400).json({ message: "Can't update this car" });
    console.log(error);
  }
};

const deleteCarById = async function (req: Request, res: Response) {
  try {
    const result = await service.deleteCarById(req.params.id);
    res.status(200).json(result);
  } catch {
    res.status(400).json({ message: "Can't delete this car" });
  }
};

module.exports = {
  getAllCars,
  createCar,
  getCarById,
  deleteCarById,
  updateCar,
};
