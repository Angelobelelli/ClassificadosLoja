import React from "react";
import {Link} from "react-router-dom";
import {Store} from "lucide-react";

const Header = () => {
	return (
		<div className="flex justify-around items-center py-6 text-white bg-white overflow-hidden">
			<div className="flex items-center gap-2 ">
				<Store className="h-8 w-8 text-[#FF2C78]" />
				<span className="text-[22px] font-bold text-gray-800">
					Classificados NA
				</span>
			</div>

			<div className="flex gap-6 ">
				<Link
					to="/"
					className="text-[#6F767D] hover:text-blue-400 transition-colors duration-200"
				>
					Home
				</Link>
				<Link
					to="/classificados"
					className="text-[#6F767D] hover:text-blue-400 transition-colors duration-200"
				>
					Classificados
				</Link>
				<Link
					to="/categorias"
					className="text-[#6F767D] hover:text-blue-400 transition-colors duration-200"
				>
					Categorias
				</Link>
				<Link
					to="/contato"
					className="text-[#6F767D] hover:text-blue-400 transition-colors duration-200"
				>
					Contato
				</Link>
			</div>

			<div className="flex gap-4">
				<div className="bg-[#FF2C78] rounded-full px-5 py-2 w-[150px] cursor-pointer hover:bg-[#E6005C] transition">
					<h1 className="text-base">Anunciar</h1>
					
				</div>
			</div>
		</div>
	);
};

export default Header;
