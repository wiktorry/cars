import { error } from "console";
import { User } from "../entities/User";

const repository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async function (user: User) {
  try {
    const saltRounds: number = 10;
    const hash = await bcrypt.hash(user.password, saltRounds);
    user.password = hash;
    return await repository.createUser(user);
  } catch {
    throw error;
  }
};

const loginUser = async function (user: User) {
  try {
    const userDB = await repository.findUserByEmail(user.email);
    if (!userDB) {
      return "Authentication failed";
    }
    const passwordCheck = await bcrypt.compare(
      user.password,
      userDB[0].password
    );
    if (!passwordCheck) {
      return "Authentication failed";
    }
    const token: string = await jwt.sign({ userId: userDB.id }, "secret", {
      expiresIn: "1h",
    });
    console.log(token);
    return "Authentication succeed";
  } catch {
    throw error;
  }
};

module.exports = {
  registerUser,
  loginUser,
};
