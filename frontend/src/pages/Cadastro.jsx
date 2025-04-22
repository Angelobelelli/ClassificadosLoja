import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import api from "../api/api";
import {useNavigate} from "react-router";
import validator from "validator";

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
	let navigate = useNavigate();
	const onSubmit = (data) => {
		console.log("Dados enviados:", data);

		api
			.post("/users/cadastrar", data)
			.then((response) => {
				if (response.status === 201) {
					return navigate("/login");
				}
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
		<div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-3xl space-y-6 text-start"
			>
				<h2 className="text-4xl font-bold text-center text-blue-700">
					Cadastro de Usuário
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="flex flex-col">
						<label className="font-medium text-gray-700">Nome</label>
						<input
							{...register("nome", {required: true})}
							placeholder="Digite seu nome"
							className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
						/>
						{errors?.nome && (
							<p className="text-red-500 text-sm">Nome é obrigatório.</p>
						)}
					</div>

					<div className="flex flex-col">
						<label className="font-medium text-gray-700">Email</label>
						<input
							type="email"
							placeholder="Digite seu email"
							{...register("email", {
								required: true,
								validate: (value) => validator.isEmail(value),
							})}
							className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
						/>
						{errors?.email?.type === "required" && (
							<p className="text-red-500 text-sm">Email é obrigatório.</p>
						)}
						{errors?.email?.type === "validate" && (
							<p className="text-red-500 text-sm">Email não é validado.</p>
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="flex flex-col">
						<label className="font-medium text-gray-700">Senha</label>
						<input
							{...register("senha", {required: true, minLength: 6})}
							type="password"
							placeholder="Digite sua senha"
							className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
						/>
						{errors?.senha?.type === "minLength" && (
							<p className="text-red-500 text-sm">
								A senha deve ter pelo menos 6 caracteres.
							</p>
						)}
						{errors?.senha?.type === "required" && (
							<p className="text-red-500 text-sm">A senha é obrigatória.</p>
						)}
					</div>

					<div className="flex flex-col">
						<label className="font-medium text-gray-700">CPF</label>
						<input
							{...register("cpf", {required: true})}
							placeholder="Digite seu CPF"
							className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
						/>
						{errors?.cpf && (
							<p className="text-red-500 text-sm">CPF é obrigatório.</p>
						)}
					</div>

					<div className="flex flex-col">
						<label className="font-medium text-gray-700">Whastapp</label>
						<input
							{...register("whatsapp", {required: true})}
							placeholder="Digite seu Whatsapp"
							className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
						/>
						{errors?.whatsapp && (
							<p className="text-red-500 text-sm">Whatsapp é obrigatório.</p>
						)}
					</div>
					<div className="flex flex-col">
						<label className="font-medium text-gray-700">Telefone</label>
						<input
							{...register("telefone", {required: true})}
							placeholder="Digite seu telefone"
							className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
						/>
						{errors?.telefone && (
							<p className="text-red-500 text-sm">Telefone é obrigatório.</p>
						)}
					</div>
					<div className="flex flex-col">
						<label className="font-medium text-gray-700">Imagem</label>
						<input
							{...register("image", {required: true})}
							placeholder="Carrege sua imagem"
							className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
						/>
						{errors?.image && (
							<p className="text-red-500 text-sm">Imagem é obrigatório.</p>
						)}
					</div>
					<div className="flex flex-col">
						<label className="font-medium text-gray-700">Logo</label>
						<input
							{...register("logo", {required: true})}
							placeholder="Carrege sua logo"
							className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
						/>
						{errors?.logo && (
							<p className="text-red-500 text-sm">Logo é obrigatório.</p>
						)}
					</div>
				</div>

				<div className="flex flex-col">
					<label className="font-medium text-gray-700">Descrição breve</label>
					<textarea
						{...register("descricao", {required: true})}
						placeholder="Digite uma breve descrição da loja"
						className="border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
					/>
					{errors?.descricao && (
						<p className="text-red-500 text-sm">
							Descrição da loja é obrigatória.
						</p>
					)}
				</div>

				<h3 className="text-xl font-semibold text-blue-600 mt-6 text-center">
					Endereço
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
					{[
						"cep",
						"logradouro",
						"numero",
						"complemento",
						"bairro",
						"localidade",
						"uf",
					].map((name) => (
						<div key={name} className="flex flex-col">
							<label className="font-medium text-gray-700">
								{name.charAt(0).toUpperCase() + name.slice(1)}
							</label>
							<input
								{...register(name, {required: true})}
								placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
								className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
							/>
							{errors?.[name] && (
								<p className="text-red-500 text-sm">
									{name.charAt(0).toUpperCase() + name.slice(1)} é obrigatório.
								</p>
							)}
						</div>
					))}
				</div>

				<button
					type="submit"
					className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
				>
					Cadastrar Usuário
				</button>
			</form>
		</div>
	);
};

export default CadastroUsuario;
