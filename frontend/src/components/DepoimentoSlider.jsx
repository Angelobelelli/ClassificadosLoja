import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

const depoimento = [
	{
		img: "depoimento_1.webp",
		text: "Maria Silva Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Etiam rhoncus. Etiam sit amet orci eget eros faucibus tincidunt. Sed a libero. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. ",
	},
	{
		img: "depoimento_2.webp",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		img: "depoimento_3.webp",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
];

export default function DepoimentoSlider() {
	const [index, setIndex] = useState(0);
	const visibleCategories = 1;

	const handlePrev = () => {
		setIndex((prev) =>
			prev === 0 ? depoimento.length - visibleCategories : prev - 1
		);
	};

	const handleNext = () => {
		setIndex((prev) =>
			prev >= depoimento.length - visibleCategories ? 0 : prev + 1
		);
	};

	return (
		<div className=" mt-40  bg-[#F8F8F8] ">
			<div className="flex items-center justify-center gap-4 ">
				<button
					onClick={handlePrev}
					className=" text-[#FF2C78] rounded-full p-3"
				>
					<ChevronLeft size={40} />
				</button>
				<div className="flex gap-4 overflow-hidden">
					{depoimento
						.slice(index, index + visibleCategories)
						.map((depoimento, i) => (
							<div
								key={i}
								className="w-[940px] flex flex-col items-center  px-6 py-4 rounded-[50px] min-w-[450px]"
							>
								<img
									className="rounded-[100%] mb-6"
									src={depoimento.img}
									alt={`Depoimento ${i + 1}`}
								/>
								<p className="text-[#60656F] mt-5 font-medium">
									{depoimento.text}
								</p>
							</div>
						))}
				</div>
				<button
					onClick={handleNext}
					className=" text-[#FF2C78] rounded-full p-3"
				>
					<ChevronRight size={40} />
				</button>
			</div>
		</div>
	);
}
