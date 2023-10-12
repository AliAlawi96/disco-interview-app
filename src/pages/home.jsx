import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../features/slices/loadingSlice";

import { increment } from "../features/slices/counterSlice";
import { store } from "../features/slices/dataSlice";
import { Card } from "../components/card";

const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.loading.value);
	const counter = useSelector((state) => state.counter.value);
	const artwork = useSelector((state) => state.data.value);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://api.artic.edu/api/v1/artworks?limit=3&fields=id,title,artist_title,medium_display,date_display,place_of_origin"
			);
			const data = await response.json();
			// console.log(data.data);
			dispatch(store(data.data));
		};
		Object.keys(artwork).length === 0 && fetchData();
	}, []);

	const onClickHandler = async () => {
		dispatch(setIsLoading(true));
		const response = await fetch(
			`https://api.artic.edu/api/v1/artworks?limit=${
				counter * 3
			}&fields=id,title,artist_title,medium_display,date_display,place_of_origin`
		);
		dispatch(increment());
		const data = await response.json();
		dispatch(store(data.data));
		dispatch(setIsLoading(false));
	};

	return (
		<div className="flex flex-col items-center w-full gap-2 p-4 ">
			<div className="grid w-full grid-cols-3 gap-2">
				{artwork.map((artwork) => {
					return <Card key={artwork.id} artwork={artwork} />;
				})}
			</div>
			<button
				disabled={isLoading}
				onClick={() => onClickHandler()}
				className="p-2 bg-gray-200 rounded"
			>
				{isLoading ? "loading" : "More Options"}
			</button>
		</div>
	);
};

export { Home };
