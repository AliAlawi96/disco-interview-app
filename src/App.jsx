import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Art } from "./pages/art";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Art />} />
			</Routes>
		</>
	);
}

export default App;
