import { error } from "console";
import { Request, Response } from "express";

const service = require("../services/carService");

const getAllCars = async function (req: Request, res: Response) {
  try {
    const results = await service.findAllCars();
    res.send(results);
  } catch {
    console.log(error);
  }
};

module.exports = {
  getAllCars,
};
