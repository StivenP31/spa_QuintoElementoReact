const API_URL="http://localhost:8080"

export const LOGIN_POST=API_URL+"/login"
//Endpoint administrador
export const CREAR_USUARIO_POST =API_URL+"/admin"
export const VER_USUARIO_ACTIVO_GET=API_URL+"/admin"
export const VER_TODOS_LOS_USUARIOS_GET=API_URL+"/admin/verusuarios"
export const DETALLE_USUARIO_GET=API_URL+"/admin"
export const ELIMINAR_USUARIO_DELETE=API_URL+"/admin"

//Endpoint Recepcion

export const CREAR_PACIENTE_POST=API_URL+"/recepcion/crearpaciente"
export const VER_PACIENTE_GET=API_URL+"/recepcion/verpacientes"
export const CREAR_CITA_POST=API_URL+"/citas"
export const VER_CITAS_GET=API_URL+"/citas/leercitas"
export const DETALLE_PACIENTE_GET=API_URL+"/recepcion"
export const DETALLE_CITA_GET=API_URL+"/citas"



//Endopoint doctor
export const CONSULTORIO_GET=API_URL+"/citas/consultorio"
export const CREAR_HISTORIAL_POST=API_URL+"/historial"
export const BUSCAR_HISTORIAL_GET=API_URL+"historial/mihistorial"
export const TODOS_LOS_HISTORIALES=API_URL+"/historial/historialcreado"

