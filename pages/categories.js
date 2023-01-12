import { categories, categoryData, dummyCelebrities } from "#/dummy";
import { XataClient } from "$$/xata";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CategoryCard from "~/Cards/CategoryCard";
import Celebrity from "~/Cards/Celebrity";
import Autoscroll from "~/core/Autoscroll";
import Button from "~/core/Button";
import Layout from "~/layout/Layout";

const Categories = ({ data }) => {
	const router = useRouter();
	const category = categoryData.find((data) => data.id === "Capricorn");
	return (
		<>
			<Head>
				<title>Iro - Categories</title>
			</Head>
			<Layout>
				<section className="px-24 md:px-12 sm:px-4 py-20 md:py-10">
					<header className="w-full flex flex-col items-center justify-center mb-10">
						<h1 className="text-5xl sm:text-[28px] font-bold mb-4">
							Categories
						</h1>
						<p className="text-xl sm:text-base font-medium text-center">
							There are a number of categories of signs that you can explore in
							order to get inspiration and motivation.
						</p>
					</header>
					<div className="grid grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-6">
						{categories.map((data) => (
							<Link href={`/category/${data.name}`} key={data.id}>
								<CategoryCard data={data} key={data.id} />
							</Link>
						))}
					</div>
				</section>
				<Autoscroll />
				<section
					id="aries-celebrities"
					className="sm:px-5 md:px-12 px-24 py-20 lg:py-10"
				>
					<div className="flex justify-center space-x-3 leading-tight my-4">
						<Image
							src={`/${category.id.toLocaleLowerCase()}.svg`}
							alt={`${category.id} symbol`}
							width={35}
							height={35}
						/>{" "}
						<h2 className="sm:text-xl md:text-2xl text-4xl text-center font-semibold">
							Born This Month
						</h2>
					</div>
					<p className="text-center w-3/4 sm:w-full mx-auto mb-8 text-xl sm:text-base font-medium">
						{category.subheading}
					</p>
					<div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
						{data.map((celebrity) => {
							return <Celebrity celebrity={celebrity} key={celebrity.id} />;
						})}
					</div>
					<Button
						className="mt-8 sm:w-full py-3 px-10 w-[30%]"
						onClick={() => router.push(`/category/${category.id}`)}
					>
						More
					</Button>
				</section>
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

export default Categories;
