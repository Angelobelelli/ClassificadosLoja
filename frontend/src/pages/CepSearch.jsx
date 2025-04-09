import React, {useState} from "react";
import axios from "axios";

const CepSearch = () => {
	const [cep, setCep] = useState("");
	const [dados, setDados] = useState({
		logradouro: "",
		complemento: "",
		bairro: "",
		localidade: "",
		uf: "",
		ddd: "",
	});

	const buscarCep = async () => {
		try {
			const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
			setDados({
				logradouro: response.data.logradouro || "",
				complemento: response.data.complemento || "",
				bairro: response.data.bairro || "",
				localidade: response.data.localidade || "",
				uf: response.data.uf || "",
				ddd: response.data.ddd || "",
			});
		} catch (error) {
			alert("Erro ao buscar o CEP.");
			console.error(error);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4 text-center">Buscar CEP</h1>

				<div className="flex gap-2 mb-4">
					<input
						type="text"
						value={cep}
						onChange={(e) => setCep(e.target.value)}
						placeholder="Digite o CEP"
						className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						onClick={buscarCep}
						className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700"
					>
						Buscar
					</button>
				</div>

				<div className="space-y-3">
					<input
						type="text"
						placeholder="Logradouro"
						value={dados.logradouro}
						readOnly
						className="w-full p-2 border rounded-lg bg-gray-100"
					/>
					<input
						type="text"
						placeholder="Complemento"
						value={dados.complemento}
						readOnly
						className="w-full p-2 border rounded-lg bg-gray-100"
					/>
					<input
						type="text"
						placeholder="Bairro"
						value={dados.bairro}
						readOnly
						className="w-full p-2 border rounded-lg bg-gray-100"
					/>
					<input
						type="text"
						placeholder="Cidade"
						value={dados.localidade}
						readOnly
						className="w-full p-2 border rounded-lg bg-gray-100"
					/>
					<input
						type="text"
						placeholder="Estado"
						value={dados.uf}
						readOnly
						className="w-full p-2 border rounded-lg bg-gray-100"
					/>
					<input
						type="text"
						placeholder="DDD"
						value={dados.ddd}
						readOnly
						className="w-full p-2 border rounded-lg bg-gray-100"
					/>
				</div>
			</div>
		</div>
	);
};

export default CepSearch;
