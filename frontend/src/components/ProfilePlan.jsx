import React from "react";

const ProfilePlan = () => {
	return (
		<div className=" min-h-screen   flex flex-col items-center justify-center  ">
			<h1 className="text-[38px] font-bold text-[#394352]">
				Destaque seu perfil
			</h1>
			<p className="text-gray-600 mb-6 text-[17px]">
				Com o nosso plano mensal, você destaca seu perfil entre os outros
				verdadeiros no site.
			</p>

			<div className="  p-[28px] bg-[#F5F5F5] rounded-lg shadow-md">
				<div className="w-[460px]  flex flex-col justify-center items-center rounded-lg p-6 ">
					<h1 className="text-[38px] font-bold text-center text-gray-800 mb-5">
						Plano Mensal
					</h1>

					<div className="mb-10">
						<p className="text-gray-500 line-through">De R$197 por apenas</p>
						<p className="text-[70px] font-bold text-gray-800">R$49,90</p>
						<p className="text-gray-500 uppercase text-sm">POR MÊS</p>
					</div>
					<ul className="space-y-2 flex flex-col items-center text-gray-700 w-[100%]">
						<li className="flex items-center justify-center">
							<span className="mr-2">
								<img src="verifica.png" alt="" />
							</span>
							<span>Perfil destacado no site</span>
						</li>
						<li className="flex items-center justify-center">
							<span className="mr-2">
								<img src="verifica.png" alt="" />
							</span>
							<span>Interface intuitiva</span>
						</li>

						<li className="flex items-center">
							<span className="mr-2">
								<img src="verifica.png" alt="" />
							</span>
							<span>Destaque seu perfil no site</span>
						</li>

						<li className="flex items-center">
							<span className="mr-2">
								<img src="verifica.png" alt="" />
							</span>
							<span>Anúncios ilimitados</span>
						</li>

						<li className="flex items-center">
							<span className="mr-2">
								<img src="verifica.png" alt="" />
							</span>
							<span>Fácil de usar e gerenciar</span>
						</li>

						<li className="flex items-center">
							<span className="mr-2">
								<img src="verifica.png" alt="" />
							</span>
							<span>Alcance milhares de visitantes</span>
						</li>
					</ul>
				</div>

				<div className="w-full">
					<button className="bg-[#FF2C78] hover:bg-[#E6005C] transition text-white text-[15px] font-bold w-full h-[45px] rounded-[6px]">
						Garantir Plano Mensal Agora
					</button>
				</div>
				<div className="border-t border-gray-200 my-4"></div>
				<p className="text-xs text-gray-500">
					Cumpra 100% segue. Assumir melhor quês coordenação do programa
					<br />
					VISA
				</p>
			</div>
		</div>
	);
};

export default ProfilePlan;
