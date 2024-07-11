import { Router } from "express";

const express = require("express");
const router: Router = express.Router();
const controller = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");

router.route("/register").post(controller.registerUser);

router.route("/login").post(controller.loginUser);

router.route("/:id").get(verifyToken, controller.getUserById);

module.exports = router;
