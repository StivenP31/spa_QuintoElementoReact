import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"

import { PrincipalRecepcionIconos } from "../components/PrincipalRececpcionIconos"



const PrincipalRecepcion = () =>{

    const conectado = useSelector (estado=>estado.conectado)
    const usuario = useSelector (estado=>estado.usuario)




    const vistaPrincipalRecepcion =

    <Container className="mt-4 mb-4 justify-content-md-center">
            <Container className="card-body">
           
            { conectado ?(
             <Container className="userAdmin text-end">  
                <i class="fa-solid fa-desktop"> {usuario.sub}</i>
            </Container> ):
            ( window.location.href="/recepcion" ) }
            <h3 className="text-center">Recepción</h3>
                <PrincipalRecepcionIconos/>
                  </Container>
    </Container>
           
        
    

   


    return vistaPrincipalRecepcion
}

export {PrincipalRecepcion}