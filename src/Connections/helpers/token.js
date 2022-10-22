import axios from "axios"
import jwtDecode from "jwt-decode"
import { usuario } from "../../states/sliceReducers"
import {store} from "../../states/store"
 

export const setAuthentucacionToken=(token)=>{

    if (token) {
        
        axios.defaults.headers.common["Authorization"]=token
        console.log("token "+token)
    }else{
        delete axios.defaults.headers.common["Authorization"]
    }
}

export const getAuthentucacionToken=()=>{

    if (localStorage.token) {
        setAuthentucacionToken(localStorage.token)

        const decodificado=jwtDecode(localStorage.token)

        store.dispatch(usuario({usuario: decodificado, conectado : true}))

        const tiempoActual = Math.floor(Date.now()/1000)

        if (decodificado.exp < tiempoActual) {
            window.location.href="/"
        }
    }
}


