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
					const {logradouro, complemento, bairro, localidade, uf} =
						response.data;

					setValue("logradouro", logradouro);
					setValue("complemento", complemento);
					setValue("bairro", bairro);
					setValue("localidade", localidade);
					setValue("uf", uf);
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
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white p-6 rounded-2xl shadow-md w-full max-w-2xl space-y-4"
			>
				<h2 className="text-2xl font-bold text-center">Cadastro de Usuário</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<input
						{...register("nome", {required: true})}
						placeholder="Nome"
						className="p-2 border rounded"
					/>
					<input
						{...register("email", {required: true})}
						placeholder="Email"
						className="p-2 border rounded"
					/>
					<input
						{...register("senha", {required: true})}
						placeholder="Senha"
						type="password"
						className="p-2 border rounded"
					/>
					<input
						{...register("cpf", {required: true})}
						placeholder="CPF"
						className="p-2 border rounded"
					/>
					<input
						{...register("whatsapp")}
						placeholder="WhatsApp"
						className="p-2 border rounded"
					/>
					<input
						{...register("telefone")}
						placeholder="Telefone"
						className="p-2 border rounded"
					/>
					<input
						{...register("image")}
						placeholder="URL da imagem"
						className="p-2 border rounded"
					/>
					<input
						{...register("logo")}
						placeholder="URL do logo"
						className="p-2 border rounded"
					/>
				</div>

				<textarea
					{...register("descricao")}
					placeholder="Descrição"
					className="w-full p-2 border rounded h-24"
				/>

				<h3 className="text-lg font-semibold mt-4">Endereço</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<input
						{...register("cep")}
						placeholder="CEP"
						className="p-2 border rounded"
					/>
					<input
						{...register("logradouro")}
						placeholder="Logradouro"
						className="p-2 border rounded"
					/>
					<input
						{...register("complemento")}
						placeholder="Complemento"
						className="p-2 border rounded"
					/>
					<input
						{...register("bairro")}
						placeholder="Bairro"
						className="p-2 border rounded"
					/>
					<input
						{...register("localidade")}
						placeholder="Cidade"
						className="p-2 border rounded"
					/>
					<input
						{...register("uf")}
						placeholder="UF"
						className="p-2 border rounded"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
				>
					Cadastrar Usuário
				</button>
			</form>
		</div>
	);
};

export default CadastroUsuario;
