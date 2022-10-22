import axios from "axios"
import jwtDecode from "jwt-decode"
import { setAuthentucacionToken } from "./helpers/token"
import {LOGIN_POST } from "./helpers/endpoint"
import { usuario } from "../states/sliceReducers"

export const autenticacion = (datos) => dispatch => {
    
    console.log( "autenticacion" + datos)

    return new Promise((resolver , rechazar)=>{

        console.log("Crea la promesa") 

        axios.post(LOGIN_POST, datos, 
            {headers: {'Accept': 'application/json'  , "Content-Type":"application/json"}})
            .then(respuesta=>{

                console.log("respuesta "+ datos.rolusuario)
            

            const {authorization} = respuesta.headers
            const {rolusuario} = respuesta.headers
                
            localStorage.setItem('authorization', authorization)   
            localStorage.setItem('Rol', rolusuario)  
            
            console.log(rolusuario)
            console.log(authorization)
            setAuthentucacionToken(authorization)

            const decodificado=jwtDecode(authorization)

            console.log(decodificado)  
  
            dispatch(usuario({usuario: decodificado, conectado : true}))
            
            resolver(respuesta)


            
         }).catch(err=>{
            rechazar(err)
        })

    })
}