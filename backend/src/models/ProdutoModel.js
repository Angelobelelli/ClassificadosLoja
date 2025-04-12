import db from "../conexao.js";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

// Criando pool de conexão
const conexao = mysql.createPool(db);

// Criar Produto
export const criandoProduto = async (
	nome,
	preco,
	descricao,
	usuario_id,
	categoria_id
) => {
	console.log("ProdutoModel :: criandoProduto");

	const sql = `INSERT INTO products (nome, preco, descricao, usuario_id, categoria_id)
	             VALUES (?, ?, ?, ?, ?)`;
	const params = [nome, preco, descricao, usuario_id, categoria_id];

	try {
		const [resposta] = await conexao.query(sql, params);
		return [201, {resposta: "Produto cadastrado com sucesso"}];
	} catch (error) {
		return [
			500,
			{
				mensagem: "Erro Servidor",
				code: error.code,
				sql: error.sqlMessage,
			},
		];
	}
};

// Criar Usuário
export const criandoUsuario = async (
	nome,
	email,
	senha,
	whatsapp,
	telefone,
	cpf,
	logo,
	descricao,
	cep,
	logradouro,
	numero,
	bairro,
	uf,
	complemento,
	localidade
) => {
	console.log("ProdutoModel :: criandoUsuario");

	const hash = bcrypt.hashSync(senha, bcrypt.genSaltSync(10));

	const sql = `INSERT INTO users (
		nome, email, senha, whatsapp, telefone, cpf, logo, descricao,
		cep, logradouro, numero, bairro, uf, complemento, localidade
	) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

	const params = [
		nome,
		email,
		hash,
		whatsapp,
		telefone,
		cpf,
		logo,
		descricao,
		cep,
		logradouro,
		numero,
		bairro,
		uf,
		complemento,
		localidade,
	];

	try {
		const [resposta] = await conexao.query(sql, params);
		return [201, {resposta: "Usuário cadastrado com sucesso"}];
	} catch (error) {
		return [
			500,
			{
				mensagem: "Erro Servidor",
				code: error.code,
				sql: error.sqlMessage,
			},
		];
	}
};

// Listar todos os usuários
export const mostrarUsuarios = async () => {
	console.log("ProdutoModel :: mostrarUsuarios");

	const sql = "SELECT * FROM users";

	try {
		const [resposta] = await conexao.query(sql);
		return [200, resposta];
	} catch (error) {
		return [
			500,
			{
				mensagem: "Erro Servidor",
				code: error.code,
				sql: error.sqlMessage,
			},
		];
	}
};

// Listar usuário por ID
export const mostrarUsuarioPorId = async (id) => {
	console.log("ProdutoModel :: mostrarUsuarioPorId");

	const sql = "SELECT * FROM users WHERE id = ?";

	try {
		const [resposta] = await conexao.query(sql, [id]);

		if (resposta.length === 0) {
			return [404, {mensagem: "Usuário não encontrado"}];
		}

		return [200, resposta[0]];
	} catch (error) {
		return [
			500,
			{
				mensagem: "Erro Servidor",
				code: error.code,
				sql: error.sqlMessage,
			},
		];
	}
};

// Listar todos os produtos
export const mostrarProdutos = async () => {
	console.log("ProdutoModel :: mostrarProdutos");

	const sql = "SELECT * FROM products";

	try {
		const [resposta] = await conexao.query(sql);
		return [200, resposta];
	} catch (error) {
		return [
			500,
			{
				mensagem: "Erro Servidor",
				code: error.code,
				sql: error.sqlMessage,
			},
		];
	}
};

// Listar produtos de um usuário
export const mostrarProdutosDoUsuario = async (id) => {
	console.log("ProdutoModel :: mostrarProdutosDoUsuario");

	const sql = "SELECT * FROM products WHERE usuario_id = ?";
	const params = [id];

	try {
		const [resposta] = await conexao.query(sql, params);
		return [200, resposta];
	} catch (error) {
		return [
			500,
			{
				mensagem: "Erro Servidor",
				code: error.code,
				sql: error.sqlMessage,
			},
		];
	}
};

// Listar todas as categorias
export const mostrarCategorias = async () => {
	console.log("ProdutoModel :: mostrarCategorias");

	const sql = "SELECT * FROM categories";

	try {
		const [resposta] = await conexao.query(sql);
		return [200, resposta];
	} catch (error) {
		return [
			500,
			{
				mensagem: "Erro Servidor",
				code: error.code,
				sql: error.sqlMessage,
			},
		];
	}
};

// Atualizar nome de um produto
export const atualizandoProduto = async (id_produto, nomeProduto) => {
	console.log("ProdutoModel :: atualizandoProduto");

	const sql = `UPDATE produtos SET nome_produto = ? WHERE id_produto = ?`;
	const params = [nomeProduto, id_produto];

	try {
		const [resposta] = await conexao.query(sql, params);

		if (resposta.affectedRows < 1) {
			return [404, {mensagem: "Produto não encontrado"}];
		}

		return [200, {mensagem: "Produto atualizado com sucesso"}];
	} catch (error) {
		return [
			500,
			{
				mensagem: "Erro Servidor",
				code: error.code,
				sql: error.sqlMessage,
			},
		];
	}
};

// Deletar produto por ID
export const deletandoProduto = async (id_produto) => {
	console.log("ProdutoModel :: deletandoProduto");

	const sql = `DELETE FROM produtos WHERE id_produto = ?`;
	const params = [id_produto];

	try {
		const [resposta] = await conexao.query(sql, params);

		if (resposta.affectedRows < 1) {
			return [404, {mensagem: "Produto não encontrado"}];
		}

		return [200, {mensagem: "Produto deletado com sucesso"}];
	} catch (error) {
		return [
			500,
			{
				mensagem: "Erro Servidor",
				code: error.code,
				sql: error.sqlMessage,
			},
		];
	}
};

export const verificarUsuarioSenha = async (email, senha) => {
	console.log("UsuarioModel :: verificarUsuarioSenha");

	// Corrigindo a consulta para buscar o nome na tabela correta
	const sql = `SELECT * FROM users WHERE email=?`; // Certifique-se de que a tabela se chama 'users'
	const params = [email]; // Passando o email corretamente

	try {
		const [resposta] = await conexao.query(sql, params);

		if (resposta.length < 1) {
			return [401, {mensagem: "Usuário não encontrado!!!"}];
		}

		const hash = resposta[0].senha;

		// Log para debugar
		console.log("Senha enviada:", senha);
		console.log("Hash no banco:", hash);

		// Comparação da senha
		const autenticado = bcrypt.compareSync(senha, hash);

		// Resultado da comparação
		console.log("Resultado da comparação:", autenticado);

		if (autenticado) {
			return [
				200,
				{mensagem: "Usuário logado", id_usuario: resposta[0].id_usuario},
			];
		} else {
			return [401, {mensagem: "Senha incorreta"}];
		}
	} catch (error) {
		console.error({
			mensagem: "Erro Servidor",
			code: error.code,
			sql: error.sqlMessage, // Corrigindo o campo para sqlMessage
		});
		return [
			500,
			{mensagem: "Erro Servidor", code: error.code, sql: error.sqlMessage},
		];
	}
};
