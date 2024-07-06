import { Connection } from "mysql2";
import { User } from "../entities/User";
import { error } from "console";

const db: Connection = require("../dbConnection");

const createUser = async function (user: User) {
  try {
    const [result]: any = await db
      .promise()
      .execute(
        `INSERT INTO users (userId, email, password) VALUES (NULL, "${user.email}", "${user.password}")`
      );
    const newUser = await db
      .promise()
      .execute(
        `SELECT userId, email FROM users WHERE userId = ${result.insertId}`
      );
    return newUser;
  } catch {
    throw error;
  }
};

const findUserByEmail = async function (email: string) {
  try {
    const [result] = await db
      .promise()
      .execute(
        `SELECT userId, email, password FROM users WHERE email = "${email}"`
      );
    return result;
  } catch {
    throw error;
  }
};

module.exports = {
  createUser,
  findUserByEmail,
};
