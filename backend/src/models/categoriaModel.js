import conexao from "../../conexao.js";

export const listarCategorias = async () => {
	try {
		const [categorias] = await conexao.query("SELECT * FROM categories");
		return [200, categorias];
	} catch (error) {
		return tratarErro(error);
	}
};

const tratarErro = (error) => [
	500,
	{
		mensagem: "Erro Servidor",
		code: error.code,
		sql: error.sqlMessage,
	},
];
