import { error } from "console";
import { Connection } from "mysql2";

const db: Connection = require("../dbConnection");

const findAllCars = async function () {
  try {
    const [results, fields] = await db.promise().execute("SELECT * from cars");
    return results;
  } catch {
    throw error;
  }
};

module.exports = {
  findAllCars,
};
