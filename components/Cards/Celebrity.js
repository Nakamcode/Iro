import { signs } from "#/signs";
import { capitalize } from "#/utils";
import Image from "next/image";

const Celebrity = ({ celebrity }) => {
	const sign = capitalize(celebrity.sign);

	const attributes = {
		"Birth Date": new Date(celebrity.birth_date).toLocaleDateString(),
		"Birth Place": celebrity.birth_place,
		Status: `${capitalize(celebrity.status)} (${celebrity.age}yrs)`,
		"Zodiac Sign": `${sign} ${signs.find(({ label }) => label === sign).icon}`,
	};
	return (
		<div key={celebrity.id} className="card rounded-xl mt-8 shadow-lg">
			<div className="w-full h-52 relative">
				<Image
					src={celebrity.imgURL}
					alt={celebrity.name}
					className="rounded-t-xl"
					fill
				/>
			</div>
			<div className="content space-y-5 p-5">
				<h3 className="text-2xl font-semibold font-display leading-relaxed">
					{celebrity.name}
				</h3>
				<div className="props">
					{Object.entries(attributes).map(([key, value]) => (
						<p key={key}>
							<strong>{key}: </strong>
							<span>{value}</span>
						</p>
					))}
				</div>
				<p className="font-medium">
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
			<style jsx>{`
				.card {
					width: min(370px, 100%);
				}
			`}</style>
		</div>
	);
};

export default Celebrity;
