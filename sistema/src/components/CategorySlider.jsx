import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

const categories = [
	{name: "Comida", icon: "🍔"},
	{name: "Moda e beleza", icon: "💄"},
	{name: "Imóveis", icon: "🏠"},
	{name: "Tecnologia", icon: "💻"},
	{name: "Automóveis", icon: "🚗"},
];

export default function CategorySlider() {
	const [index, setIndex] = useState(0);
	const visibleCategories = 3;

	const handlePrev = () => {
		setIndex((prev) =>
			prev === 0 ? categories.length - visibleCategories : prev - 1
		);
	};

	const handleNext = () => {
		setIndex((prev) =>
			prev >= categories.length - visibleCategories ? 0 : prev + 1
		);
	};

	return (
		<div className=" ">
			<div className="flex items-center justify-center gap-4 ">
				<button
					onClick={handlePrev}
					className="bg-black text-white rounded-full p-3"
				>
					<ChevronLeft size={20} />
				</button>
				<div className="flex gap-4 overflow-hidden">
					{categories
						.slice(index, index + visibleCategories)
						.map((category, i) => (
							<div
								key={i}
								className="flex flex-col items-center bg-gray-100 px-6 py-4 rounded-[50px] min-w-[450px]"
							>
								<span className="text-[50px]">{category.icon}</span>
								<p className="text-pink-500 mt-2 font-medium">
									{category.name}
								</p>
							</div>
						))}
				</div>
				<button
					onClick={handleNext}
					className="bg-black text-white rounded-full p-3"
				>
					<ChevronRight size={20} />
				</button>
			</div>
		</div>
	);
}
