import * as Usuario from "../models/usuarioModel.js";

export const cadastrarUsuario = async (req, res) => {
	const [status, resposta] = await Usuario.criarUsuario(req.body);
	res.status(status).json(resposta);
};

export const listarTodosUsuarios = async (req, res) => {
	const [status, resposta] = await Usuario.listarUsuarios();
	res.status(status).json(resposta);
};

export const buscarUsuarioPorId = async (req, res) => {
	const { id } = req.params;
	const [status, resposta] = await Usuario.listarUsuarioPorId(id);
	res.status(status).json(resposta);
};

export const loginUsuario = async (req, res) => {
	const { email, senha } = req.body;
	const [status, resposta] = await Usuario.verificarUsuarioSenha(email, senha);
	res.status(status).json(resposta);
};
