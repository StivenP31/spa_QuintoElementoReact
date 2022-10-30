import { CrearCitaFormulario } from "../components/CrearCitaFormulario"
import { Alert, Card, Col, Container,  Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREAR_CITA_POST } from "../Connections/helpers/endpoint";
import axios from "axios";

const CrearCitas = () =>{

    const [errores, setErrores] = useState({})
    const navegar = useNavigate()
    
    const crearCita = ({numeroDeDocumento,consultorio,fechaDeCita,hora,notas,tipoDeCita}) =>{

        const errores= {}
        setErrores(errores)
        
        axios.post(CREAR_CITA_POST,
            {numeroDeDocumento,consultorio,fechaDeCita,hora,notas,tipoDeCita},
            {headers: {'Accept': 'application/json'  , "Content-Type":"application/json"}})
            .then(respuesta=>{
                console.log(respuesta)
                navegar("/recepcion")
            }).catch(error=>{
                setErrores({new: error.response.data.messageEl });

            })
    } 


    return (

    <Container className="mt-4 mb-4 justify-content-md-center">
    <Row className="row justify-content-md-center">
        <Col sm="12" md="8" lg="6">
            <h3 className="text-center">Asignar cita</h3>
            <a href="/recepcion" className="AtrasIcon">
                    <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
            </a>
            
                <Card.Body>
          
                {errores.new && <Alert variant="danger">{errores.new}</Alert>}

                <CrearCitaFormulario errores={errores} callback={crearCita} />
                
                
                
                </Card.Body>

        </Col>

    </Row>
    </Container>)
        
}

export {CrearCitas}