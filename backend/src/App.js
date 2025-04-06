import express from "express";
import cors from "cors";

import {
  createProduto,
  deleteProduto,
  readUser,
  updateProduto,
  readProducts,
  readCategorys,
  readUserById,
  createUser,
  readProductsByUser,
} from "./controllers/ProdutoController.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get("/", (req, res) => res.send("API Funcionando"));

// Rotas de Produto
app.post("/produto", createProduto);
app.put("/produto/:id_produto", updateProduto);
app.delete("/produto/:id_produto", deleteProduto);
app.get("/products", readProducts);
app.get("/categories", readCategorys);

// Rotas de Usuário
app.post("/usuario", createUser);
app.get("/users", readUser);
app.get("/user/:id", readUserById);
app.get("/user/produts/:id", readProductsByUser);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
