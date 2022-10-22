import axios from "axios";
import { useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RegistrarseFormulario } from "../components/RegistrarseFormulario"
import { CREAR_USUARIO_POST } from "../Connections/helpers/endpoint";

const Registrarusuario =()=>{
    
    const [errores, setErrores] = useState({})
    const navegar = useNavigate
    
    const registro = ({nombres,apellidos,tipoDocumento,documento,fechaDeNacimiento,email,direccion,celular,nombreRol,username,password}) =>{

        const error= {}
        setErrores(error)
        
        axios.post(CREAR_USUARIO_POST,
            {nombres,apellidos,tipoDocumento,documento,fechaDeNacimiento,email,direccion,celular,nombreRol,username,password},
            {headers: {'Accept': 'application/json'  , "Content-Type":"application/json"}})
            .then(respuesta=>{
                console.log(respuesta)
                navegar("/verusuarios")
            }).catch(err=>{
                setErrores({err})

            })
    } 
   return( 
    <Container className="mt-4 mb-4 justify-content-md-center">
        <Row className="row justify-content-md-center">
            <Col sm="12" md="8" lg="6">
                
                <h3 className="text-center">Registrar Usuario</h3>
                <Link to={"/admin"} className="AtrasIcon">
                    <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
                </Link>
                <Card.Body>

                        {errores.crear && <Alert variant="danger">{errores}</Alert>}

                        <RegistrarseFormulario errores={errores} callback={registro} />

                </Card.Body>

            </Col>
        </Row>
    </Container>

   )
    
}

export {Registrarusuario}