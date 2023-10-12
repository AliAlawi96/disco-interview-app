import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { append, detailedStore } from "../features/slices/dataSlice";

const Art = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const artwork = useSelector((state) =>
		state.data.value.find((art) => art.id == id)
	);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://api.artic.edu/api/v1/artworks/${id}`
			);
			const data = await response.json();
			dispatch(artwork ? detailedStore(data.data) : append(data.data));
		};
		artwork == undefined && fetchData();
		artwork && Object.keys(artwork).length < 7 && fetchData();
	}, []);

	return (
		<div className="flex flex-col items-center gap-2 p-4">
			<Link to="/" className="px-2 py-1 bg-orange-300 rounded-lg w-max">
				Home
			</Link>
			<main className="flex flex-col w-3/4 gap-4 p-4 bg-gray-200 border border-gray-400 rounded-md">
				{artwork && (
					<>
						<h2 className="flex gap-2">
							<span className="font-bold">Title:</span>{" "}
							{artwork.title}
						</h2>
						<h3 className="flex gap-2">
							<span className="font-bold">Artist:</span>{" "}
							{artwork.artist_title}
						</h3>
						<p className="flex gap-2">
							<span className="font-bold">Dated:</span>{" "}
							{artwork.date_display}
						</p>
						<p className="flex gap-2">
							<span className="font-bold">Dimensions:</span>{" "}
							{artwork.dimensions}
						</p>
						<p className="flex gap-2">
							<span className="font-bold">Medium:</span>{" "}
							{artwork.medium_display}
						</p>
						<p className="flex gap-2">
							<span className="font-bold">Place of Origin:</span>
							{artwork.place_of_origin}
						</p>
						<p className="flex gap-2">
							<span className="font-bold">Description:</span>
							{artwork.description
								? artwork.description
								: "none available"}
						</p>
						<div className="flex flex-wrap gap-2">
							<span className="font-bold">Tags:</span>
							{artwork.term_titles &&
								artwork.term_titles.map((tag, index) => (
									<p
										key={index}
										className="flex px-2 text-sm bg-gray-400 rounded-full"
									>
										{tag}
									</p>
								))}
						</div>
					</>
				)}
			</main>
		</div>
	);
};

export { Art };
