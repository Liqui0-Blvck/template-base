import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/layouts/PageWrapper/PageWrapper';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/authContext';
import Input from '../../components/form/Input';
import FieldWrap from '../../components/form/FieldWrap';
import Icon from '../../components/icon/Icon';
import Validation from '../../components/form/Validation';
import SnakeToBrain from '../../components/SnakeToBrain';
import useBtnAction from '../../hooks/useBtnAction';
import { useKeyPress } from 'react-use'

type TValues = {
	email: string;
	password: string;
};

const LoginPage = () => {
	const { onLogin } = useAuth();
	const [submit, setSubmit] = useState<boolean>(false);
	const { handleSubmit, isSubmitting } = useBtnAction()
	const isPressed = useKeyPress('Enter')
	

	useEffect(() => {
		if (isPressed[0] && !isSubmitting) {
			formik.handleSubmit()
		} 
	}, [isPressed])

	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate: (values: TValues) => {
			const errors: Partial<TValues> = {};
	
			// Validación del campo de email
			if (!values.email) {
				errors.email = "El email es requerido";
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
				errors.email = "Formato de email inválido";
			}
	
			// Validación del campo de contraseña
			if (!values.password) {
				errors.password = "La contraseña es requerida";
			} else if (values.password.length < 6) {
				errors.password = "La contraseña debe tener al menos 6 caracteres";
			}
	
			return errors;
		},
		onSubmit: async (values: TValues) => {
			try {
				// Manejar la lógica de envío del formulario con handleSubmit
				await handleSubmit(async () => {
					await onLogin(values.email, values.password);
				});
			} catch (error) {
				console.error("Error al iniciar sesión:", error);
			}
		},
	});

	return (
		<PageWrapper isProtectedRoute={false} className='bg-white dark:bg-inherit' name='Sign In'>
			<div className="flex flex-col md:flex-row h-screen">
				<div className="w-full md:w-8/12 flex items-center m-auto justify-center flex-col gap-8 border py-10 px-5 rounded-lg">
					<div>
						<span className="text-4xl font-semibold">Inicia Sesión</span>
					</div>
					<div className="border border-zinc-500/25 dark:border-zinc-500/50 w-full" />
					<div>
						<span>Ingresa con tu correo</span>
					</div>
					<form className="flex flex-col gap-4 w-full" noValidate>
						<div className={classNames({ 'mb-2': !formik.isValid })}>
							<Validation
								isValid={formik.isValid}
								isTouched={formik.touched.email}
								invalidFeedback={formik.errors.email}
								validFeedback="Good"
							>
								<FieldWrap firstSuffix={<Icon icon="HeroEnvelope" className="mx-2" />}>
									<Input
										dimension="lg"
										id="email"
										autoComplete="email"
										name="email"
										placeholder="Email"
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</FieldWrap>
							</Validation>
						</div>
						<div className={classNames({ 'mb-2': !formik.isValid })}>
							<Validation
								isValid={formik.isValid}
								isTouched={formik.touched.password}
								invalidFeedback={formik.errors.password}
								validFeedback="Good"
							>
								<FieldWrap
									firstSuffix={<Icon icon="HeroKey" className="mx-2" />}
									lastSuffix={
										<Icon
											className="mx-2 cursor-pointer"
											icon={passwordShowStatus ? "HeroEyeSlash" : "HeroEye"}
											onClick={() => {
												setPasswordShowStatus(!passwordShowStatus);
											}}
										/>
									}
								>
									<Input
										dimension="lg"
										type={passwordShowStatus ? "text" : "password"}
										autoComplete="current-password"
										id="password"
										name="password"
										placeholder="Password"
										value={formik.values.password}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</FieldWrap>
							</Validation>
						</div>
						<div>
							<Button
								size="lg"
								isDisable={isSubmitting}
								variant="solid"
								className="w-full font-semibold"
								onClick={() => formik.handleSubmit()}
							>
								{isSubmitting ? 'Cargando...' : 'Iniciar Sesión'}
							</Button>
						</div>
					</form>
					<div />
					<div>
						<span className="flex gap-2 text-sm">
							<span className="text-zinc-400 dark:text-zinc-600">
								Tienes una cuenta?
							</span>
							<Link to="/" className="hover:text-inherit">
								Registrate
							</Link>
						</span>
					</div>
				</div>
			</div>

		</PageWrapper>
	);
};

export default LoginPage;
