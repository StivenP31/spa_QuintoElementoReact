import { Button, Col, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { cerrarSesion } from "../Connections/usuarioAcciones";



const PrincipalRecepcionIconos = () =>{

        

        const enviarAccion = useDispatch();

    const vistaPrincipalRecepcionIconos =

    

        <Container className="row mb-3 mt-3 text-center "  sm="12" md="3" lg="3" xl="3">  

        <Col >
        
                                
                                        
                <Container>  
                        <Link to={"/recepcion/crearpaciente"}> 
                        <Container  className="imgUsersPlus"> 
                                <i id="iconAdmin" className="fa-solid fa-hospital-user" ></i>
                                <p className="textUsuario">Crear Paciente</p>       
                        </Container></Link>
                                               
                </Container>
        </Col>           
            <Col >
                    
            
                            <Container>    
                                    <Link to={"/recepcion/verpacientes"}>
                                    <Container  className="imgUsers justify-content-md-center" > 
                                            <i id="iconAdmin" className="fa-solid fa-users" ></i>
                                            <p className="textUsuario text-center">Ver pacientes</p>       
                                    </Container>
                                    </Link>
                            </Container>
                            
            </Col> 


            <Col >
            
                    <Container>    
                            <Link to={"/recepcion/crearcita"}>
                            <Container  className="imgUsersPlus justify-content-md-center" > 
                                    <i id="iconAdmin" className="fa-solid fa-book" ></i>
                                    <p className="textUsuario text-center">Crear cita</p>       
                            </Container>
                            </Link>
                    </Container>
                    
    </Col> 


            <Col >
       

        
                <Container>    
                    <Link to={"/recepcion/vercita"}>
                    <Container  className="imgUsers justify-content-md-center" > 
                            <i id="iconAdmin" className="fa-solid fa-calendar-days" ></i>
                            <p className="textUsuario text-center">Ver Citas</p>       
                    </Container>
                    </Link>
                </Container>
       



                    <Button  onClick={()=>enviarAccion(cerrarSesion())} variant="outline-primary mt-3" id="bottonCerrarSesion"  >Cerrar sesión</Button>
           

                </Col>  

        </Container>

          
    return vistaPrincipalRecepcionIconos
}

export {PrincipalRecepcionIconos}