import React from "react";
import { signs } from "#/signs";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Autoscroll = () => {
	return (
		<div>
			<Marquee className="shadow-none" speed={60}>
				<ul className="bg-gray-700 text-white text-xl py-5 flex items-center space-x-6 overflow-x-hidden">
					{signs.map(({ label, image }) => (
						<li key={label} className="flex space-x-6">
							<span>{label}</span>
							<Image
								src={image}
								alt={`${label}'s symbol`}
								width={30}
								height={30}
							/>
						</li>
					))}
				</ul>
			</Marquee>
		</div>
	);
};

export default Autoscroll;
