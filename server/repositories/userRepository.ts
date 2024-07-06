import { Connection } from "mysql2";
import { User } from "../entities/User";
import { error } from "console";

const db: Connection = require("../dbConnection");

const createUser = async function (user: User) {
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
};

const findUserByEmail = async function (email: string) {
  const [result] = await db
    .promise()
    .execute(
      `SELECT userId, email, password FROM users WHERE email = "${email}"`
    );
  return result;
};

module.exports = {
  createUser,
  findUserByEmail,
};
