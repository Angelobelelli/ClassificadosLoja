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
} from "../models/ProdutoModel.js";

//CRUD Produto
export const createProduto = async (req, res) => {
	console.log("ProdutoController :: createProduto");
	const nome = req.body.nome;
    const preco = req.body.preco;
    const descricao = req.body.descricao;
    const usuario_id = req.body.usuario_id;
    const categoria_id = req.body.categoria_id;

	try {
		const [status, resposta] = await criandoProduto(nome, preco, descricao, usuario_id, categoria_id);
		res.status(status).json(resposta);
	} catch (error) {
		//console.log(error);
		res.status(500).json({mensagem: "erro ao criar produto"});
	}
};
export const createUser = async (req, res) => {
    console.log("ProdutoController :: createUser");
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const whatsapp = req.body.whatsapp;
    const telefone = req.body.telefone;
    const cpf = req.body.cpf;
    const logo = req.body.logo;
    const descricao = req.body.descricao;
    const localizacao = req.body.localizacao;


    try {
        const [status, resposta] = await criandoUsuario(nome, email, senha, whatsapp, telefone, cpf, logo, descricao, localizacao);
        res.status(status).json(resposta);
    } catch (error) {
        //console.log(error);
        res.status(500).json({mensagem: "erro ao criar produto"});
    }
}
export const readUser = async (req, res) => {
	console.log("ProdutoController :: readUser");

	try {
		const [status, resposta] = await mostrarUsuarios();
		res.status(status).json(resposta);
	} catch (error) {
		//console.log(error);
		res.status(500).json({mensagem: "erro ao mostrar produto"});
	}
};
export const readUserById = async (req, res) => {
	console.log("ProdutoController :: readUserById");

	const id = req.params.id;

	try {
		const [status, resposta] = await mostrarUsuarioPorId(id);
		res.status(status).json(resposta);
	} catch (error) {
		res.status(500).json({mensagem: "Erro ao buscar usuário"});
	}
};

export const readProducts = async (req, res) => {
	console.log("ProdutoController :: readProducts");

	try {
		const [status, resposta] = await mostrarProdutos();
		res.status(status).json(resposta);
	} catch (error) {
		//console.log(error);
		res.status(500).json({mensagem: "erro ao mostrar produto"});
	}
};




export const readProductsByUser = async (req, res) => {
    console.log("ProdutoController :: readProductsByUser");

    const id = req.params.id; // Pegando o ID do usuário da URL

    try {
        const [status, resposta] = await mostrarProdutosDoUsuario(id);
        res.status(status).json(resposta);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar produtos do usuário" });
    }
};

export const readCategorys = async (req, res) => {
	console.log("ProdutoController :: readProducts");

	try {
		const [status, resposta] = await mostrarCategorias();
		res.status(status).json(resposta);
	} catch (error) {
		//console.log(error);
		res.status(500).json({mensagem: "erro ao mostrar produto"});
	}
};

export const updateProduto = async (req, res) => {
	console.log("ProdutoController :: updateProduto");
	const id_produto = req.params.id_produto;
	const nome = req.body.nome;

	try {
		const [status, resposta] = await atualizandoProduto(id_produto, nome);
		res.status(status).json(resposta);
	} catch (error) {
		//console.log(error);
		res.status(500).json({mensagem: "erro ao atualizar produto"});
	}
};

export const deleteProduto = async (req, res) => {
	console.log("ProdutoController :: deleteProduto");
	const id_produto = req.params.id_produto;

	try {
		const [status, resposta] = await deletandoProduto(id_produto);
		res.status(status).json(resposta);
	} catch (error) {
		//console.log(error);
		res.status(500).json({mensagem: "erro ao deletar produto"});
	}
};
