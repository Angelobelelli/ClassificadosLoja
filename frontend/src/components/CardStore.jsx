import React, {useEffect, useState} from "react";

import {MapPin, Star, Phone} from "lucide-react";
import api from "../api/api"; // ajuste o caminho se necessário

const CardStore = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function LoadUsers() {
			try {
				const response = await api.get("/users");
				setUsers(response.data);
			} catch (error) {
				console.error("Erro ao carregar usuários:", error);
			}
		}
		LoadUsers();
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{users.map((user, index) => (
				<div
					key={index}
					className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-[400px]"
				>
					<img
						src={user.image}
						
						className="w-full h-40 object-cover rounded-t-xl text-black"
					/>
					<div className="p-4">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-semibold">{user.nome}</h3>
							<div className="flex items-center text-yellow-500">
								<Star className="h-4 w-4 fill-current" />
								<span className="ml-1">4.5</span>
							</div>
						</div>
						<div className="flex items-center text-gray-500 mt-2">
							<MapPin className="h-4 w-4 text-[#FF2C78]" />
							<span className="ml-1">{user.localizacao}</span>
						</div>
						<div className="flex items-center text-gray-500 mt-2">
							<Phone className="h-4 w-4 text-[#FF2C78]" />
							<span className="ml-1">{user.whatsapp}</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CardStore;
