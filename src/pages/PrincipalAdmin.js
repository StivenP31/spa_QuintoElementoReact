import { Container } from "react-bootstrap"
import { PrincipalAdminIconos } from "../components/PrincipalAdminIconos"



const PrincipalAdmin = () =>{
    const vistaPrincipalAdmin =

    <Container className="mt-4 mb-4 justify-content-md-center">
            <Container className="card-body">
            <h3 className="text-center">Administrador</h3>
                <PrincipalAdminIconos/>
                  </Container>
    </Container>
           
        
    

   


    return vistaPrincipalAdmin
}

export {PrincipalAdmin}