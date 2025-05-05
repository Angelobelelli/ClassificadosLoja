import conexao from "../../conexao.js";

// Criar produto
export const criarProduto = async ({
	nome,
	preco,
	descricao,
	usuario_id,
	categoria_id,
}) => {
	const sql = `INSERT INTO products (nome, preco, descricao, usuario_id, categoria_id) VALUES (?, ?, ?, ?, ?)`;
	const params = [nome, preco, descricao, usuario_id, categoria_id];

	try {
		await conexao.query(sql, params);
		return [201, {mensagem: "Produto cadastrado com sucesso"}];
	} catch (error) {
		return tratarErro(error);
	}
};

// Listar produtos
export const listarProdutos = async () => {
	try {
		const [produtos] = await conexao.query("SELECT * FROM products");
		return [200, produtos];
	} catch (error) {
		return tratarErro(error);
	}
};

// Listar produtos por usuário
export const listarProdutosDoUsuario = async (usuario_id) => {
	try {
		const [produtos] = await conexao.query(
			"SELECT * FROM products WHERE usuario_id = ?",
			[usuario_id]
		);
		return [200, produtos];
	} catch (error) {
		return tratarErro(error);
	}
};

// Atualizar produto
export const atualizarProduto = async (id, novoNome) => {
	const sql = `UPDATE produtos SET nome_produto = ? WHERE id_produto = ?`;
	const params = [novoNome, id];

	try {
		const [resposta] = await conexao.query(sql, params);
		if (resposta.affectedRows < 1) {
			return [404, {mensagem: "Produto não encontrado"}];
		}
		return [200, {mensagem: "Produto atualizado com sucesso"}];
	} catch (error) {
		return tratarErro(error);
	}
};

// Deletar produto
export const deletarProduto = async (id) => {
	const sql = `DELETE FROM produtos WHERE id_produto = ?`;

	try {
		const [resposta] = await conexao.query(sql, [id]);
		if (resposta.affectedRows < 1) {
			return [404, {mensagem: "Produto não encontrado"}];
		}
		return [200, {mensagem: "Produto deletado com sucesso"}];
	} catch (error) {
		return tratarErro(error);
	}
};

// Tratamento de erro
const tratarErro = (error) => [
	500,
	{
		mensagem: "Erro Servidor",
		code: error.code,
		sql: error.sqlMessage,
	},
];
