import { error } from "console";

const repository = require("../repositories/carRepository");

const findAllCars = async function () {
  try {
    const results = await repository.findAllCars();
    return results;
  } catch {
    console.log(error);
  }
};

module.exports = {
  findAllCars,
};
