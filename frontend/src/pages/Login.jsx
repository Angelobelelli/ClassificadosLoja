import React, {useState} from "react";
import {Link} from "react-router-dom";
import {User, Lock} from "lucide-react";
import api from "../api/api"; // Importa a instância do Axios configurada
import { useNavigate } from "react-router";


const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		senha: "",
    
	});

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData((prev) => ({...prev, [name]: value}));
	};

	const reset = () => {
		setFormData({
			email: "",
			senha: "",
		});
	};
  let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault(); // Impede o comportamento padrão de recarregar a página
		console.log("Dados enviados:", formData);

		api
			.post("/users/login", formData)
			.then((response) => {
				if (response.status === 200) {
					return  navigate("/");
				}
				if (response.status === 401) {
					return alert("Dados Incorretos")
				}
				alert("Usuário Logado com sucesso!");
				reset();
			})
			.catch((error) => {
				alert(error.response.data.mensagem);
				console.error("Erro:", error);
				
				if (error.response) {
					console.error("Resposta da API:", error.response.data);
				}
				
			});
		
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-2">
						Bem-vindo de volta!
					</h2>
					<p className="text-gray-600">Entre para acessar sua conta</p>
				</div>

				<form onSubmit={handleSubmit} className="mt-8 space-y-6">
					<div className="space-y-4 text-start ">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 pl-2 "
							>
								Email
							</label>
							<div className="mt-1 relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<User className="h-5 w-5 text-gray-400" />
								</div>
								<input
									type="email"
									name="email"
									id="email"
									value={formData.email}
									onChange={handleInputChange}
									className="pl-10 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									placeholder="seu@email.com"
									required
									aria-label="Email"
								/>
							</div>
							
						</div>

						<div>
							<label
								htmlFor="senha"
								className="block text-sm font-medium text-gray-700 pl-2"
							>
								Senha
							</label>
							<div className="mt-1 relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Lock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									type="password"
									name="senha"
									id="senha"
									value={formData.senha}
									onChange={handleInputChange}
									className="pl-10 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									placeholder="••••••••"
									required
									aria-label="Senha"
								/>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
							/>
							<label
								htmlFor="remember-me"
								className="ml-2 block text-sm text-gray-900"
							>
								Lembrar-me
							</label>
						</div>

						<div className="text-sm">
							<Link
								to="/recuperacao-senha"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Esqueceu a senha?
							</Link>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-105"
						>
							Entrar
						</button>
					</div>

					<div className="text-center">
						<p className="text-sm text-gray-600">
							Não tem uma conta?{" "}
							<Link
								to="/cadastro"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Cadastre-se
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
