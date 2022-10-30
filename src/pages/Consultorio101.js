import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CONSULTORIO_GET} from "../Connections/helpers/endpoint";
import { VerCitaConsultorio } from "../components/VerCitasConsultorio";


function Consultorio101 (){

   const [citas,setCitas]=useState([]);

    useEffect (() =>{
     
        axios.get(`${CONSULTORIO_GET}/${101}`)
        .then(respuesta=>{

                setCitas(respuesta.data)
                console.log(respuesta.data)
        }).catch(e=>{
                console.log(e)

        })
        
    },[])

    return(

        <Container className="mt-4 mb-4 ">
        <Row className="row justify-content-md-center">
            <Col sm="10" md="10" lg="8">
            <h3 className="text-center">Citas consultorio 101</h3>
            <Link to={"/doctor"} className="AtrasIcon">
                <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
            </Link>
                
                <Card.Body>
                    
                    
                    <Container className="mt-4 justify-content-md-center" >       
                        
                    </Container>
                    {citas.map(cita=> <VerCitaConsultorio key={cita.idCita} cita={cita} />) } 
                        </Card.Body>
                        
                    </Col>
                </Row>
            </Container>
        

    )


}
export {Consultorio101}