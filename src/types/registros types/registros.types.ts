export type TGuia =  {
  id: number,
  lotesrecepcionmp: [],
  camion: string,
  camionero: string,
  estado_recepcion: string,
  productor: string,
  comercializador: string,
  creado_por: string,
  fecha_creacion: string,
  fecha_modificacion: string,
  mezcla_variedades: boolean,
  cierre_guia: boolean,
  tara_camion_1: number,
  tara_camion_2: number,
  terminar_guia: boolean,
  numero_guia_productor: number
}

export type TCamion = {
	id: number,
	fecha_creacion: string,
	fecha_modificacion: string,
	patente: string,
	acoplado: boolean,
	observaciones: string
}

export type TConductor =  {
	id: number
	nombre: string,
	apellido: string,
	rut: string,
	telefono: string
  fecha_creacion: string,
	fecha_modificacion: string,
}

export type TComercializador = {
  id: number,
  nombre: string,
  razon_social: string,
  giro: string,
  direccion: string,
  zip_code: string,
  email_comercializador: string
}

export type TEnvases = {
  id: number,
  nombre: string,
  peso: number,
  descripcion: string,
  fecha_creacion: string,
	fecha_modificacion: string,
}

export type TProductor = {
  id: number,
  rut_productor: string,
  nombre: string,
  telefono: string,
  region: number,
  provincia: number,
  comuna: number,
  direccion: string,
  movil: string,
  pagina_web: string,
  email: string,
	fecha_creacion: string,
	fecha_modificacion: string,
  numero_contrato: number,  
  usuarios: []
}


export type TOperarios = {
  id: number,
  fecha_creacion: string,
  fecha_modificacion: string,
  nombre: string,
  apellido: string,
  rut: string,
  tipo_operario: string,
  activo: boolean,
  etiquetas: string,
  pago_x_kilo: number
}