import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { PrincipalDoctorIconos } from "../components/PrincipalDoctorIconos"





const PrincipalDoctor = () =>{

    const conectado = useSelector (estado=>estado.conectado)
    const usuario = useSelector (estado=>estado.usuario)




    const vistaPrincipalDoctor =

    <Container className="mt-4 mb-4 justify-content-md-center">
            <Container className="card-body text-center">
            
            { conectado ?(
             <Container className="userAdmin text-end">  
                <i class="fa-solid fa-stethoscope"> {usuario.sub}</i>
            </Container> ):
            ( window.location.href="/doctor" ) }
            <h3 className="text-center">Doctor</h3>
            <PrincipalDoctorIconos/>
            </Container>
    </Container>

return vistaPrincipalDoctor
}

export {PrincipalDoctor}