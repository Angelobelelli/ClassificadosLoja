import express from "express";
import {
	cadastrarProduto,
	listarTodosProdutos,
	listarProdutosPorUsuario,
	atualizarProduto,
	excluirProduto,
} from "../controllers/produtoController.js";

const router = express.Router();

router.post("/", cadastrarProduto);
router.get("/users", listarTodosProdutos);
router.get("/usuario/:usuario_id", listarProdutosPorUsuario);
router.put("/:id", atualizarProduto);
router.delete("/:id", excluirProduto);

export default router;
