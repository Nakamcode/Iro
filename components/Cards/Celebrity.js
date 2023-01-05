import { signs } from "#/signs";
import { capitalize } from "#/utils";
import Image from "next/image";
import { months } from "#/dummy";
const Celebrity = ({ celebrity }) => {
	const sign = capitalize(celebrity.sign);
	const date = new Date(celebrity.birth_date);
	const month_index = date.getMonth();
	const month = months.filter((month, index) => index === month_index);
	const birth_date = `${
		date.getDay() === 0 ? 1 : date.getDay()
	} ${month} ${date.getFullYear()}`;
	return (
		<div
			key={celebrity.id}
			className="w-full card rounded-xl mt-8 sm:mt-4 shadow-lg"
		>
			<div className="w-full h-52 relative">
				<Image
					src="/tylerperry.svg"
					alt={celebrity.name}
					className="rounded-t-xl sm:object-cover"
					fill
				/>
			</div>
			<div className="content space-y-5 sm:space-y-2 p-5">
				<h3 className="text-2xl sm:text-xl font-semibold font-display leading-relaxed">
					{celebrity.name}
				</h3>
				<div className="props sm:text-sm">
					<p>
						<strong>Birth Date: </strong>
						<span>{birth_date}</span>
					</p>
					<p>
						<strong>Birth Place: </strong>
						<span>{celebrity.birth_place}</span>
					</p>
					<p>
						<strong>Status: </strong>
						<span
							className={`mr-2 capitalize font-semibold ${
								celebrity.status.toLowerCase() === "alive"
									? "text-green-600"
									: "text-red-500"
							}`}
						>
							{celebrity.status}
						</span>
						<span>{celebrity.age}yrs</span>
					</p>
					<p>
						<strong>Zodiac Sign: </strong>
						<span>
							{sign} {signs.find(({ label }) => label === sign).icon}
						</span>
					</p>
				</div>
				<p className="font-medium sm:text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
					veritatis rem amet obcaecati explicabo dolorum mollitia molestiae nisi
					tempore ea...
					<a
						href="http://wikipedia.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Read more about ${celebrity.name}`}
						className="text-blue-600 hover:underline"
					>
						Read more
					</a>
				</p>
			</div>
		</div>
	);
};

export default Celebrity;
