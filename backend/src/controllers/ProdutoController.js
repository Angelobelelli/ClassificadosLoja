import {
	atualizandoProduto,
	criandoProduto,
	deletandoProduto,
	mostrarUsuarios,
	mostrarProdutos,
	mostrarCategorias,
	mostrarUsuarioPorId,
	criandoUsuario,
	mostrarProdutosDoUsuario,
	verificarUsuarioSenha,
} from "../models/ProdutoModel.js";

// Função utilitária para tratar requisições com try/catch
const handleRequest = async (res, fn) => {
	try {
		const [status, resposta] = await fn();
		return res.status(status).json(resposta);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ mensagem: "Erro interno no servidor" });
	}
};

// CRUD Produto
export const createProduto = async (req, res) => {
	console.log("ProdutoController :: createProduto");

	const { nome, preco, descricao, usuario_id, categoria_id } = req.body;

	await handleRequest(res, () =>
		criandoProduto(nome, preco, descricao, usuario_id, categoria_id)
	);
};

export const createUser = async (req, res) => {
	console.log("ProdutoController :: createUser");

	const {
		nome, email, senha, whatsapp, telefone, cpf, logo,
		descricao, cep, logradouro, numero, bairro, uf, complemento, localidade
	} = req.body;

	await handleRequest(res, () =>
		criandoUsuario(
			nome, email, senha, whatsapp, telefone, cpf, logo,
			descricao, cep, logradouro, numero, bairro, uf, complemento, localidade
		)
	);
};

export const readUser = async (req, res) => {
	console.log("ProdutoController :: readUser");
	await handleRequest(res, mostrarUsuarios);
};

export const readUserById = async (req, res) => {
	console.log("ProdutoController :: readUserById");
	const { id } = req.params;
	await handleRequest(res, () => mostrarUsuarioPorId(id));
};

export const readProducts = async (req, res) => {
	console.log("ProdutoController :: readProducts");
	await handleRequest(res, mostrarProdutos);
};

export const readProductsByUser = async (req, res) => {
	console.log("ProdutoController :: readProductsByUser");
	const { id } = req.params;
	await handleRequest(res, () => mostrarProdutosDoUsuario(id));
};

export const readCategorys = async (req, res) => {
	console.log("ProdutoController :: readCategorys");
	await handleRequest(res, mostrarCategorias);
};

export const updateProduto = async (req, res) => {
	console.log("ProdutoController :: updateProduto");
	const { id_produto } = req.params;
	const { nome } = req.body;

	await handleRequest(res, () => atualizandoProduto(id_produto, nome));
};

export const deleteProduto = async (req, res) => {
	console.log("ProdutoController :: deleteProduto");
	const { id_produto } = req.params;

	await handleRequest(res, () => deletandoProduto(id_produto));
};

export const login = async (req, res) => {
	console.log("UsuarioController :: login");
	const { email, senha } = req.body;

	await handleRequest(res, () => verificarUsuarioSenha(email, senha));
};
