import React from "react";

import Header from "../components/Header";
import Input from "../components/Input";

const Main = () => {
	return (
		<>
			<Header />
			<div className="relative w-screen flex justify-center items-center flex-col gap-6">
				<div className="w-[700px] flex justify-center items-center flex-col gap-6 py-[130px]">
					<div className="flex justify-center items-center gap-6 ">
						<div className="border-2 border-[#D3D3D3] p-4 w-fit h-fit rounded-[50px]">
							<h1 className="text-[#60656F] ">Anuncie seus produtos</h1>
						</div>
						<div className="border-2 border-[#D3D3D3] p-4 w-fit rounded-[50px]">
							<h1 className="text-[#60656F]">Ache o que você precisa</h1>
						</div>
					</div>
					<div className="">
						<h1 className="text-[#1F2937] text-[48px] font-bold">
							Classificados  <br /> Nova Almeida e Região
						</h1>
						<h2 className="text-[#60656F] text-[20px]">
							Amplie seu alcance lojista. Anuncie gratuitamente no Ninja Pro
							Coders Classificados e conquiste mais clientes.
						</h2>

						<button className="text-[16px] py-3 px-20  bg-[#FF2C78] text-white rounded-[50px] mt-4" >
							Ver Anuncios
						</button>
						<Input />
						<div className="flex items-center justify-center gap-6 mt-4">
							<p>Mais de 5.000 negociações por dia</p>
							<img src="cliente-2.png" alt=""  />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
