import { CrearHistorialFormulario } from "../components/CrearHistorialFormulario"
import { Card, Col, Container,  Row } from "react-bootstrap";


const CrearHistorial = () =>{
    const vistaCrearHistorial =

    <Container className="mt-4 mb-4 justify-content-md-center">
    <Row className="row justify-content-md-center">
        <Col sm="12" md="8" lg="6">
            <Card.Body>
          
                <h3 className="text-center">HISTORIA CLÍNICA</h3>
                    <a href="#/" className="AtrasIcon">
                    <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
                    </a>
                <CrearHistorialFormulario/>
                </Card.Body>

      </Col>

    </Row>
</Container>
    

   


    return vistaCrearHistorial
}

export {CrearHistorial}