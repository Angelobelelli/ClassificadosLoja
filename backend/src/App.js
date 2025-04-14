import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import produtoRoutes from "./routes/produtoRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/usuarios", usuarioRoutes);
app.use("/produtos", produtoRoutes);
app.use("/categorias", categoriaRoutes);

app.get("/", (req, res) => {
	res.send("API rodando com sucesso! 🚀");
});
app.get("/teste", (req, res) => {
	res.status(200).json({mensagem: "Funcionando!"});
});

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
