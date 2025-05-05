import * as Produto from "../models/produtoModel.js";

export const cadastrarProduto = async (req, res) => {
	const [status, resposta] = await Produto.criarProduto(req.body);
	res.status(status).json(resposta);
};

export const listarTodosProdutos = async (req, res) => {
	const [status, resposta] = await Produto.listarProdutos();
	res.status(status).json(resposta);
};

export const listarProdutosPorUsuario = async (req, res) => {
	const { usuario_id } = req.params;
	const [status, resposta] = await Produto.listarProdutosDoUsuario(usuario_id);
	res.status(status).json(resposta);
};

export const atualizarProduto = async (req, res) => {
	const { id } = req.params;
	const { novoNome } = req.body;
	const [status, resposta] = await Produto.atualizarProduto(id, novoNome);
	res.status(status).json(resposta);
};

export const excluirProduto = async (req, res) => {
	const { id } = req.params;
	const [status, resposta] = await Produto.deletarProduto(id);
	res.status(status).json(resposta);
};
