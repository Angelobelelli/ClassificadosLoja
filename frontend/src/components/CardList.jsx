import {useEffect, useState} from "react";
import api from "../api/api";
import {Heart} from "lucide-react";

const CardList = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		async function LoadProducts() {
			try {
				const response = await api.get("/products"); // Corrigindo a URL
				setProducts(response.data);
			} catch (error) {
				console.error("Erro ao carregar produtos:", error);
			}
		}
		LoadProducts();
	}, []);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{products.map((product) => (
				<div
					key={product.id}
					className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
				>
					<div className="relative">
						<img src={product.image} className="h-48 w-full object-cover" />
						<button className="absolute top-2 right-2 p-1.5 bg-white rounded-full hover:bg-gray-100">
							<Heart className="" size={24} />
						</button>
					</div>
					<div className="p-4 text-start">
						<h2 className="font-semibold text-gray-800">{product.nome}</h2>
						<p className="text-[#FF2C78] font-bold mt-1">R$ {product.preco}</p>
						<p className="text-gray-500 text-sm mt-1">{product.descricao}</p>
						<button className="mt-3 px-4 py-2 bg-[#FF2C78] text-white rounded hover:bg-[#E6005C] transition">
							Adicionar ao carrinho
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
export default CardList;
