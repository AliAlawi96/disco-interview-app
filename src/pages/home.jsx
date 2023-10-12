import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [artworks, setArtworks] = useState([]);
	const [artworkCounter, setArtworkCounter] = useState(2);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://api.artic.edu/api/v1/artworks?limit=3&fields=id,title,artist_title,medium_display,date_display,place_of_origin"
			);
			const data = await response.json();
			console.log(data.data);
			setArtworks(data.data);
		};
		fetchData();
	}, []);

	const onClickHandler = async () => {
		setLoading(true);
		const response = await fetch(
			`https://api.artic.edu/api/v1/artworks?limit=${
				artworkCounter * 3
			}&fields=id,title,artist_title,medium_display,date_display,place_of_origin`
		);
		setArtworkCounter(artworkCounter + 1);
		const data = await response.json();
		console.log(data.data);
		setArtworks(data.data);
		setLoading(false);
	};

	return (
		<div className="flex flex-col items-center w-full">
			<header className="w-full p-16 text-4xl text-center text-white bg-gray-700">
				<h1>Art Institute of Chicago</h1>
			</header>
			<div className="grid w-full grid-cols-3 gap-2 p-4">
				{artworks.map((artwork) => {
					return (
						<div
							key={artwork.id}
							className="flex flex-col justify-between w-full gap-2 p-4 bg-gray-500 rounded "
						>
							<main>
								<h2 className="text-xl font-semibold">
									{artwork.title}
								</h2>
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
				})}
			</div>
			<button
				disabled={loading}
				onClick={() => onClickHandler()}
				className="p-2 bg-gray-500 rounded"
			>
				{loading ? "loading" : "More Options"}
			</button>
		</div>
	);
};

export { Home };
