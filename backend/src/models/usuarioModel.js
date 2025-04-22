import conexao from "../../conexao.js";
import bcrypt from "bcryptjs";

// Criar usuário
export const criarUsuario = async (dados) => {
	const {
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
		localidade,
	} = dados;

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
		await conexao.query(sql, params);
		return [201, {mensagem: "Usuário cadastrado com sucesso"}];
	} catch (error) {
		return tratarErro(error);
	}
};

// Listar todos usuários
export const listarUsuarios = async () => {
	try {
		const [usuarios] = await conexao.query("SELECT * FROM users");
		return [200, usuarios];
	} catch (error) {
		return tratarErro(error);
	}
};

// Listar por ID
export const listarUsuarioPorId = async (id) => {
	try {
		const [resposta] = await conexao.query("SELECT * FROM users WHERE id = ?", [
			id,
		]);
		if (resposta.length === 0) {
			return [404, {mensagem: "Usuário não encontrado"}];
		}
		return [200, resposta[0]];
	} catch (error) {
		return tratarErro(error);
	}
};

// Verificar login
export const verificarUsuarioSenha = async (email, senha) => {
	try {
		const [resposta] = await conexao.query(
			"SELECT * FROM users WHERE email = ?",
			[email]
		);
		if (resposta.length < 1) {
			return [401, {mensagem: "Usuário não encontrado"}];
		}

		const hash = resposta[0].senha;
		const autenticado = bcrypt.compareSync(senha, hash);

		if (autenticado) {
			return [
				200,
				{mensagem: "Usuário logado", id_usuario: resposta[0].id_usuario},
			];
		} else {
			return [404, {mensagem: "Dados Incorretos"}];
		}
	} catch (error) {
		return tratarErro(error);
	}
};

// Tratamento de erro
const tratarErro = (error) => {
	console.error("Erro no servidor:", error); // Log completo no terminal

	// Mensagem padrão
	let mensagem = "Erro interno no servidor.";

	// Mensagens específicas
	if (error.code === "ER_DUP_ENTRY") {
		mensagem = "Já existe um registro com esses dados.";
	} else if (error.code === "ER_BAD_NULL_ERROR") {
		mensagem = "Campo obrigatório não foi preenchido.";
	} else if (error.code === "ER_NO_REFERENCED_ROW_2") {
		mensagem = "Chave estrangeira inválida.";
	} else if (error.code === "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD") {
		mensagem = "Formato inválido para algum campo.";
	}

	return [
		500,
		{
			mensagem,
			erroDetalhado:
				process.env.NODE_ENV === "development" ? error.message : undefined,
		},
	];
};
