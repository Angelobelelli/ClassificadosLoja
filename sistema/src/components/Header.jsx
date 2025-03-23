import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
	return (
		<div className="flex justify-around items-center py-[10px] w-screen text-white">
			<div>
				<img src="logo-colorida.svg" alt="" />
			</div>

			<div className="flex justify-between gap-6 p-4 ">
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
				<div className="bg-[#1F2937] rounded-[50px]">
					<h1 className="text-base py-2 px-5 " >Login</h1>
				</div>
				<div className="bg-[#FF2C78] rounded-[50px]">
					<h1 className="text-[16px] py-2 px-4">Registro</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
