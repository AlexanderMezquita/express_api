import express from "express";
import {
  postUser,
  deleteUser,
  getUserById,
  getUsers,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", postUser);

// users/2 => res.params {id: 2}

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

export default router;
