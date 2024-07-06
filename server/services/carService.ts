import { error } from "console";
import { Car } from "../entities/Car";

const repository = require("../repositories/carRepository");

const findAllCars = async function () {
  const result = await repository.findAllCars();
  return result;
};

const findCarById = async function (id: number) {
  const result = await repository.findCarById(id);
  return result;
};

const createCar = async function (car: Car) {
  const result = await repository.createCar(car);
  return result;
};

const updateCar = async function (car: Car) {
  const result = await repository.updateCar(car);
  return result;
};

const deleteCarById = async function (id: number) {
  const result = await repository.deleteCarById(id);
  return result;
};

module.exports = {
  findAllCars,
  createCar,
  findCarById,
  deleteCarById,
  updateCar,
};
