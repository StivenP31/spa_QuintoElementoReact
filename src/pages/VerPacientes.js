import axios from "axios";

import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VER_PACIENTE_GET } from "../Connections/helpers/endpoint";

import { VerPacientesLista } from "../components/VerPacientesLista";



const VerPacientes =()=>{
    
    const [pacientes, setPacientes] = useState([])
    const [buscando, setBuscando] = useState(true)

    useEffect(()=>{

        axios.get(VER_PACIENTE_GET)
            .then(respuesta=>{

                setPacientes(respuesta.data)
                setBuscando(false)

            }).catch(e=>{
                console.log(e)
                setBuscando(false)
            })

            


    },[])


   return( 
    <Container className="mt-4 mb-4 ">
        <Row className="row justify-content-md-center">
            <Col sm="10" md="10" lg="8">
            <h3 className="text-center">Pacientes</h3>
            <Link to={"/recepcion"} className="AtrasIcon">
                <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
            
            </Link>
                
                <Card.Body>
                    
                    {buscando ? "Cargando...": (pacientes === 0 && "No hay usuarios Registrados")}
                    <Container className="mt-4 justify-content-md-center" >       
                     
                    </Container>
                    {pacientes.map(paciente=> <VerPacientesLista key={paciente.idPaciente} paciente={paciente} editable={false}/>) }
                </Card.Body>
                
            </Col>
        </Row>
    </Container>
   )   
}

export {VerPacientes}