import * as Categoria from "../models/categoriaModel.js";

export const listarCategorias = async (req, res) => {
	const [status, resposta] = await Categoria.listarCategorias();
	res.status(status).json(resposta);
};
