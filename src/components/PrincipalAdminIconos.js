import { Button, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"


const PrincipalAdminIconos = () =>{
    const vistaPrincipalAdminIconos =

    

        <Container className="row mb-3 mt-3 text-center "  sm="12" md="4" lg="4" xl="4">  

        <Col >
         
                                
                                        
                <Container>  
                        <Link to={"/registrarusuario"}> 
                        <Container  className="imgUsersPlus"> 
                                <i id="iconAdmin" className="fa-solid fa-user-plus" ></i>
                                <p className="textUsuario">Agregar Usuario</p>       
                        </Container></Link>
                                               
                </Container>
        </Col>           
        <Col >
                
        
                        <Container>    
                                <Link to={"#/"}>
                                <Container  className="imgUsers justify-content-md-center" > 
                                        <i id="iconAdmin" className="fa-solid fa-users" ></i>
                                        <p className="textUsuario text-center">Ver usuarios</p>       
                                </Container>
                                </Link>
                        </Container>
                         
        </Col> 

        <Col >
       
        <Container text-center >   
                        <Link to={"#/"}> 
                        <Container  className="imgUsersDelete"> 
                                <i id="iconAdmin" className="fa-solid fa-user-minus" ></i>
                                <p className="textUsuario">Eliminar Usuario</p>       
                        </Container>
                        </Link>
        </Container>
                        
                        <Button variant="outline-primary mt-3" id="bottonCerrarSesion" type="submit"  >Cerrar sesion</Button>
                        

        </Col>   
                
        
        </Container>

        
   

    return vistaPrincipalAdminIconos
}

export {PrincipalAdminIconos}