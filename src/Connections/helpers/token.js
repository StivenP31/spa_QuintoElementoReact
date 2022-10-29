import axios from "axios"
import jwtDecode from "jwt-decode"
import { usuario } from "../../states/sliceReducers"
import {store} from "../../states/store"
import { cerrarSesion } from "../usuarioAcciones"
 

export const setAuthentucacionToken=(authorization)=>{

    if (authorization) {
        
        axios.defaults.headers.common["Authorization"]=authorization
        
    }else{
        delete axios.defaults.headers.common["Authorization"]
    }
}

export const getAuthentucacionToken=()=>{

    if (localStorage.authorization) {

        
        setAuthentucacionToken(localStorage.authorization)

        const decodificado=jwtDecode(localStorage.authorization)
        
        store.dispatch(usuario({usuario: decodificado, conectado : true}))
        
        
        const tiempoActual = Math.floor(Date.now()/1000)
        
        if (decodificado.exp < tiempoActual) {
            store.dispatch(cerrarSesion())
            window.location.href="/"
        }
    }
    

}


