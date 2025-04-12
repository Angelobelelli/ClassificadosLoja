import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import api from "../api/api";

const CadastroUsuario = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: {errors},
	} = useForm();

	const cep = watch("cep");

	useEffect(() => {
		const buscarEndereco = async () => {
			if (cep && cep.length === 8) {
				try {
					const response = await axios.get(
						`https://viacep.com.br/ws/${cep}/json/`
					);
					const {logradouro, complemento, bairro, localidade, uf, numero} =
						response.data;

					setValue("logradouro", logradouro);
					setValue("complemento", complemento);
					setValue("bairro", bairro);
					setValue("localidade", localidade);
					setValue("uf", uf);
					setValue("numero", numero); // Limpa o campo número
				} catch (error) {
					console.error("Erro ao buscar CEP:", error);
				}
			}
		};

		buscarEndereco();
	}, [cep, setValue]);

	const onSubmit = (data) => {
		console.log("Dados enviados:", data);

		api
			.post("/usuario", data)
			.then((response) => {
				alert("Usuário cadastrado com sucesso!");
				reset();
			})
			.catch((error) => {
				alert("Erro ao cadastrar usuário.");
				console.error("Erro:", error);
				if (error.response) {
					console.error("Resposta da API:", error.response.data);
				}
			});
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-3xl space-y-6"
			>
				<h2 className="text-3xl font-bold text-center text-blue-600">
					Cadastro de Usuário
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<input
						{...register("nome", {required: true})}
						placeholder="Nome"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("email", {required: true})}
						placeholder="Email"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("senha", {required: true})}
						type="password"
						placeholder="Senha"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("cpf", {required: true})}
						placeholder="CPF"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("whatsapp")}
						placeholder="WhatsApp"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("telefone")}
						placeholder="Telefone"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("image")}
						placeholder="URL da imagem"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("logo")}
						placeholder="URL do logo"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<textarea
					{...register("descricao")}
					placeholder="Descrição"
					className="w-full p-3 border border-gray-300 rounded-xl h-24 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				/>

				<h3 className="text-xl font-semibold text-blue-600 mt-6">Endereço</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<input
						{...register("cep")}
						placeholder="CEP"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("logradouro")}
						placeholder="Logradouro"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("numero")}
						placeholder="Número"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("complemento")}
						placeholder="Complemento"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("bairro")}
						placeholder="Bairro"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("localidade")}
						placeholder="Cidade"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<input
						{...register("uf")}
						placeholder="UF"
						className="p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105"
				>
					Cadastrar Usuário
				</button>
			</form>
		</div>
	);
};

export default CadastroUsuario;
