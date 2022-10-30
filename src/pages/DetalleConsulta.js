import axios from "axios";
import moment from "moment";


import { useEffect, useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Row } from "react-bootstrap";

import { Link,  useParams } from "react-router-dom";
import { DETALLE_CITA_GET } from "../Connections/helpers/endpoint";





const DetalleConsulta =()=>{
    
    const [cita, setCita] = useState(null)
    const {id}=useParams()
    


    useEffect(()=>{

        axios.get(`${DETALLE_CITA_GET}/${id}`)
            .then(respuesta=>{

                setCita(respuesta.data)
                console.log(respuesta.data)
            }).catch(e=>{
                console.log(e)
            })
    },[id])

      

   return( 
    
    <Container className="mt-4 mb-4 ">
        <Row className="row justify-content-md-center">
            <Col sm="10" md="10" lg="8">
            <h3 className="text-center">Consulta</h3>
            <Link to={"/doctor"} className="AtrasIcon">
                <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
            </Link>
                {cita && (
                <Card.Body>


                <Container className="mt-3">
                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label  >Nombres</label>
                            <FloatingLabel  className="form-control" >{cita.pacienteEntity.nombre}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label  >Apellido</label>
                            <FloatingLabel  className="form-control" >{cita.pacienteEntity.apellido}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label  >Documento</label>
                            <FloatingLabel  className="form-control" >{cita.pacienteEntity.numeroDeDocumento}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label  >Fecha de cita</label>
                            <FloatingLabel  className="form-control" >{moment(cita.fechaDeCita).format("D[/]MM[/]YYYY")}</FloatingLabel>
                        </Container> 

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label  >Tipo de cita</label>
                            <FloatingLabel  className="form-control" >{cita.tipoDeCita}</FloatingLabel>
                        </Container>

                        <Container className="mb-2 mt-2 mb-lg-3" >
                            <label  >Notas</label>
                            <FloatingLabel  className="form-control" >{cita.notas}</FloatingLabel>
                        </Container>

                        <Button id="botonHistorial" variant="secondary">Historial clinico</Button>
                </Container>         
        
                

                </Card.Body>
                )}
                
            </Col>
        </Row>
    </Container>
   )   
}

export {DetalleConsulta}