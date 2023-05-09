import { useEffect, useState } from "react";
import FormularioBusqueda from "./components/Formulario";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import Pelicula from "./components/Pelicula";

import "./App.css";

const API_KEY = "8a48b1ab";
const URL_BASE = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

const peliculasJSON = {
	Search: [
		{
			Title: "Guardians of the Galaxy",
			Year: "2014",
			imdbID: "tt2015381",
			Type: "movie",
			Poster: "https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_SX300.jpg",
		},
		{
			Title: "Guardians of the Galaxy Vol. 2",
			Year: "2017",
			imdbID: "tt3896198",
			Type: "movie",
			Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
		},
		{
			Title: "Rise of the Guardians",
			Year: "2012",
			imdbID: "tt1446192",
			Type: "movie",
			Poster: "https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_SX300.jpg",
		},
		{
			Title: "Legend of the Guardians: The Owls of Ga'Hoole",
			Year: "2010",
			imdbID: "tt1219342",
			Type: "movie",
			Poster: "https://m.media-amazon.com/images/M/MV5BMjE0NjA5OTA4N15BMl5BanBnXkFtZTcwODA3MTA3Mw@@._V1_SX300.jpg",
		},
		{
			Title: "The Guardians of the Galaxy Holiday Special",
			Year: "2022",
			imdbID: "tt13623136",
			Type: "movie",
			Poster: "https://m.media-amazon.com/images/M/MV5BOGJjMzlmNzctMWI4Yi00MjcyLWFmYzAtN2JmZjU0YTM4YmRmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
		},
		{
			Title: "The Guardians",
			Year: "2017",
			imdbID: "tt4600952",
			Type: "movie",
			Poster: "https://m.media-amazon.com/images/M/MV5BOTIwY2I1NDAtYjJhOS00N2Q4LWE4YjAtZDQ3ZTA4MzcwMzRkL2ltYWdlXkEyXkFqcGdeQXVyNjMxMzM3NDI@._V1_SX300.jpg",
		},
		{
			Title: "The Guardians of Justice (Will Save You!)",
			Year: "2022–",
			imdbID: "tt16549788",
			Type: "series",
			Poster: "https://m.media-amazon.com/images/M/MV5BMWNjZDcxZjEtODEzNC00MTFiLWJlYzAtMGIzNzc5YTkyMGI0XkEyXkFqcGdeQXVyOTQyMjgwMzQ@._V1_SX300.jpg",
		},
		{
			Title: "Naruto the Movie 3: Guardians of the Crescent Moon Kingdom",
			Year: "2006",
			imdbID: "tt1071815",
			Type: "movie",
			Poster: "https://m.media-amazon.com/images/M/MV5BNjk2ZWIzOTYtMGUxMC00MzdhLWI3ZGMtZGJhNzZmMDYxYjJlXkEyXkFqcGdeQXVyMjQ3NTQ4MjQ@._V1_SX300.jpg",
		},
		{
			Title: "7 Guardians of the Tomb",
			Year: "2018",
			imdbID: "tt4915672",
			Type: "movie",
			Poster: "https://m.media-amazon.com/images/M/MV5BZjMzZDI4YmEtZDIwNS00YWQ5LTkzN2UtMzJiMTliNjZiMzRjXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg",
		},
		{
			Title: "Guardians of the Galaxy",
			Year: "2015–2019",
			imdbID: "tt4176370",
			Type: "series",
			Poster: "https://m.media-amazon.com/images/M/MV5BNDM4NDQxMDU2MV5BMl5BanBnXkFtZTgwMDY2MDQ5NjE@._V1_SX300.jpg",
		},
	],
	totalResults: "219",
	Response: "True",
};

function App() {
	const [peliculas, setPeliculas] = useState([]);

	const eventoBusquedaPelicula = (titulo) => {
		const url = URL_BASE + titulo;
		axios.get(url).then((respusta) => {
			const datos = respusta.data;
			console.log(datos.Search);
			setPeliculas(datos.Search);
		});
	};

	return (
		<main>
			<h1>Prueba API Peliculas</h1>
			<div id='formularioBusqueda'>
				<h2>Buscador</h2>
				<Formik
					initialValues={{ tituloPelicula: "" }}
					onSubmit={(values) => {
						eventoBusquedaPelicula(values.tituloPelicula);
					}}
				>
					<Form>
						<Field
							id='tituloPelicula'
							name='tituloPelicula'
							placeholder='Titulo de la pelicula'
						></Field>
						<button type='submit'>Buscar</button>
					</Form>
				</Formik>
			</div>
			<section>
				{peliculas.map((pelicula) => (
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
