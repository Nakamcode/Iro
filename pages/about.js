import { aims, portfolioCategories } from "#/dummy";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import CategoryCard from "~/Cards/CategoryCard";
import Autoscroll from "~/core/Autoscroll";
import Layout from "~/layout/Layout";

const About = () => {
	return (
		<>
			<Head>
				<title>Iro - About</title>
			</Head>
			<Layout>
				<div className="px-24 md:px-12 sm:px-5 py-20 md:py-10">
					<header className="w-full flex flex-col items-center justify-center mb-10">
						<h1 className="lg:hidden text-5xl font-bold mb-4">
							Meet the nerd behind this
						</h1>
						<h1 className="hidden lg:block text-5xl sm:text-[28px] font-bold mb-4">
							Meet the zodiac
						</h1>
						<p className="text-xl font-medium w-full text-center sm:text-base">
							Finding inspiration based on your zodiac sign is something I am
							are passionate about.
						</p>
					</header>
					<div className="grid grid-cols-2 lg:grid-cols-1 gap-10 items-center sm:mb-10">
						<div className="lg:hidden grid grid-cols-3 gap-6">
							{portfolioCategories.map((data) => (
								<CategoryCard data={data} key={data.id} />
							))}
						</div>
						<div className="hidden lg:grid grid-cols-3 lg:grid-cols-3 lg:grid-rows-3 gap-6">
							<div className="hidden lg:block relative lg:row-span-2 lg:col-span-2 w-[270px] h-[300px] lg:w-full lg:h-[400px] sm:h-full rounded-lg shadow-[0px_0px_19px_rgba(133, 129, 129, 0.34)]">
								<Image
									src="/myProfile.jpg"
									alt="developer profile image"
									fill
									className="object-cover rounded-lg"
								/>
							</div>
							{portfolioCategories.slice(0, 5).map((data) => (
								<CategoryCard data={data} key={data.id} />
							))}
						</div>
						<div className="lg:hidden w-full flex justify-end">
							<div>
								<div className="relative w-[270px] h-[300px] rounded-lg shadow-[0px_0px_19px_rgba(133, 129, 129, 0.34)]">
									<Image
										src="/myProfile.jpg"
										alt="developer profile image"
										fill
										className="object-cover rounded-lg"
									/>
								</div>
								<div className="flex items-center pl-3 mt-2 space-x-4">
									<Image
										src="/capricorn.svg"
										alt="leo logo"
										width={20}
										height={20}
									/>
									<span className="text-lg font-semibold">
										Afriyie Samuel Kwesi
									</span>
								</div>
								<p className="pl-3 text-base font-medium">Frontend Developer</p>
								<a
									href="https://kwesi-dev.vercel.app/"
									target="_blank"
									rel="noreferrer"
									className="pl-3 text-base font-medium text-[#2295FF]"
								>
									@kwesidev
								</a>
							</div>
						</div>
					</div>
					<div className="hidden lg:block space-y-6">
						<p className="text-base font-medium">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy
							text ever since the 1500s, but also the leap into electronic
							typesetting, remaining essentially unchanged.
						</p>
						<p className="text-base font-medium">
							When an unknown printer took a galley of type and scrambled it to
							make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged
						</p>
					</div>
				</div>
				<Autoscroll />
				<section className="px-24 md:px-12 sm:px-5 py-20 grid grid-cols-2 items-center gap-10 lg:grid-cols-1">
					<div className="w-[80%] sm:w-full">
						<h2 className="text-5xl sm:text-2xl font-semibold mb-8 sm:text-center">
							Why I built this?
						</h2>
						<ul className="space-y-6">
							<li className="flex items-center">
								<div className="bg-[#E849EB] p-2 rounded-full mr-3">
									<Image
										src="/capricorn_w.svg"
										alt="capricorn logo"
										height={20}
										width={20}
									/>
								</div>
								<span className="font-medium text-xl sm:text-base">
									My aim is to give people the space to be themselves rather
									than judge them.
								</span>
							</li>
							<li className="flex items-center">
								<div className="bg-[#E849EB] p-2 rounded-full mr-3">
									<Image
										src="/capricorn_w.svg"
										alt="capricorn logo"
										height={20}
										width={20}
									/>
								</div>
								<span className="font-medium text-xl sm:text-base">
									My aim is to give people the space to be themselves rather
									than judge them.
								</span>
							</li>
							<li className="flex items-center">
								<div className="bg-[#E849EB] p-2 rounded-full mr-3">
									<Image
										src="/capricorn_w.svg"
										alt="capricorn logo"
										height={20}
										width={20}
									/>
								</div>
								<span className="font-medium text-xl sm:text-base">
									My aim is to give people the space to be themselves rather
									than judge them.
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
		</>
	);
};

export default About;
