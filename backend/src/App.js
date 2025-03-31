import express from "express";
import {
	createProduto,
	deleteProduto,
	readUser,
	updateProduto,
	readProducts,
	readCategorys,
	readUserById,
    createUser,
    readProductsByUser
} from "./controllers/ProdutoController.js";

const app = express();
const port = 3001;
app.use(express.json());

app.get("/", (req, res) => {
	res.send("API Funcionando");
});

//CRUD Produto
app.post("/produto", createProduto);
app.post("/usuario", createUser);

app.get("/user/produts/:id", readProductsByUser)
app.get("/users", readUser);
app.get("/user/:id", readUserById);
app.get("/products", readProducts);
app.get("/categories", readCategorys);

app.put("/produto/:id_produto", updateProduto);
app.delete("/produto/:id_produto", deleteProduto);

app.listen(port, () => {
	console.log(`API Rodando na porta ${port}`);
});
