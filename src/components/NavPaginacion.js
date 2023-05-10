const NavPaginacion = (props) => {
	const { anteriorPaginaClick, siguienePaginaClick, paginas, paginaActual } =
		props;

	return (
		<div>
			<button
				onClick={anteriorPaginaClick}
				disabled={paginaActual === 1}
			>
				Anterior
			</button>
			<p>
				{paginaActual}/{paginas}
			</p>
			<button
				onClick={siguienePaginaClick}
				disabled={paginaActual === paginas}
			>
				Siguiente
			</button>
		</div>
	);
};

export default NavPaginacion;
