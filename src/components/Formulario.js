import { Field, Form, Formik } from "formik";

const FormularioBusqueda = (eventoBusqueda) => {
	return (
		<div id='formularioBusqueda'>
			<h2>Buscador</h2>
			<Formik
				initialValues={{ tituloPelicula: "" }}
				onSubmit={(values) => {
					eventoBusqueda(values.tituloPelicula);
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
	);
};

export default FormularioBusqueda;
