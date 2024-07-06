import { Request, Response } from "express";

const service = require("../services/userService");

const registerUser = async function (req: Request, res: Response) {
  try {
    const result = await service.registerUser(req.body);
    res.status(200).json(result);
  } catch {
    res.status(400).json({ message: "" });
  }
};

const loginUser = async function (req: Request, res: Response) {
  try {
    const result = await service.loginUser(req.body);
    res.status(200).json(result);
  } catch {
    res.status(400).json({ message: "" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
