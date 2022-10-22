import axios from "axios";
import moment from "moment";


import { useEffect, useState } from "react";
import { Card, Col, Container, FloatingLabel, Row } from "react-bootstrap";

import { Link,  useParams } from "react-router-dom";
import { DETALLE_USUARIO_GET} from "../Connections/helpers/endpoint";





const UsuarioDetalle =()=>{
    
    const [usuario, setUsuario] = useState(null)
    const {id}=useParams()
    


    useEffect(()=>{

        axios.get(`${DETALLE_USUARIO_GET}/${id}`)
            .then(respuesta=>{

                setUsuario(respuesta.data)
            }).catch(e=>{
                console.log(e)
            })
    },[id])

      

   return( 
    
    <Container className="mt-4 mb-4 ">
        <Row className="row justify-content-md-center">
            <Col sm="10" md="10" lg="8">
            <h3 className="text-center">Usuario</h3>
            <Link to={"/admin"} className="AtrasIcon">
                <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
            </Link>
                {usuario && (
                <Card.Body>


                <Container className="mt-3">
                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Nombres</label>
                            <FloatingLabel  className="form-control" >{usuario.nombres}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Tipo de documento</label>
                            <FloatingLabel  className="form-control" >{usuario.tipoDocumento}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Documento</label>
                            <FloatingLabel  className="form-control" >{usuario.documento}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Fecha de nacimiento</label>
                            <FloatingLabel  className="form-control" >{moment(usuario.fechaDeNacimiento).format("D[/]MM[/]YYYY")}</FloatingLabel>
                        </Container> 

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Correo Electronico</label>
                            <FloatingLabel  className="form-control" >{usuario.email}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Direccion</label>
                            <FloatingLabel  className="form-control" >{usuario.direccion}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Celular</label>
                            <FloatingLabel  className="form-control" >{usuario.celular}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Usuario</label>
                            <FloatingLabel  className="form-control" >{usuario.username}</FloatingLabel>
                        </Container>

                </Container>         
        
                </Card.Body>
                )}
                
            </Col>
        </Row>
    </Container>
   )   
}

export {UsuarioDetalle}