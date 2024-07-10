import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");

const verifyToken = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    const decodedToken = await jwt.verify(token, "secret");
    req.body.userId = decodedToken.userId;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
