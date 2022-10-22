import { CrearCitaFormulario } from "../components/CrearCitaFormulario"
import { Card, Col, Container,  Row } from "react-bootstrap";

const CrearCitas = () =>{
    const vistaCrearCitas =

    <Container className="mt-4 mb-4 justify-content-md-center">
    <Row className="row justify-content-md-center">
        <Col sm="12" md="8" lg="6">
            <Card.Body>
          
            <h3 className="text-center">Asignar cita</h3>
            <a href="#/" classNameName="AtrasIcon">
                    <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
                    </a>
                <CrearCitaFormulario/>
                
                </Card.Body>

        </Col>

    </Row>
</Container>
        
    

   


    return vistaCrearCitas
}

export {CrearCitas}