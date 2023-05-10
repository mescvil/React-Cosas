import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>🏠 Inicio</Link>
				</li>
				<li>
					<Link to='/formulario'>📝 Registro</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
