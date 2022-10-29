import axios from "axios";
import moment from "moment";


import { useEffect, useState } from "react";
import { Card, Col, Container, FloatingLabel, Row } from "react-bootstrap";

import { Link,  useParams } from "react-router-dom";
import { DETALLE_PACIENTE_GET } from "../Connections/helpers/endpoint";





const PacienteDetalle =()=>{
    
    const [paciente, setPaciente] = useState(null)
    const {id}=useParams()
    


    useEffect(()=>{

        axios.get(`${DETALLE_PACIENTE_GET}/${id}`)
            .then(respuesta=>{

                setPaciente(respuesta.data)
                console.log(respuesta.data)
            }).catch(e=>{
                console.log(e)
            })
    },[id])

      

   return( 
    
    <Container className="mt-4 mb-4 ">
        <Row className="row justify-content-md-center">
            <Col sm="10" md="10" lg="8">
            <h3 className="text-center">Usuario</h3>
            <Link to={"/recepcion"} className="AtrasIcon">
                <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
            </Link>
                {paciente && (
                <Card.Body>


                <Container className="mt-3">
                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Nombres</label>
                            <FloatingLabel  className="form-control" >{paciente.nombre}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Tipo de documento</label>
                            <FloatingLabel  className="form-control" >{paciente.apellido}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Documento</label>
                            <FloatingLabel  className="form-control" >{paciente.numeroDeDocumento}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Fecha de nacimiento</label>
                            <FloatingLabel  className="form-control" >{moment(paciente.fechaDeNacimiento).format("D[/]MM[/]YYYY")}</FloatingLabel>
                        </Container> 

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Genero</label>
                            <FloatingLabel  className="form-control" >{paciente.sexo}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Dirección</label>
                            <FloatingLabel  className="form-control" >{paciente.direccion}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Celular</label>
                            <FloatingLabel  className="form-control" >{paciente.telefonoDeContacto}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label for="nombres" className="form-label" >Edad</label>
                            <FloatingLabel  className="form-control" >{paciente.edad}</FloatingLabel>
                        </Container>

                </Container>         
        
                </Card.Body>
                )}
                
            </Col>
        </Row>
    </Container>
   )   
}

export {PacienteDetalle}