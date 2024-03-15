import { useAuth } from '../../../context/authContext'
import { useAuthenticatedFetch } from '../../../hooks/useAxiosFunction'
import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper.js'
import Container from '../../../components/layouts/Container/Container.js'
import Card, { CardBody, CardHeader } from '../../../components/ui/Card.js'
import useDarkMode from '../../../hooks/useDarkMode.js'
import { TProductor } from '../../../types/registros types/registros.types.js'
import { FC } from 'react'


interface IDetalleProductor {
  id: number
}

const DetalleProductor: FC<IDetalleProductor> = ({ id }) => {
  const { isDarkTheme } = useDarkMode()
  const { authTokens, validate } = useAuth()
  const { data: productor } = useAuthenticatedFetch<TProductor>(
    authTokens,
    validate,
    `/api/productores/${id}`
  )

  return (
    <PageWrapper>
      <Container>
        <Card>
          <CardHeader>
            Registro Productores
          </CardHeader>

          <CardBody>
            <div
              className='flex flex-col 
            md:grid md:grid-cols-6 gap-x-6 gap-y-8
            relative p-2 rounded-md h-full'
            >
              <div className='md:col-span-2 md:flex-col items-center'>
                <label htmlFor="rut_productor">Rut Productor: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.rut_productor}</span>
                </div>
              </div>

              <div className='md:col-span-2 md:col-start-3 md:flex-col items-center'>
                <label htmlFor="nombre">Nombre: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.nombre}</span>

                </div>
              </div>

              <div className='md:col-span-2 md:col-start-5 md:flex-col items-center'>
                <label htmlFor="email">Correo: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.email}</span>

                </div>
              </div>

              <div className='md:col-span-2 md:row-start-2 md:flex-col items-center'>
                <label htmlFor="region">Región: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.region_nombre}</span>

                </div>
              </div>

              <div className='md:col-span-2  md:row-start-2 md:col-start-3 md:flex-col items-center'>
                <label htmlFor="provincia">Provincia: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.provincia_nombre}</span>

                </div>
              </div>

              <div className='md:col-span-2 md:row-start-2 md:col-start-5 md:flex-col items-center'>
                <label htmlFor="comuna">Comuna: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.comuna_nombre}</span>

                </div>
              </div>

              <div className='md:col-span-2 md:row-start-3  md:flex-col items-center'>
                <label htmlFor="direccion">Dirección: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.direccion}</span>

                </div>
              </div>


              <div className='md:col-span-2 md:row-start-3 md:col-start-3 md:flex-col items-center'>
                <label htmlFor="telefono">Telefono Fijo: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.telefono}</span>

                </div>
              </div>



              <div className='md:col-span-2 md:row-start-3 md:col-start-5 md:flex-col items-center'>
                <label htmlFor="movil">Telefono Celular: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.telefono}</span>

                </div>
              </div>

              <div className='md:col-span-2 md:row-start-4 md:flex-col items-center'>
                <label htmlFor="pagina_web">Página Web: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} px-2 py-4 flex items-center h-12 rounded-md`}>
                  <span className='p-2'>{productor?.pagina_web}</span>

                </div>
              </div>

              <div className='md:col-span-2 md:row-start-4 md:col-start-3 md:flex-col items-center'>
                <label htmlFor="numero_contrato">N° Contrato: </label>
                <div className={`${isDarkTheme ? 'bg-[#27272A] border border-gray-600 ' : 'bg-[#F4F4F5] border border-blue-100 '} p-2 flex items-center h-12 rounded-md`}>
                  <span>{productor?.numero_contrato}</span>

                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </PageWrapper>
  )
}

export default DetalleProductor  