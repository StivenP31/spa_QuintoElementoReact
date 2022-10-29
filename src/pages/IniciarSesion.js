import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { autenticacion } from "../Connections/usuarioAcciones"
import { IniciarSesionFormulario } from "../components/IniciarSesionFormulario";

function IniciarSesion() {
    
    const [errores, setErrores]= useState({});
    const conectado=useSelector(estado=>estado.conectado);
    const navegar=useNavigate();
    const iniciarSesionAccion=useDispatch();


    useEffect(() => {
        if(conectado) {
            navegar("/admin");
        }
    });

    
    const login=({username, password}) => {
        
        const error={};
        setErrores(error);
        
        iniciarSesionAccion(autenticacion({username, password})).then(respuesta=>{
            const {rolusuario} = respuesta.headers
            

            switch (rolusuario) {
                case "Administrador":
                    navegar("/admin")
                    break
                case "Recepcion":
                    navegar("/recepcion")
                    break
                case "Doctor":
                    navegar("/doctor")
                     break    
                default:
                    break;
}
            
        })
        .catch(err=>{
            setErrores({ ingresar: "Usuario o Contraseña incorrecta" });
        });

    }


    return (
  
    
    <Container className="mt-4 mb-4 justify-content-md-center">
            <Row className="row justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    
                    <h3 className="text-center">iniciar sesion</h3>
                    <Card.Body>

                        
                        {errores.ingresar && <Alert variant="danger">{errores.ingresar}</Alert>}
                        <IniciarSesionFormulario errores={errores} callback={login}></IniciarSesionFormulario>

                    </Card.Body>

                </Col>

            </Row>
        </Container>
)
    
    }
export { IniciarSesion }
