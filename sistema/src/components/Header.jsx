import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<div className="flex justify-around items-center py-6 text-white bg-white overflow-hidden">
			<div>
				<img src="logo-colorida.svg" alt="Logo" className=" h-auto" />
			</div>

			<div className="flex gap-6">
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
				<div className="bg-[#1F2937] rounded-full px-5 py-2 cursor-pointer hover:bg-[#374151] transition">
					<h1 className="text-base">Login</h1>
				</div>
				<div className="bg-[#FF2C78] rounded-full px-5 py-2 cursor-pointer hover:bg-[#E6005C] transition">
					<h1 className="text-base">Registro</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
