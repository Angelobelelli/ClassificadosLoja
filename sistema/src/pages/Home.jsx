import React from "react";

import Header from "../components/Header";
import Input from "../components/Input";
import CategorySlider from "../components/CategorySlider";
import CardList from "../components/CardList";
import CardStore from "../components/CardStore";
import ProfilePlan from "../components/ProfilePlan";
import DepoimentoSlider from "../components/DepoimentoSlider";
import Footer from "../components/Footer";

const Main = () => {
	return (
		<>
			<div>
				<Header />
				<div className="  flex justify-center items-center flex-col gap-6 ">
					<div className="w-[700px] flex justify-center items-center flex-col gap-6 mt-[150px]">
						<div className="flex justify-center items-center gap-6 ">
							<div className="border-2 border-[#D3D3D3] p-4  rounded-[50px]">
								<h1 className="text-[#60656F] ">Anuncie seus produtos</h1>
							</div>
							<div className="border-2 border-[#D3D3D3] p-4  rounded-[50px]">
								<h1 className="text-[#60656F]">Ache o que você precisa</h1>
							</div>
						</div>
						<div className="mt-4">
							<h1 className="text-[#1F2937] text-[48px] font-bold">
								Classificados <br /> Nova Almeida e Região
							</h1>
							<h2 className="text-[#60656F] text-[20px]">
								Amplie seu alcance lojista. Anuncie gratuitamente no Ninja Pro
								Coders Classificados e conquiste mais clientes.
							</h2>
							<button className="text-[16px] py-3 px-20  bg-[#FF2C78] hover:bg-[#E6005C] transition text-white rounded-[50px] mt-4">
								Ver Anuncios
							</button>
							<Input />
							<div className="flex items-center justify-center gap-6  mt-10 mb-30">
								<p>Mais de 5.000 negociações por dia</p>
								<img src="cliente-2.png" alt="" />
							</div>
						</div>
						<div>
							<CategorySlider />
						</div>
					</div>
					<div className="flex justify-center items-center flex-col gap-6 mt-[100px]">
						<h1 className="text-[#1F2937] text-[48px] font-bold">
							Últimos anúncios no site
						</h1>
						<h2 className="text-[#60656F] text-[17px]">
							A plataforma ideal para promover seus produtos e serviços
							gratuitamente, alcançando seu público-alvo de forma eficaz.
						</h2>
						<div className="w-full px-4">
							<CardList />
						</div>
					</div>

					<div className="bg-[#1F2937] w-full h-[600px] pb-5 flex justify-center items-center flex-col gap-6 mt-[100px]">
						<h1 className="text-white text-[48px] ">Lojas em destaque</h1>
						<h3 className="text-white">
							Seja bem-vindo ao Vende Aqui, o seu destino confiável para comprar
							e vender de tudo, desde itens de uso diário até achados únicos.
						</h3>
						<CardStore />
					</div>
				
						<ProfilePlan />
						<DepoimentoSlider/>
						<Footer/>
					
				</div>
			</div>
		</>
	);
};

export default Main;
