import { useFormik } from 'formik'
import Input from '../../../components/form/Input'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import SelectReact, { TSelectOptions } from '../../../components/form/SelectReact'
import { useAuth } from '../../../context/authContext'
import useDarkMode from '../../../hooks/useDarkMode'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useAuthenticatedFetch } from '../../../hooks/useAxiosFunction'
import { TComercializador } from '../../../types/registros types/registros.types'
import Label from '../../../components/form/Label'
import Validation from '../../../components/form/Validation'
import FieldWrap from '../../../components/form/FieldWrap'

interface IFormComercializadorProps {
  refresh: Dispatch<SetStateAction<boolean>>
  setOpen: Dispatch<SetStateAction<boolean>>
  id: number
}

const FormularioEdicionComercializador: FC<IFormComercializadorProps> = ({ refresh, setOpen, id }) => {
  const { isDarkTheme } = useDarkMode()
  const base_url = process.env.VITE_BASE_URL_DEV
  const navigate = useNavigate()
  const { authTokens, validate } = useAuth()
  const { data: comercializador } = useAuthenticatedFetch<TComercializador>(
    authTokens,
    validate,
    `/api/comercializador/${id}`
  )


  const formik = useFormik({
    initialValues: {
      nombre: "",
      razon_social: "",
      giro: "",
      direccion: "",
      zip_code: "",
      email_comercializador: ""
    },
    onSubmit: async (values: any) => {
      try {
        const res = await fetch(`${base_url}/api/comercializador/${id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens?.access}`
          },
          body: JSON.stringify({
            ...values
          })
        })
        if (res.ok) {
          toast.success("El comercializador fue editado exitosamente!!")
          refresh(true)
          setOpen(false)
          navigate('/app/comercializadores')

        } else {
          toast.error("No se pudo editado el camión volver a intentar")
        }
      } catch (error) {
        console.log(error)
      }
    }
  })

  useEffect(() => {
    let isMounted = true

    if (isMounted && comercializador) {
      formik.setValues({
        nombre: comercializador.nombre,
        razon_social: comercializador.razon_social,
        giro: comercializador.giro,
        direccion: comercializador.direccion,
        zip_code: comercializador.zip_code,
        email_comercializador: comercializador.email_comercializador
      })
    }

    return () => {
      isMounted = false
    }
  }, [comercializador])

  
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`
      flex flex-col 
      md:grid md:grid-cols-6 gap-x-4 gap-y-8 mt-10 
      relative p-4 ${isDarkTheme ? oneDark : oneLight} rounded-md`}
    >
      <div className='md:col-span-2 md:flex-col items-center'>
        <Label htmlFor='nombre'>Nombre: </Label>

        <Validation
          isValid={formik.isValid}
          isTouched={formik.touched.nombre ? true : undefined}
          invalidFeedback={formik.errors.nombre ? String(formik.errors.nombre) : undefined}
          >
          <FieldWrap>
          <Input
            type='text'
            name='nombre'
            onChange={formik.handleChange}
            className='py-3'
            value={formik.values.nombre}
          />
          </FieldWrap>
        </Validation>
       
      </div>

      <div className='md:col-span-2 md:col-start-3 md:flex-col items-center'>
        <Label htmlFor='razon_social'>Razón Social: </Label>

        <Validation
          isValid={formik.isValid}
          isTouched={formik.touched.razon_social ? true : undefined}
          invalidFeedback={formik.errors.razon_social ? String(formik.errors.razon_social) : undefined}
          >
          <FieldWrap>
          <Input
            type='text'
            name='razon_social'
            onChange={formik.handleChange}
            className='py-3'
            value={formik.values.razon_social}
          />
          </FieldWrap>
        </Validation>
      </div>

      <div className='md:col-span-2 md:col-start-5 md:flex-col items-center'>
        <Label htmlFor='giro'>Giro Comercial: </Label>

        <Validation
          isValid={formik.isValid}
          isTouched={formik.touched.giro ? true : undefined}
          invalidFeedback={formik.errors.giro ? String(formik.errors.giro) : undefined}
          >
          <FieldWrap>
          <Input
            type='text'
            name='giro'
            onChange={formik.handleChange}
            className='py-3'
            value={formik.values.giro}
          />
          </FieldWrap>
        </Validation>

      </div>
      
      
      <div className='md:col-span-2 md:row-start-2  md:flex-col items-center'>
        <Label htmlFor='direccion'>Dirección: </Label>

        <Validation
          isValid={formik.isValid}
          isTouched={formik.touched.direccion ? true : undefined}
          invalidFeedback={formik.errors.direccion ? String(formik.errors.direccion) : undefined}
          >
          <FieldWrap>
          <Input
            type='text'
            name='direccion'
            onChange={formik.handleChange}
            className='py-3'
            value={formik.values.direccion}
          />
          </FieldWrap>
        </Validation>
      </div>
      

      <div className='md:col-span-2 md:row-start-2 md:col-start-3 md:flex-col items-center'>
        <Label htmlFor='zip_code'>Código de Zona (Zip Code):  </Label>

        <Validation
          isValid={formik.isValid}
          isTouched={formik.touched.zip_code ? true : undefined}
          invalidFeedback={formik.errors.zip_code ? String(formik.errors.zip_code) : undefined}
          >
          <FieldWrap>
          <Input
            type='text'
            name='zip_code'
            onChange={formik.handleChange}
            className='py-3'
            value={formik.values.zip_code}
          />
          </FieldWrap>
        </Validation>
      </div>

      

      <div className='md:col-span-2 md:row-start-2 md:col-start-5 md:flex-col items-center'>
        <Label htmlFor='email_comercializador'>Email Comercializador:  </Label>

        <Validation
          isValid={formik.isValid}
          isTouched={formik.touched.email_comercializador ? true : undefined}
          invalidFeedback={formik.errors.email_comercializador ? String(formik.errors.email_comercializador) : undefined}
          >
          <FieldWrap>
          <Input
            type='text'
            name='email_comercializador'
            onChange={formik.handleChange}
            className='py-3'
            value={formik.values.email_comercializador}
          />
          </FieldWrap>
        </Validation>
      </div>


      <div className='md:row-start-3 md:col-start-5 md:col-span-2 relative w-full h-14'>
        <button type='submit' className='w-full h-full bg-[#3B82F6] hover:bg-[#3b83f6c9] rounded-md text-white py-3'>Guardar Cambios</button>
      </div>
    </form>

  )
}

export default FormularioEdicionComercializador  
