import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { PrincipalAdminIconos } from "../components/PrincipalAdminIconos"



const PrincipalAdmin = () =>{

    const conectado = useSelector (estado=>estado.conectado)
    const usuario = useSelector (estado=>estado.usuario)




    const vistaPrincipalAdmin =

    <Container className="mt-4 mb-4 justify-content-md-center">
            <Container className="card-body">
           
            { conectado ?(
             <Container className="userAdmin text-end">  
                <i className="fa-solid fa-screwdriver-wrench"> {usuario.sub}</i>
            </Container> ):
            ( window.location.href="/" ) }
            <h3 className="text-center">Administrador</h3>
                <PrincipalAdminIconos/>
                  </Container>
    </Container>
           
        
    

   


    return vistaPrincipalAdmin
}

export {PrincipalAdmin}