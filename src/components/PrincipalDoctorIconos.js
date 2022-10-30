
import { Button, Col, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { cerrarSesion } from "../Connections/usuarioAcciones";


const PrincipalDoctorIconos = () =>{

             
        

        const enviarAccion = useDispatch();

    const vistaPrincipalDoctorIconos =

    
        <Container className="row mb-3 mt-3 text-center "  sm="12" md="3" lg="3" xl="4">  

                <Col >
                <Container>  
                        <Link to={`/citas/consultorio/101`}> 
                        <Container  className="imgUsersPlus" > 
                                <i id="iconAdmin" className="fa-solid fa-hospital" ></i>
                                <p className="textUsuario">Consultorio 101</p>       
                        </Container></Link> 
                            
                </Container>        
                
                                               
                  
                </Col>           
                <Col >
                        
                
                                <Container>    
                                        <Link to={"/citas/consultorio/102"}>
                                        <Container  className="imgUsersPlus justify-content-md-center" > 
                                                <i id="iconAdmin" className="fa-solid fa-hospital" ></i>
                                                <p className="textUsuario text-center">Consultorio 102</p>       
                                        </Container>
                                        </Link>
                                </Container>
                                
                </Col> 

                <Col >
            
                <Container text-center >   
                                <Link to={"/citas/consultorio/103"}> 
                                <Container  className="imgUsersPlus"> 
                                        <i id="iconAdmin" className="fa-solid fa-hospital" ></i>
                                        <p className="textUsuario">Consultorio 103</p>       
                                </Container>
                                </Link>
                </Container>
                                
                        <Button  onClick={()=>enviarAccion(cerrarSesion())} variant="outline-primary mt-3" id="bottonCerrarSesion"  >Cerrar sesión</Button>
                                

                </Col>   
                        
                
                </Container>

    return vistaPrincipalDoctorIconos
}

export {PrincipalDoctorIconos}