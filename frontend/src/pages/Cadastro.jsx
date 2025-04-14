import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import api from "../api/api";
import {useNavigate} from "react-router";

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
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-3xl space-y-6"
			>
				<h2 className="text-3xl font-bold text-center text-blue-600">
					Cadastro de Usuário
				</h2>

				<div className="space-y-5">
		
					<div className="flex flex-col gap-1">
						<label className="font-medium">Nome</label>
						<input
							{...register("nome", {required: true})}
							placeholder="Digite seu nome"
							className={`w-full border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
								errors?.nome ? "border-red-500" : ""
							}`}
						/>
						{errors?.nome && (
							<p className="text-red-500 text-sm">Nome é obrigatório.</p>
						)}
					</div>

					{/* Email */}
					<div className="flex flex-col gap-1">
						<label className="font-medium">Email</label>
						<input
							{...register("email", {required: true})}
							placeholder="Digite seu email"
							className={`w-full border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
								errors?.email ? "border-red-500" : ""
							}`}
						/>
						{errors?.email && (
							<p className="text-red-500 text-sm">Email é obrigatório.</p>
						)}
					</div>

					{/* Senha */}
					<div className="flex flex-col gap-1">
						<label className="font-medium">Senha</label>
						<input
							{...register("senha", {required: true})}
							type="password"
							placeholder="Digite sua senha"
							className={`w-full border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
								errors?.senha ? "border-red-500" : ""
							}`}
						/>
						{errors?.senha && (
							<p className="text-red-500 text-sm">Senha é obrigatória.</p>
						)}
					</div>

					{/* CPF */}
					<div className="flex flex-col gap-1">
						<label className="font-medium">CPF</label>
						<input
							{...register("cpf", {required: true})}
							placeholder="Digite seu CPF"
							className={`w-full border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
								errors?.cpf ? "border-red-500" : ""
							}`}
						/>
						{errors?.cpf && (
							<p className="text-red-500 text-sm">CPF é obrigatório.</p>
						)}
					</div>

					{/* WhatsApp */}
					<div className="flex flex-col gap-1">
						<label className="font-medium">WhatsApp</label>
						<input
							{...register("whatsapp", {required: true})}
							placeholder="Número de WhatsApp"
							className={`w-full border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
								errors?.whatsapp ? "border-red-500" : ""
							}`}
						/>
						{errors?.whatsapp && (
							<p className="text-red-500 text-sm">WhatsApp é obrigatório.</p>
						)}
					</div>

					{/* Telefone */}
					<div className="flex flex-col gap-1">
						<label className="font-medium">Telefone</label>
						<input
							{...register("telefone", {required: true})}
							placeholder="Número de telefone"
							className={`w-full border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
								errors?.telefone ? "border-red-500" : ""
							}`}
						/>
						{errors?.telefone && (
							<p className="text-red-500 text-sm">Telefone é obrigatório.</p>
						)}
					</div>

					{/* URL da Imagem */}
					<div className="flex flex-col gap-1">
						<label className="font-medium">URL da Imagem</label>
						<input
							{...register("image", {required: true})}
							placeholder="Cole a URL da imagem"
							className={`w-full border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
								errors?.image ? "border-red-500" : ""
							}`}
						/>
						{errors?.image && (
							<p className="text-red-500 text-sm">
								URL da imagem é obrigatória.
							</p>
						)}
					</div>

					{/* URL do Logo */}
					<div className="flex flex-col gap-1">
						<label className="font-medium">URL do Logo</label>
						<input
							{...register("logo", {required: true})}
							placeholder="Cole a URL do logo"
							className={`w-full border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
								errors?.logo ? "border-red-500" : ""
							}`}
						/>
						{errors?.logo && (
							<p className="text-red-500 text-sm">URL do logo é obrigatória.</p>
						)}
					</div>

					{/* Descrição */}
					<div className="flex flex-col gap-1">
						<label className="font-medium">Descrição</label>
						<textarea
							{...register("descricao", {required: true})}
							placeholder="Escreva uma descrição"
							className={`w-full border rounded-lg px-4 py-2 h-24 resize-none shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
								errors?.descricao ? "border-red-500" : ""
							}`}
						/>
						{errors?.descricao && (
							<p className="text-red-500 text-sm">Descrição é obrigatória.</p>
						)}
					</div>

					{/* Título Endereço */}
					<h3 className="text-xl font-semibold text-blue-600 mt-6">Endereço</h3>

					{/* Campos de Endereço */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
						{[
							{name: "cep", label: "CEP"},
							{name: "logradouro", label: "Logradouro"},
							{name: "numero", label: "Número"},
							{name: "complemento", label: "Complemento"},
							{name: "bairro", label: "Bairro"},
							{name: "localidade", label: "Cidade"},
							{name: "uf", label: "UF"},
						].map(({name, label}) => (
							<div className="flex flex-col gap-1" key={name}>
								<label className="font-medium">{label}</label>
								<input
									{...register(name, {required: true})}
									placeholder={label}
									className={`w-full border rounded-lg px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
										errors?.[name] ? "border-red-500" : ""
									}`}
								/>
								{errors?.[name] && (
									<p className="text-red-500 text-sm">{label} é obrigatório.</p>
								)}
							</div>
						))}
					</div>
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
