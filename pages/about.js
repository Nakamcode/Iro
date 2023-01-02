import { aims, portfolioCategories } from "#/dummy";
import Image from "next/image";
import React from "react";
import CategoryCard from "~/Cards/CategoryCard";
import Autoscroll from "~/core/Autoscroll";
import Layout from "~/layout/Layout";

const About = () => {
	return (
		<Layout>
			<div className="px-24 py-20">
				<header className="w-full flex flex-col items-center justify-center mb-10">
					<h1 className="text-5xl font-bold mb-4">Meet the nerd behind this</h1>
					<p className="text-xl font-medium">
						Finding inspiration based on your zodiac sign is something I am are
						passionate about.
					</p>
				</header>
				<div className="grid grid-cols-2 gap-10 items-center">
					<div className="grid grid-cols-3 gap-6">
						{portfolioCategories.map((data) => (
							<CategoryCard data={data} key={data.id} />
						))}
					</div>
					<div className="w-full flex justify-end">
						<div>
							<div className="relative w-[270px] h-[300px] rounded-lg shadow-[0px_0px_19px_rgba(133, 129, 129, 0.34)]">
								<Image
									src="/profile.png"
									alt="developer profile image"
									fill
									className="object-contain"
								/>
							</div>
							<div className="flex items-center pl-3 mt-2 space-x-4">
								<Image src="/leo.svg" alt="leo logo" width={20} height={20} />
								<span className="text-lg font-semibold">Nana Asamoah</span>
							</div>
							<p className="pl-3 text-base font-medium">
								Frontend Dev{"("}UI/UX{")"}
							</p>
							<a
								href="/nakam"
								target="_blank"
								className="pl-3 text-base font-medium text-[#2295FF]"
							>
								@nakam360
							</a>
						</div>
					</div>
				</div>
			</div>
			<Autoscroll />
			<section className="px-24 py-20 grid grid-cols-2 items-center gap-10">
				<div className="w-[80%]">
					<h2 className="text-5xl font-semibold mb-8">Why I built this?</h2>
					<ul className="space-y-6">
						<li className="flex items-center">
							<div className="bg-[#E849EB] p-2 rounded-full mr-3">
								<Image src="/leo_w.svg" alt="leo logo" height={20} width={20} />
							</div>
							<span className="font-medium text-xl">
								My aim is to give people the space to be themselves rather than
								judge them.
							</span>
						</li>
						<li className="flex items-center">
							<div className="bg-[#E849EB] p-2 rounded-full mr-3">
								<Image src="/leo_w.svg" alt="leo logo" height={20} width={20} />
							</div>
							<span className="font-medium text-xl">
								My aim is to give people the space to be themselves rather than
								judge them.
							</span>
						</li>
						<li className="flex items-center">
							<div className="bg-[#E849EB] p-2 rounded-full mr-3">
								<Image src="/leo_w.svg" alt="leo logo" height={20} width={20} />
							</div>
							<span className="font-medium text-xl">
								My aim is to give people the space to be themselves rather than
								judge them.
							</span>
						</li>
					</ul>
				</div>
				<div className="grid grid-cols-3 gap-6">
					{aims.map((data) => (
						<CategoryCard data={data} key={data.id} />
					))}
				</div>
			</section>
		</Layout>
	);
};

export default About;
