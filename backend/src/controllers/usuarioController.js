import * as Usuario from "../models/usuarioModel.js";

export const cadastrarUsuario = async (req, res) => {
	try {
		const [status, resposta] = await Usuario.criarUsuario(req.body);
		res.status(status).json(resposta);
	} catch (error) {
		console.error("Erro ao cadastrar usuário:", error);
		res.status(500).json({ mensagem: "Erro interno ao cadastrar usuário." });
	}
};

export const listarTodosUsuarios = async (req, res) => {
	try {
		const [status, resposta] = await Usuario.listarUsuarios();
		res.status(status).json(resposta);
	} catch (error) {
		console.error("Erro ao listar usuários:", error);
		res.status(500).json({ mensagem: "Erro interno ao listar usuários." });
	}
};

export const buscarUsuarioPorId = async (req, res) => {
	try {
		const { id } = req.params;
		const [status, resposta] = await Usuario.listarUsuarioPorId(id);
		res.status(status).json(resposta);
	} catch (error) {
		console.error("Erro ao buscar usuário por ID:", error);
		res.status(500).json({ mensagem: "Erro interno ao buscar usuário." });
	}
};

export const loginUsuario = async (req, res) => {
	try {
		const { email, senha } = req.body;
		const [status, resposta] = await Usuario.verificarUsuarioSenha(email, senha);
		res.status(status).json(resposta);
	} catch (error) {
		console.error("Erro ao fazer login:", error);
		res.status(500).json({ mensagem: "Erro interno ao fazer login." });
	}
};
