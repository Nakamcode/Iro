import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="background-gradient w-full text-white h-[120px] px-24 flex flex-col items-center justify-center">
				<div className="w-full flex justify-between items-center mb-2 font-medium text-lg">
					<p>&copy; Iro 2022</p>
					<ul className="flex items-center space-x-8">
						<li className="underline cursor-pointer">Code on Github</li>
						<li className="underline cursor-pointer">Powered by Netlify</li>
						<li className="underline cursor-pointer">Give me feedback</li>
					</ul>
					<p>JAMstack</p>
				</div>
				<p className="text-sm">
					No pixels was harm in production of this project
				</p>
			</footer>
			<style jsx>
				{`
					.background-gradient {
						background: linear-gradient(
							90.69deg,
							rgba(129, 149, 254, 0.82) -7.91%,
							rgba(114, 119, 255, 0.815301) 0.9%,
							rgba(132, 56, 255, 0.79) 48.36%,
							rgba(255, 107, 231, 0.82) 122.25%
						);
					}
				`}
			</style>
		</>
	);
};

export default Footer;
