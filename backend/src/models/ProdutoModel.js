import db from "../conexao.js";
import mysql from "mysql2/promise";

//Criando conexão com a databse inet
const conexao = mysql.createPool(db);

//Criando Produto
export const criandoProduto = async (nome, preco, descricao, usuario_id, categoria_id) => {
	console.log("ProdutoModel :: criandoProduto");

	//SQl de Inserção
	const sql = `INSERT INTO 
                    products (nome, preco, descricao, usuario_id, categoria_id)
                    VALUES (?, ?, ?, ?, ?)`;

	//parametros de inserção
	const params = [nome, preco, descricao, usuario_id, categoria_id];

	try {
		const [resposta] = await conexao.query(sql, params);
		//console.log(resposta)
		return [201, {resposta: "Produto cadastrado com sucesso"}];
	} catch (error) {
		//console.error(error);
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
export const criandoUsuario = async (nome, email, senha, whatsapp, telefone, cpf, logo, descricao, cep, logradouro, numero, bairro, uf, complemento ,localidade ) => {
	console.log("ProdutoModel :: criandoUsuario");

	//SQl de Inserção
	const sql = `INSERT INTO 
                    users (nome, email, senha, whatsapp, telefone, cpf, logo, descricao, cep, logradouro, numero, bairro, uf, complemento, localidade)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

	//parametros de inserção
	const params = [nome, email, senha, whatsapp, telefone, cpf, logo, descricao, cep, logradouro, numero, bairro, uf, complemento, localidade];

	try {
		const [resposta] = await conexao.query(sql, params);
		//console.log(resposta)
		return [201, {resposta: "Usuário cadastrado com sucesso"}];
	} catch (error) {
		//console.error(error);
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

//Mostrando produtos da Tabela produtos
export const mostrarUsuarios = async () => {
	console.log("ProdutoModel :: mostrarUsuarios");

	//SQL Para realizar consulta
	const sql = "SELECT * FROM users";
	try {
		//Pegando primeiro array de resposta
		const [resposta] = await conexao.query(sql);
		//console.log(resposta);
		return [200, resposta];
	} catch (error) {
		//console.error(error);
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

export const mostrarProdutos = async () => {
	console.log("ProdutoModel :: mostrarProdutos");

	//SQL Para realizar consulta
	const sql = "SELECT * FROM products";
	try {
		//Pegando primeiro array de resposta
		const [resposta] = await conexao.query(sql);
		//console.log(resposta);
		return [200, resposta];
	} catch (error) {
		//console.error(error);
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
export const mostrarProdutosDoUsuario = async (id) => {
    console.log("ProdutoModel :: mostrarProdutosDoUsuario");

    const sql = "SELECT * FROM products WHERE usuario_id = ?";
    const params = [id];

    try {
        const [resposta] = await conexao.query(sql, params);
        return [200, resposta];
    } catch (error) {
        return [500, {
            mensagem: "Erro Servidor",
            code: error.code,
            sql: error.sqlMessage
        }];
    }
};
export const mostrarCategorias = async () => {
	console.log("ProdutoModel :: mostrarCategorias");

	//SQL Para realizar consulta
	const sql = "SELECT * FROM categories";
	try {
		//Pegando primeiro array de resposta
		const [resposta] = await conexao.query(sql);
		//console.log(resposta);
		return [200, resposta];
	} catch (error) {
		//console.error(error);
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

export const atualizandoProduto = async (id_produto, nomeProduto) => {
	console.log("ProdutoModel :: atualizandoProduto");

	//SQL Update produto
	const sql = `UPDATE produtos SET nome_produto = ? WHERE id_produto = ?`;

	const params = [nomeProduto, id_produto];

	try {
		const [resposta] = await conexao.query(sql, params);
		//console.log(resposta);
		if (resposta.affectedRows < 1) {
			return [404, {mensagem: "Produto não encontrado"}];
		} else {
			return [200, {mensagem: "Produto atualizado com sucesso"}];
		}
	} catch (error) {
		//console.error(error);
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

export const deletandoProduto = async (id_produto) => {
	console.log("ProdutoModel :: deletandoProduto");

	//SQL Deletando Produto
	const sql = `DELETE FROM produtos WHERE id_produto = ?`;

	const params = [id_produto];

	try {
		const [resposta] = await conexao.query(sql, params);
		//console.log(resposta);
		if (resposta.affectedRows < 1) {
			return [404, {mensagem: "Produto não encontrado"}];
		} else {
			return [200, {mensagem: "Produto deletado com sucesso"}];
		}
	} catch (error) {
		//console.error(error);
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
//console.log(await deletandoProduto(7));
//atualizandoProduto(6,'tangirina');
//criandoProduto('melancia');
//mostrarProdutos();
