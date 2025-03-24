import React from "react";

const Card = ({title, date, img, location, price}) => {
	return (
		<div className="w-[450px]  rounded overflow-hidden border-[1px] m-4">
			{img && (
				<img className="w-full h-48 object-cover" src={img} alt={title} />
			)}
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">
					<span className="font-semibold">Data:</span> {date}
				</p>
				<p className="text-gray-700 text-base">
					<span className="font-semibold">Local:</span> {location}
				</p>
				<p className="text-gray-700 text-base">
					<span className="font-semibold">Preço:</span> {price}
				</p>
			</div>
		</div>
	);
};

const CardList = () => {
	const items = [
		{
			title: "Moda a Baleara",
			img: "casa.jpg",
			date: "11 de março de 2025",
			location: "Av Nova de Julho - SP",
			price: "R$500,00",
		},
		{
			title: "Imóveis",
			img: "casa.jpg",
			date: "11 de março de 2025",
			location: "Av Nova de Julho - SP",
			price: "R$250.000,00",
		},
		{
			title: "Imóveis",
			img: "casa.jpg",
			date: "11 de março de 2025",
			location: "Av Nova de Julho - SP",
			price: "R$299.999,00",
		},
		{
			title: "Apartamento 1 Dorm",
			img: "casa.jpg",
			date: "",
			location: "Rio Frei Caneca - SP",
			price: "R$250.000,00",
		},
		{
			title: "Casa 2 Dorms",
			img: "casa.jpg",
			date: "",
			location: "Rio Frei Caneca - SP",
			price: "R$299.999,00",
		},
		{
			title: "Casa 2 Dorms",
			img: "casa.jpg",
			date: "",
			location: "Rio Frei Caneca - SP",
			price: "R$299.999,00",
		},
	];

	return (
		<div className="flex flex-wrap justify-center ">
			{items.map((item, index) => (
				<Card
					key={index}
					img={item.img}
					title={item.title}
					date={item.date}
					location={item.location}
					price={item.price}
				/>
			))}
		</div>
	);
};

export default CardList;
