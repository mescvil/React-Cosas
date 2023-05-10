import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const DisplayingErrorMessagesSchema = Yup.object().shape({
	nombre: Yup.string()
		.min(3, "Muy corto")
		.max(45, "Demasiado largo")
		.required("Campo requerido"),
	email: Yup.string()
		.email("Introduce un email valido")
		.required("Campo requerido"),
	comentario: Yup.string().max(200, "Demasiado largo"),
	hermanos: Yup.number()
		.min(3, "Minimo tres hermanos para ser considerado numerosa")
		.max(12, "Sois como muchos no?")
		.positive("No tienes hermanos?"),
});

const FormularioBusqueda = () => {
	return (
		<div id='formulario-registro'>
			<h1>👤 Formulario de contacto</h1>

			<Formik
				initialValues={{
					nombre: "",
					email: "",
					comentario: "",
					numerosa: "No",
					hermanos: "3",
				}}
				validationSchema={DisplayingErrorMessagesSchema}
				onSubmit={(values) => {
					console.log(values);
					alert(JSON.stringify(values));
				}}
			>
				{({ errors, values }) => (
					<Form>
						<label htmlFor='nombre'>Nombre</label>
						<Field
							id='nombre'
							name='nombre'
						></Field>
						{errors.nombre && (
							<div className='label-error'>
								❌ {errors.nombre}
							</div>
						)}

						<label htmlFor='email'>Email</label>
						<Field
							id='email'
							name='email'
							type='email'
						></Field>
						{errors.email && (
							<div className='label-error'>❌ {errors.email}</div>
						)}

						<label htmlFor='comentario'>Comentario</label>
						<Field
							id='comentario'
							name='comentario'
							component='textarea'
							rows='4'
						></Field>
						{errors.comentario && (
							<div className='label-error'>
								❌ {errors.comentario}
							</div>
						)}

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

									{errors.hermanos && (
										<div className='label-error'>
											❌ {errors.hermanos}
										</div>
									)}
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
