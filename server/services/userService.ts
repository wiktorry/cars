import { error } from "console";
import { User } from "../entities/User";
import { Request, Response } from "express";

const repository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async function (user: User) {
  const saltRounds: number = 10;
  const hash = await bcrypt.hash(user.password, saltRounds);
  user.password = hash;
  return await repository.createUser(user);
};

const loginUser = async function (user: User) {
  const userDB = await repository.findUserByEmail(user.email);
  if (!userDB) {
    return "Authentication failed";
  }
  const passwordCheck = await bcrypt.compare(user.password, userDB[0].password);
  if (!passwordCheck) {
    return "Authentication failed";
  }
  const token: string = await jwt.sign({ userId: userDB[0].userId }, "secret", {
    expiresIn: "1h",
  });
  console.log(token);
  return "Authentication succeed";
};

const verifyToken = async function (req: Request) {
  const token = req.header("Authorization")?.split(" ")[1];
  const decodedToken = await jwt.verify(token, "secret");
  return decodedToken;
};

const getUserById = async function (req: Request) {
  const token = await verifyToken(req);
  if (!(token.userId == req.params.id)) {
    throw error;
  }
  return repository.findUserById(req.params.id);
};

module.exports = {
  registerUser,
  loginUser,
  getUserById,
};
