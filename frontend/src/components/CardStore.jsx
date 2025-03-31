import React from "react";

const Card = ({name, location, num1, num2}) => {
	return (
		<div className="w-[450px] h-[360px] px-[20px] flex   rounded overflow-hidden border-[1px] p-4 m-4 bg-white">
			<div className="flex flex-col justify-center items-start w-full ">
				<div className="bg-[#1F2937] p-[15px] rounded-[5px]">
					<h1 className="text-[14px] text-white">ANUNCIANTE EM DESTAQUE</h1>
				</div>
				<div className=" py-4 flex flex-col items-start gap-1">
					<h1 className="font-bold text-[27px] mb-2"> Loja: {name} </h1>

					<p className="text-gray-700 text-base ">
						<span className="font-semibold">Local:</span> {location}
					</p>
					<p className="text-gray-700 text-base">
						<span className="font-semibold">Preço:</span> {num1}
					</p>
					<p className="text-gray-700 text-base">
						<span className="font-semibold">Preço:</span> {num2}
					</p>
				</div>

				<div className="w-full">
					<button className="bg-[#FF2C78] hover:bg-[#E6005C] transition text-white text-[15px] font-bold w-full h-[45px]  rounded-[6px] ">
						Ver lojista
					</button>
				</div>
			</div>
		</div>
	);
};

const CardStore = () => {
	const items = [
		{
			name: "Imob Ninja",
			location: "Av Nova de Julho - SP",
			num1: "2799999-9999",
			num2: "2799999-9999",
		},
		{
			name: "Bolos e Cookies",
			location: "Av Nova de Julho - SP",
			num1: "2799999-9999",
			num2: "2799999-9999",
		},
		{
			name: "Make Facil",
			location: "Av Nova de Julho - SP",
			num1: "2799999-9999",
			num2: "2799999-9999",
		},
	];

	return (
		<div className="flex flex-wrap justify-center ">
			{items.map((item, index) => (
				<Card
					key={index}
					name={item.name}
					location={item.location}
					num1={item.num1}
					num2={item.num2}
				/>
			))}
		</div>
	);
};

export default CardStore;
