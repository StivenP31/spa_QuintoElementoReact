import axios from "axios";
import { useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CrearPacientesFormulario } from "../components/CrearPacienteFormulario";

import { CREAR_PACIENTE_POST } from "../Connections/helpers/endpoint";

const CrearPaciente =()=>{
    
    const [errores, setErrores] = useState({})
    const navegar = useNavigate()
    
    const crearUsuario = ({nombre,apellido,sexo,fechaDeNacimiento,edad,numeroDeDocumento,tipoDeDocumento,telefonoDeContacto,correo,direccion}) =>{

        const error= {}
        setErrores(error)
        
        axios.post(CREAR_PACIENTE_POST,
            {nombre,apellido,sexo,fechaDeNacimiento,edad,numeroDeDocumento,tipoDeDocumento,telefonoDeContacto,correo,direccion},
            {headers: {'Accept': 'application/json'  , "Content-Type":"application/json"}})
            .then(respuesta=>{
                console.log(respuesta)
                navegar("/recepcion")
            }).catch(err=>{
                setErrores({err})

            })
    } 
   return( 
    <Container className="mt-4 mb-4 justify-content-md-center">
        <Row className="row justify-content-md-center">
            <Col sm="12" md="8" lg="6">
                
                <h3 className="text-center">Crear Paciente</h3>
                <Link to={"/recepcion"} className="AtrasIcon">
                    <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
                </Link>
                <Card.Body>

                        {errores.crear && <Alert variant="danger">{errores}</Alert>}

                        <CrearPacientesFormulario errores={errores} callback={crearUsuario} />

                </Card.Body>


            </Col>
        </Row>
    </Container>

   )
    
}

export {CrearPaciente}