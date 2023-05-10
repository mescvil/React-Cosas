import { useState } from "react";
import FormularioBusqueda from "../components/FormularioBusqueda";
import axios from "axios";
import Pelicula from "../components/Pelicula";
import NavPaginacion from "../components/NavPaginacion";
import { useAlert } from "react-alert";

const URL_BASE = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`;

const ELEMENTOS_PAGINA = 10;
let ultimoBuscado;
let totalPaginas;

function BuscadorPeliculas() {
	const [peliculas, setPeliculas] = useState([]);
	const [paginaActual, setPaginaActual] = useState(1);

	const PAGINACION = `&page=${paginaActual}`;

	const alert = useAlert();

	const buscaPeliculas = (titulo) => {
		const url = URL_BASE + titulo + PAGINACION;

		axios
			.get(url)
			.then((respusta) => {
				const datos = respusta.data;

				console.log(url);
				console.log(respusta);

				if (!datos.Error) {
					const datos = respusta.data;
					setPeliculas(datos.Search);

					totalPaginas = Math.ceil(
						datos.totalResults / ELEMENTOS_PAGINA
					);
				} else {
					console.log(datos.Error);
					alert.show("Sin resultados");
				}
			})
			.catch((error) => {
				console.log(error);
				alert.show(error.message);
			});
	};

	const eventoBusquedaPelicula = (titulo) => {
		setPaginaActual(1);
		ultimoBuscado = titulo;
		buscaPeliculas(ultimoBuscado);
	};

	const siguienePaginaClick = () => {
		const siguiente = paginaActual;

		if (siguiente <= totalPaginas) {
			setPaginaActual(paginaActual + 1);
			buscaPeliculas(ultimoBuscado);
		}
	};

	const anteriorPaginaClick = () => {
		const siguiente = paginaActual;

		if (siguiente - 1 > 0) {
			setPaginaActual(paginaActual - 1);
			buscaPeliculas(ultimoBuscado);
		}
	};

	return (
		<div id='buscador'>
			<h1>🎞 OMDb API</h1>
			<FormularioBusqueda eventoBusqueda={eventoBusquedaPelicula} />

			{ultimoBuscado && (
				<NavPaginacion
					anteriorPaginaClick={anteriorPaginaClick}
					siguienePaginaClick={siguienePaginaClick}
					paginas={totalPaginas}
					paginaActual={paginaActual}
				/>
			)}
			<section>
				{peliculas?.map((pelicula) => (
					<Pelicula
						key={pelicula.imdbID}
						pelicula={pelicula}
					/>
				))}
			</section>
		</div>
	);
}

export default BuscadorPeliculas;
