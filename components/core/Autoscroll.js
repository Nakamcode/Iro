import React from "react";
import { signs } from "#/signs";
import Image from "next/image";
const Autoscroll = () => {
	return (
		<div>
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
		</div>
	);
};

export default Autoscroll;
