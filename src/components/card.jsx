/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ artwork }) => {
	return (
		<div className="flex flex-col justify-between w-full gap-2 p-4 bg-gray-500 rounded ">
			<main>
				<h2 className="text-xl font-semibold">{artwork.title}</h2>
				<p>{artwork.artist_title}</p>
				<p>{artwork.medium_display}</p>
				<p>{artwork.place_of_origin}</p>
				<p>{artwork.date_display}</p>
			</main>
			<Link
				className="p-2 bg-orange-300 rounded w-max"
				to={`/${artwork.id}`}
			>
				Learn More
			</Link>
		</div>
	);
};

export { Card };
