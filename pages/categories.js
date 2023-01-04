import { categories, dummyCelebrities } from "#/dummy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryCard from "~/Cards/CategoryCard";
import Celebrity from "~/Cards/Celebrity";
import Autoscroll from "~/core/Autoscroll";
import Button from "~/core/Button";
import Layout from "~/layout/Layout";

const Categories = () => {
	return (
		<Layout>
			<section className="px-24 md:px-12 sm:px-4 py-20 md:py-10">
				<header className="w-full flex flex-col items-center justify-center mb-10">
					<h1 className="text-5xl sm:text-[28px] font-bold mb-4">Categories</h1>
					<p className="text-xl sm:text-base font-medium text-center">
						Finding inspiration based on your zodiac sign is something I am are
						passionate about.
					</p>
				</header>
				<div className="grid grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-6">
					{categories.map((data) => (
						<Link href={`/categories/${data.name}`} key={data.id}>
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
					<Image src="/aries.svg" alt="Aries symbol" width={35} height={35} />
					<h2 className="sm:text-xl md:text-2xl text-4xl text-center font-semibold font-display">
						Born Today
					</h2>
				</div>
				<p className="text-center w-3/4 sm:w-full mx-auto mb-8 text-xl sm:text-base font-medium">
					Aries is a passionate, motivated, and confident leader who builds
					community with their cheerful disposition and relentless
					determination.
				</p>
				<div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
					{dummyCelebrities.map((celebrity) => {
						return <Celebrity celebrity={celebrity} key={celebrity.id} />;
					})}
				</div>
				<Button className="mt-8 sm:w-full py-3 px-10 w-[30%]">More</Button>
			</section>
		</Layout>
	);
};

export default Categories;
