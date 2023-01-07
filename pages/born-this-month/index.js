import {
	categoryData,
	characteristics,
	dummyCelebrities,
	heroCategories,
} from "#/dummy";
import { XataClient } from "$$/xata";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryCard from "~/Cards/CategoryCard";
import Celebrity from "~/Cards/Celebrity";
import Autoscroll from "~/core/Autoscroll";
import Layout from "~/layout/Layout";

const BornThisMonth = ({ data }) => {
	const category = categoryData.find((data) => data.id === "Capricorn");
	return (
		<>
			<Head>
				<title>Iro - born-this-month</title>
			</Head>
			<Layout>
				<section className="px-24 md:px-12 sm:px-5 pb-20 pt-10 lg:pb-10 lg:pt-10">
					<header className="w-full flex flex-col items-center justify-center mb-10">
						<div className="flex justify-center space-x-3 leading-tight my-4">
							<Image
								src={`/${category.id.toLocaleLowerCase()}.svg`}
								alt={`${category.id} symbol`}
								width={35}
								height={35}
							/>
							<h2 className="sm:text-xl md:text-2xl text-4xl text-center font-bold">
								Born This Month
							</h2>
						</div>
						<p className="text-xl font-medium w-3/4 lg:w-full text-center sm:text-base">
							{category.subheading}
						</p>
					</header>
					<div className="py-20 grid grid-cols-2 items-center gap-10 lg:grid-cols-1 sm:py-6">
						<div className="w-[95%] sm:w-full lg:mb-10 lg:w-full">
							<h2 className="text-4xl sm:text-[28px] md:text-2xl font-bold mb-8 lg:text-center">
								Their Traits
							</h2>
							<ul className="space-y-6">
								{category.traits.map((trait) => (
									<li className="flex items-center" key={trait}>
										<div className="bg-[#E849EB] p-2 rounded-full mr-3">
											<Image
												src={`/${category.id.toLowerCase()}_w.svg`}
												alt="leo logo"
												height={20}
												width={20}
											/>
										</div>
										<span className="font-medium text-xl sm:text-base">
											{trait}
										</span>
									</li>
								))}
							</ul>
						</div>
						<div className="grid grid-cols-3 gap-6">
							{category.words.map((data) => (
								<CategoryCard data={data} key={data.id} />
							))}
						</div>
					</div>
				</section>
				<Autoscroll />
				<section
					id="aries-celebrities"
					className="sm:px-5 md:px-12 px-24 my-20"
				>
					<div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
						{data.map((celebrity) => {
							return <Celebrity celebrity={celebrity} key={celebrity.id} />;
						})}
					</div>
				</section>
				<Autoscroll />
				{/* <section className="px-24 md:px-12 sm:px-5 py-20 lg:py-10">
					<div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
						{dummyCelebrities.map((celebrity) => {
							return <Celebrity celebrity={celebrity} key={celebrity.id} />;
						})}
					</div>
				</section> */}
				<section
					id=""
					className="grid grid-cols-2 items-center mt-20 sm:mt-10 sm:mb-20 mb-40 px-24 md:px-12 sm:px-5 lg:grid-cols-1"
				>
					<div className="w-[70%] sm:w-full space-y-6 lg:mb-10">
						<h1 className="text-3xl font-display font-bold sm:text-[28px] sm:text-center ">
							Recommendation
						</h1>
						<p className="font-medium text-xl sm:text-base">
							The fact that people have achieved a great deal for themselves
							shows you that you can achieve the same thing.
						</p>
						<p className="font-medium text-xl sm:text-base">
							There are a number of categories of signs that you can explore in
							order to get inspiration and motivation.
						</p>
					</div>
					<div className="w-full grid grid-cols-3 gap-10">
						{heroCategories.map((categoryData) => (
							<Link
								href={`/category/${categoryData.name}`}
								key={categoryData.id}
							>
								<CategoryCard data={categoryData} key={categoryData.id} />
							</Link>
						))}
					</div>
				</section>
				{/* <section className="px-24 md:px-12 sm:px-5 py-20 lg:py-10">
					<div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
						{dummyCelebrities.map((celebrity) => {
							return <Celebrity celebrity={celebrity} key={celebrity.id} />;
						})}
					</div>
				</section> */}
			</Layout>
		</>
	);
};

const xata = new XataClient();

export const getServerSideProps = async () => {
	const response = await xata.db.Capricorn.getMany();
	return {
		props: { data: JSON.parse(JSON.stringify(response)) },
	};
};

export default BornThisMonth;
