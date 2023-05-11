import { useEffect, useState } from "react";
import FormularioBusqueda from "../components/FormularioBusqueda";
import axios from "axios";
import Pelicula from "../components/Pelicula";
import NavPaginacion from "../components/NavPaginacion";
import { useAlert } from "react-alert";

const URL_BASE = `https://www.omdbapi.com/?type=movie&apikey=${process.env.REACT_APP_API_KEY}&s=`;

const ELEMENTOS_PAGINA = 10;
let ultimoBuscado;
let totalPaginas;

function BuscadorPeliculas() {
	const [peliculas, setPeliculas] = useState([]);
	const [paginaActual, setPaginaActual] = useState(0);
	const alert = useAlert();

	const PAGINACION = `&page=${paginaActual}`;

	useEffect(() => {
		if (paginaActual === 0) return;

		const url = URL_BASE + ultimoBuscado + PAGINACION;

		axios
			.get(url)
			.then((respusta) => {
				const datos = respusta.data;

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
	}, [paginaActual]);

	const eventoBusquedaPelicula = (titulo) => {
		ultimoBuscado = titulo;
		setPaginaActual(1);
	};

	const siguienePaginaClick = () => {
		if (paginaActual <= totalPaginas) setPaginaActual(paginaActual + 1);
	};

	const anteriorPaginaClick = () => {
		if (paginaActual - 1 > 0) setPaginaActual(paginaActual - 1);
	};

	return (
		<div id='buscador'>
			<h1>🎞 OMDb API</h1>
			<FormularioBusqueda eventoBusqueda={eventoBusquedaPelicula} />

			{paginaActual > 0 && (
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
