import Image from "next/image";
import React from "react";

const CategoryCard = ({ data }) => {
	return (
		<div
			className={`w-full h-36 sm:h-24 rounded-md shadow-lg bg-white flex flex-col items-center justify-center border border-[#AFAFAF] ${
				data.id === 1 && "shadow-[0px_0px_19px_rgba(232,73,235,0.34)]"
			}`}
		>
			<div
				className={`flex items-center justify-center rounded-full p-4 sm:p-2 ${
					data.name === "Pisces"
						? "bg-[#E849EB]"
						: data.name === "Capricorn"
						? "bg-[#5CCAA9]"
						: data.name === "Leo"
						? "bg-[#5C95CA]"
						: data.name === "Arial"
						? "bg-[#CA8A5C]"
						: data.name === "Scorpio"
						? "bg-[#CA5C5C]"
						: data.name === "Libra"
						? "bg-[#5CB6CA]"
						: data.name === "Aquarius"
						? "bg-[#DEEB49]"
						: data.name === "Gimini"
						? "bg-[#AD5CCA]"
						: data.name === "Taurus"
						? "bg-[#CA9E5C]"
						: data.name === "Sagittarius"
						? "bg-[#5C60CA]"
						: data.name === "Cancer"
						? "bg-[#5CCA74]"
						: data.name === "Virgo"
						? "bg-[#CA5CB2]"
						: "bg-[#AD5CCA]"
				} mb-3 sm:mb-2`}
			>
				<div className="relative w-[30px] h-[30px] sm:w-[20px] sm:h-[20px]">
					<Image src={data.path} alt="category symbol" fill />
				</div>
			</div>
			<p className="text-lg font-semibold sm:text-sm text-center">
				{data.label}
			</p>
		</div>
	);
};

export default CategoryCard;
