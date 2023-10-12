// import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Art = () => {
	const [data, setData] = useState({});
	const { id } = useParams();
	// const id = useSelector((state) => state.data.value.filter((art) => art.id == )));
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://api.artic.edu/api/v1/artworks/${id}`
			);
			const data = await response.json();
			console.log(data.data);
			setData(data.data);
		};
		fetchData();
	}, []);

	return (
		<div className="flex flex-col items-center gap-2 p-4">
			<Link to="/" className="px-2 py-1 bg-orange-300 rounded-lg w-max">
				Home
			</Link>
			<main className="flex flex-col w-4/5 gap-2 p-4 bg-gray-200 border border-gray-400 rounded-md">
				<h2 className="flex gap-2">
					<span className="font-bold">Title:</span> {data.title}
				</h2>
				<h3 className="flex gap-2">
					<span className="font-bold">Artist:</span>{" "}
					{data.artist_title}
				</h3>
				<p className="flex gap-2">
					<span className="font-bold">Dated:</span>{" "}
					{data.date_display}
				</p>
				<p className="flex gap-2">
					<span className="font-bold">Dimensions:</span>{" "}
					{data.dimensions}
				</p>
				<p className="flex gap-2">
					<span className="font-bold">Medium:</span>{" "}
					{data.medium_display}
				</p>
				<p className="flex gap-2">
					<span className="font-bold">Place of Origin:</span>
					{data.place_of_origin}
				</p>
				<p className="flex gap-2">
					<span className="font-bold">Description:</span>
					{data.description ? data.description : "none available"}
				</p>
				<div className="flex flex-wrap gap-2">
					<span className="font-bold">Tags:</span>
					{data.term_titles &&
						data.term_titles.map((tag, index) => (
							<p
								key={index}
								className="flex px-2 text-sm bg-gray-400 rounded-full"
							>
								{tag}
							</p>
						))}
				</div>
			</main>
		</div>
	);
};

export { Art };
