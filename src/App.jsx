import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Art } from "./pages/art";

function App() {
	return (
		<>
			<header className="w-full p-16 text-4xl text-center text-white bg-gray-700">
				<h1>Art Institute of Chicago</h1>
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Art />} />
			</Routes>
		</>
	);
}

export default App;
