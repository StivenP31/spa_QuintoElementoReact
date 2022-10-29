import axios from "axios";

import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VER_CITAS_GET } from "../Connections/helpers/endpoint";


import { VerCitaLista } from "../components/VerCitasLista";



const VerCitas =()=>{
    
    const [citas, setCitas] = useState([])
    const [buscando, setBuscando] = useState(true)

    useEffect(()=>{

        axios.get(VER_CITAS_GET)
            .then(respuesta=>{

                setCitas(respuesta.data)
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
            <h3 className="text-center">Citas</h3>
            <Link to={"/recepcion"} className="AtrasIcon">
                <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
            
            </Link>
                
                <Card.Body>
                    
                    {buscando ? "Cargando...": (citas === 0 && "No hay usuarios Registrados")}
                    <Container className="mt-4 justify-content-md-center" >       
                    
                    </Container>
                    {citas.map(cita=> <VerCitaLista key={cita.idCita} cita={cita}/>)}
                    
                </Card.Body>
                
            </Col>
        </Row>
    </Container>
   )   
}

export {VerCitas}