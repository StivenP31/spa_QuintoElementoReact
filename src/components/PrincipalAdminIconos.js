import { Button, Col, Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { cerrarSesion } from "../Connections/usuarioAcciones";



const PrincipalAdminIconos = () =>{

        

        const enviarAccion = useDispatch();

    const vistaPrincipalAdminIconos =

    

        <Container className="row mb-3 mt-3 text-center "  sm="12" md="3" lg="3" xl="4">  

        <Col >
         
                                
                                        
                <Container>  
                        <Link to={"/admin/registrarusuario"}> 
                        <Container  className="imgUsersPlus"> 
                                <i id="iconAdmin" className="fa-solid fa-user-plus" ></i>
                                <p className="textUsuario">Agregar Usuario</p>       
                        </Container></Link>
                                               
                </Container>
        </Col>           
        <Col >
                
        
                        <Container>    
                                <Link to={"/admin/verusuarios"}>
                                <Container  className="imgUsers justify-content-md-center" > 
                                        <i id="iconAdmin" className="fa-solid fa-users" ></i>
                                        <p className="textUsuario text-center">Ver usuarios</p>       
                                </Container>
                                </Link>
                        </Container>
                         
        </Col> 

        <Col >
       
        <Container text-center >   
                        <Link to={"/admin/eliminarusuariopagina"}> 
                        <Container  className="imgUsersDelete"> 
                                <i id="iconAdmin" className="fa-solid fa-user-minus" ></i>
                                <p className="textUsuario">Eliminar Usuario</p>       
                        </Container>
                        </Link>
        </Container>
                        
                <Button  onClick={()=>enviarAccion(cerrarSesion())} variant="outline-primary mt-3" id="bottonCerrarSesion"  >Cerrar sesión</Button>
                        

        </Col>   
                
        
        </Container>

        
   

    return vistaPrincipalAdminIconos
}

export {PrincipalAdminIconos}