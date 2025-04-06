import React from "react";

import Header from "../components/Header";
import Input from "../components/Input";
import CategorySlider from "../components/CategorySlider";
import CardList from "../components/CardList";
import CardStore from "../components/CardStore";
import ProfilePlan from "../components/ProfilePlan";
import DepoimentoSlider from "../components/DepoimentoSlider";
import Footer from "../components/Footer";
import {Search, Users, Store} from "lucide-react";

const Main = () => {
	return (
		<>
			<div>
				<Header />
				<div className="  flex justify-center items-center flex-col gap-6 ">
					<section className="pt-24 pb-12 mb-20 bg-gradient-to-br from-[#ce007c] to-[#5e1040] text-white w-full">
						<div className="px-4 py-12 max-w-3xl mx-auto text-center">
							<h1 className="text-4xl md:text-5xl font-bold mb-4">
								Classificados Nova Almeida e Região
							</h1>
							<p className="text-xl mb-8 text-indigo-100">
								O maior portal de classificados da região. Encontre o que
								precisa ou anuncie seus produtos.
							</p>

							<div className="relative max-w-2xl mx-auto">
								<input
									type="text"
									placeholder="O que você procura?"
									className="w-full px-6 py-4 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#000]"
								/>
								<button className="absolute right-2 top-2 bg-indigo-600 p-2 rounded-full hover:bg-indigo-700">
									<Search className="h-6 w-6" />
								</button>
							</div>

							<div className="mt-12 flex justify-center items-center space-x-8">
								<div className="text-center">
									<Users className="h-8 w-8 mx-auto mb-2" />
									<p>10k+ Usuários</p>
								</div>
								<div className="text-center">
									<Store className="h-8 w-8 mx-auto mb-2" />
									<p>500+ Lojas</p>
								</div>
							</div>
						</div>
					</section>
					<CategorySlider />
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
					<DepoimentoSlider />
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Main;
