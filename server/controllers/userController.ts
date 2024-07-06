import { Request, Response } from "express";

const service = require("../services/userService");

const registerUser = async function (req: Request, res: Response) {
  try {
    const result = await service.registerUser(req.body);
    res.status(200).json(result);
  } catch {
    res
      .status(400)
      .json({ message: "Can't register user with this login and password" });
  }
};

const loginUser = async function (req: Request, res: Response) {
  try {
    const result = await service.loginUser(req.body);
    res.status(200).json(result);
  } catch {
    res.status(400).json({ message: "Wrong login or password" });
  }
};

const getUserById = async function (req: Request, res: Response) {
  try {
    const result = await service.getUserById(req);
    res.status(200).json(result);
  } catch {
    res.status(403).json({ message: "Access denied" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserById,
};
