import { Routes, Route } from "react-router-dom";

import Formulario from "./FormularioContacto";
import BuscadorPeliculas from "./BuscadorPeliculas";
import NavBar from "../components/NavBar";

import "../App.css";

function App() {
	return (
		<>
			<NavBar />
			<main>
				<Routes>
					<Route
						path='/'
						element={<BuscadorPeliculas />}
					/>
					<Route
						path='/formulario'
						element={<Formulario />}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
