import { Field, Form, Formik } from "formik";

const FormularioBusqueda = () => {
	return (
		<div id='formulario-registro'>
			<h1>👤 Formulario de contacto</h1>

			<Formik
				initialValues={{
					nombre: "",
					email: "",
					comentario: "",
					hermanos: "3",
				}}
				onSubmit={(values) => {
					console.log(values);
					alert(JSON.stringify(values));
				}}
			>
				{({ values }) => (
					<Form>
						<label htmlFor='nombre'>Nombre</label>
						<Field
							id='nombre'
							name='nombre'
						></Field>

						<label htmlFor='email'>Email</label>
						<Field
							id='email'
							name='email'
							type='email'
							placeholder='ejemplo@dominio.es'
						></Field>

						<label htmlFor='comentario'>Comentario</label>
						<Field
							id='comentario'
							name='comentario'
							type='textarea'
						></Field>

						<div id='grupo-radio'>Familia numerosa</div>
						<div
							role='group'
							aria-labelledby='grupo-radio'
						>
							<label className='radiales'>
								<Field
									type='radio'
									name='numerosa'
									value='Si'
								/>
								Si
							</label>
							<label className='radiales'>
								<Field
									type='radio'
									name='numerosa'
									value='No'
								/>
								No
							</label>

							{values.numerosa === "Si" && (
								<>
									<br />
									<label htmlFor='hermanos'>
										Numero de hermanos
									</label>
									<Field
										id='hermanos'
										name='hermanos'
										type='number'
									></Field>
								</>
							)}
						</div>

						<button type='submit'>Guardar</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormularioBusqueda;
