import { Router } from "express";

const express = require("express");
const router: Router = express.Router();
const controller = require("../controllers/userController");

router.route("/register").post(controller.registerUser);

router.route("/login").post(controller.loginUser);

router.route("/:id").get(controller.getUserById);

module.exports = router;
