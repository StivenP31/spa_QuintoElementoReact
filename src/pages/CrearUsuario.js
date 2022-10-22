import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RegistrarseFormulario } from "../components/RegistrarseFormulario"

const CrearUsuario =()=>{
    const VistaRegistrarse=
    
    <Container className="mt-4 mb-4 justify-content-md-center">
    <Row className="row justify-content-md-center">
        <Col sm="12" md="8" lg="6">
            <Card.Body>
                    <h3 className="text-center">Registrar Usuario</h3>

                    <Link to={"/admin"} className="AtrasIcon">
                    <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
                    </Link>
                    

                    <RegistrarseFormulario/>

                    </Card.Body>

    </Col>

    </Row>
    </Container>


    return VistaRegistrarse
}

export {CrearUsuario}