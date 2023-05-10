import sinImagen from "../img/image.png";

const Pelicula = ({ pelicula }) => {
	return (
		<div className='tarjeta-pelicula'>
			<h3>{pelicula.Title}</h3>
			<p>{pelicula.Year}</p>
			{pelicula.Poster !== "N/A" ? (
				<img
					src={pelicula.Poster}
					alt='Poster de la pelicula'
				></img>
			) : (
				<img
					src={sinImagen}
					alt='Imagen sin poster'
				></img>
			)}
		</div>
	);
};

export default Pelicula;
