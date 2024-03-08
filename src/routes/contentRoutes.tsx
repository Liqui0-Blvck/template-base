import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { appPages, authPages, componentsPages, examplePages } from '../config/pages.config';
import NotFoundPage from '../pages/NotFound.page';
import LoginPage from '../pages/auth/Login.page';
import FormularioRegistroProductores from '../pages/productores/Formulario Registro/FormularioRegistroProductores';
import ListaCamiones from '@/pages/camiones/ListaCamiones';






// const ProjectDashboardPage = lazy(
// 	() => import('../pages/project/ProjectDashboardPage/ProjectDashboard.page'),
// );
// const ProjectBoardPage = lazy(() => import('../pages/project/ProjectBoardPage/ProjectBoard.page'));


const ProfilePage = lazy(() => import('../pages/Profile.page'));
const HomePage = lazy(() => import('../pages/main/Main.Page'))

//	PRODUCTORES
const Productores = lazy(() => import('../pages/productores/ListaProductores'))
const RegistroProductor = lazy(() => import('../pages/productores/Formulario Registro/FormularioRegistroProductores'))
const DetalleProductor = lazy(() => import('../pages/productores/Detalle/DetalleProductor'))


// 	CAMIONES
const Camiones = lazy(() => import('../pages/camiones/ListaCamiones'))




// CONDUCTORES 
const Conductores = lazy(() => import('../pages/choferes/ListaConductores'))



// Comercializadores
const Comercializadores = lazy(() => import('../pages/comercializador/ListaComercializadores'))


/**
 * Other
 */
const UnderConstructionPage = lazy(() => import('../pages/UnderConstruction.page'));

const contentRoutes: RouteProps[] = [


	// {
	// 	path: appPages.projectAppPages.subPages.projectDashboardPage.to,
	// 	element: <ProjectDashboardPage />,
	// },
	// {
	// 	path: `${appPages.projectAppPages.subPages.projectBoardPageLink.to}/:id`,
	// 	element: <ProjectBoardPage />,
	// },

	// {
	// 	path: appPages.educationAppPages.to,
	// 	element: <UnderConstructionPage />,
	// },

	// {
	// 	path: appPages.reservationAppPages.to,
	// 	element: <UnderConstructionPage />,
	// },

	{
		path: appPages.mailAppPages.to,
		element: <UnderConstructionPage />,
	},
	{ path: appPages.mainAppPages.to, element: <HomePage /> },

	// Productores
	{ path: appPages.registroAppPages.subPages.productores.to, element: <Productores /> },
	{ path: '/app/registro-productor', element: <RegistroProductor /> },
	{ path: '/app/productor/:id', element: <DetalleProductor /> },


	// Camiones
	{ path: appPages.registroAppPages.subPages.camiones.to, element: <Camiones /> },
	// { path: '/app/registro-productor', element: <RegistroProductor /> },
	// { path: '/app/productor/:id', element: <DetalleProductor /> },

	// Conductores
	{ path: appPages.registroAppPages.subPages.conductores.to, element: <Conductores /> },


	// Comercializadores

	{ path: appPages.registroAppPages.subPages.comercializadores.to, element: <Comercializadores /> },



	// { path: authPages.profilePage.to, element: <ProfilePage /> },
	{ path: authPages.loginPage.to, element: <LoginPage /> },
	{ path: authPages.profilePage.to, element: <ProfilePage /> },

	{ path: '*', element: <NotFoundPage /> },
];

export default contentRoutes;
