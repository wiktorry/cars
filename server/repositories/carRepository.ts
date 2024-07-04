import { error } from "console";
import { Connection } from "mysql2";
import { Car } from "../entities/Car";

const db: Connection = require("../dbConnection");

const findAllCars = async function () {
  try {
    const [result, fields] = await db.promise().execute("SELECT * from cars");
    return result;
  } catch {
    throw error;
  }
};

const createCar = async function (car: Car) {
  try {
    const [result]: any = await db
      .promise()
      .execute(
        `INSERT INTO cars (carId, brand, model) VALUES (NULL, "${car.brand}", "${car.model}")`
      );
    console.log(result);
    const newCar = await db
      .promise()
      .execute(`SELECT * FROM cars WHERE carId = ${result.insertId}`);
    return newCar;
  } catch {
    throw error;
  }
};

module.exports = {
  findAllCars,
  createCar,
};
