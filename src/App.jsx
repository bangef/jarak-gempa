import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Maps from "./pages/Maps";
import Start from "./pages/Start";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Start />} />
			<Route path="/maps" element={<Maps />} />
		</Routes>
	);
}
