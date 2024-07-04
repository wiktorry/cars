import { error } from "console";
import { Car } from "../entities/Car";

const repository = require("../repositories/carRepository");

const findAllCars = async function () {
  try {
    const result = await repository.findAllCars();
    return result;
  } catch {
    throw error;
  }
};

const createCar = async function (car: Car) {
  try {
    const result = await repository.createCar(car);
    return result;
  } catch {
    throw error;
  }
};

module.exports = {
  findAllCars,
  createCar,
};
