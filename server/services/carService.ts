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

const findCarById = async function (id: number) {
  try {
    const result = await repository.findCarById(id);
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

const updateCar = async function (car: Car) {
  try {
    const result = await repository.updateCar(car);
    return result;
  } catch {
    throw error;
  }
};

const deleteCarById = async function (id: number) {
  try {
    const result = await repository.deleteCarById(id);
    return result;
  } catch {
    throw error;
  }
};

module.exports = {
  findAllCars,
  createCar,
  findCarById,
  deleteCarById,
  updateCar,
};
