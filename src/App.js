import { useState } from "react";
import FormularioBusqueda from "./components/Formulario";
import axios from "axios";
import Pelicula from "./components/Pelicula";
import { useAlert } from "react-alert";

import "./App.css";

const URL_BASE = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`;

function App() {
	const [peliculas, setPeliculas] = useState([]);
	const alert = useAlert();

	const eventoBusquedaPelicula = (titulo) => {
		const url = URL_BASE + titulo;

		axios
			.get(url)
			.then((respusta) => {
				const datos = respusta.data;

				if (!datos.Error) {
					const datos = respusta.data;
					setPeliculas(datos.Search);
				} else {
					alert.show("Sin resultados");
				}
			})
			.catch((error) => {
				console.log(error);
				alert.show(error.message);
			});
	};

	return (
		<main>
			<FormularioBusqueda eventoBusqueda={eventoBusquedaPelicula} />
			<section>
				{peliculas?.map((pelicula) => (
					<Pelicula
						key={pelicula.imdbID}
						pelicula={pelicula}
					/>
				))}
			</section>
		</main>
	);
}

export default App;
