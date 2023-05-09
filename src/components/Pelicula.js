const Pelicula = ({ pelicula }) => {
	return (
		<div className='pelicula'>
			<h3>{pelicula.Title}</h3>
			<p>{pelicula.Year}</p>
			{pelicula.Poster !== "N/A" && (
				<img
					src={pelicula.Poster}
					alt='Poster de la pelicula'
				></img>
			)}
		</div>
	);
};

export default Pelicula;
