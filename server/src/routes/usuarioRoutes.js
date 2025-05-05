import express from "express";
import {
	createUsers,
	readUsers,
	readUsersID,
	loginUsers
} from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/cadastrar", createUsers);
router.get("/", readUsers);
router.get("/:id", readUsersID);
router.post("/login", loginUsers);

export default router;
