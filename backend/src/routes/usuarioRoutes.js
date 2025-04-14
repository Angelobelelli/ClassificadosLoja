import express from "express";
import {
	cadastrarUsuario,
	listarTodosUsuarios,
	buscarUsuarioPorId,
	loginUsuario,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/cadastrar", cadastrarUsuario);
router.get("/", listarTodosUsuarios);
router.get("/:id", buscarUsuarioPorId);
router.post("/login", loginUsuario);

export default router;
