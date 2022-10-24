import axios from "axios";

import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VER_TODOS_LOS_USUARIOS_GET } from "../Connections/helpers/endpoint";

import { VerUsuariosEliminar } from "../components/VerUsuariosEliminar";



const EliminarUsuariosPagina =()=>{
    
    const [usuarios, setUsuarios] = useState([])
    const [buscando, setBuscando] = useState(true)

    useEffect(()=>{

        axios.get(VER_TODOS_LOS_USUARIOS_GET)
            .then(respuesta=>{

                setUsuarios(respuesta.data)
                console.log(respuesta.data)
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
            <h3 className="text-center">Eliminar Usuarios</h3>
            <Link to={"/admin"} className="AtrasIcon">
                <i id="AtrasIcon" className="fa-solid fa-chevron-left">back</i>
            </Link>
                
                <Card.Body>
                    
                    {buscando ? "Cargando...": (usuarios === 0 && "No hay usuarios Registrados")}
                    <Container className="mt-4 justify-content-md-center" >       
                        
                    </Container>
                    {usuarios.map(usuario=> <VerUsuariosEliminar key={usuario.idUsuario} usuario={usuario} editable={true}/>) }
                </Card.Body>
                
            </Col>
        </Row>
    </Container>
   )   
}

export {EliminarUsuariosPagina}