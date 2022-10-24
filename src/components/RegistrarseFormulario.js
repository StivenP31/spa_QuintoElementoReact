import moment from "moment";
import { useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";

const RegistrarseFormulario = ({errores,callback}) => {

    const [nombres,setNombres]=useState("")
    const [apellidos,setApellidos]=useState("")
    const [tipoDocumento,setTipoDocumento]=useState("")
    const [documento,setDocumento]=useState("")
    const [fechaDeNacimiento,setFechaDeNacimiento]=useState("")
    const [email,setEmail]=useState("")
    const [direccion,setDireccion]=useState("")
    const [celular,setCelular]=useState("")
    const [nombreRol,setNombreRol]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const enviarFormulario = (e)=>{

        e.preventDefault();

        callback({nombres,apellidos,tipoDocumento,documento,fechaDeNacimiento,email,direccion,celular,nombreRol,username,password})
        console.log("ver datos enviados"+nombres)
        console.log("ver datos enviados"+documento)
        console.log("ver datos enviados"+nombreRol)
        console.log("ver datos enviados"+password)
    }


    return (
    
    <Container className="mb-3 mt-3" sm="12" md="8" lg="6">
       <Form onSubmit={enviarFormulario}>
            

                <FormGroup className="mb-3 ">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                    type="text" 
                    placeholder="ingrese sus nombres"
                    value={nombres}
                    onChange={e=>setNombres(e.target.value)}
                    isInvalid={errores.nombres}
                    required/>
                    <Form.Control.Feedback type="invalid">
                        {errores.nombres}
                    </Form.Control.Feedback>
                </FormGroup>

                <FormGroup className="mb-3 ">
                    <FormLabel>Apellidos</FormLabel>
                    <FormControl 
                    type="text" 
                    placeholder="Primer y segundo apellido" 
                    value={apellidos}
                    onChange={e=>setApellidos(e.target.value)}
                    isInvalid={errores.apellidos}
                    required/>
                    <Form.Control.Feedback type="invalid">
                        {errores.apellidos}
                    </Form.Control.Feedback>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Tipo de documento</FormLabel>   
                    <Form.Control
                    as="select"  
                    type="select"
                    aria-label="Tipo De Documento" 
                    value={tipoDocumento}
                    onChange={e=>setTipoDocumento(e.target.value)}
                    isInvalid={errores.tipoDocumento}
                    required>
                        <option value="">seleccione</option>
                        <option value="CC">CC - (Cedula de ciudadania)</option>
                        <option value="CE">CE - (Cedula de extranjeria)</option>
                        
                    </Form.Control>

                    <Form.Control.Feedback type="invalid">
                        {errores.tipoDocumento}
                    </Form.Control.Feedback>
                <p></p>
                </FormGroup>
            
                <FormGroup className="mb-3 ">
                    <FormLabel>Numero de documento</FormLabel>
                    <FormControl 
                    type="Text" 
                    placeholder="Documento" 
                    value={documento}
                    onChange={e=>setDocumento(e.target.value)}
                    isInvalid={errores.documento}
                    required/>
                    <Form.Control.Feedback type="invalid">
                        {errores.documento}
                    </Form.Control.Feedback>  
                </FormGroup>
                
                <FormGroup className="mb-3">
                    <FormLabel>Fecha de nacimiento</FormLabel>
                    <FormControl  
                    className="form-control" 
                    type="date"
                    value={moment(fechaDeNacimiento).format('yyyy-MM-DD')}
                    max={moment().format('yyyy-MM-DD')}
                    onChange={e=>setFechaDeNacimiento(e.target.value)}
                    isInvalid={errores.fechaDeNacimiento}
                    required/>
                    <Form.Control.Feedback type="invalid">
                        {errores.fechaDeNacimiento}
                    </Form.Control.Feedback>  

                </FormGroup>

                <FormGroup className="mb-3 ">
                    <FormLabel>Correo</FormLabel>
                    <FormControl 
                    type="Email" 
                    placeholder="Correo"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    isInvalid={errores.email}
                    required/>

                    <Form.Control.Feedback type="invalid">
                        {errores.email}
                    </Form.Control.Feedback>  

                </FormGroup>

                <FormGroup className="mb-3 ">
                    <FormLabel>Direccion</FormLabel>
                    <FormControl 
                    type="Text" 
                    placeholder="Numero de celular" 
                    value={direccion}
                    onChange={e=>setDireccion(e.target.value)}
                    isInvalid={errores.direccion}
                    required/>
                    <Form.Control.Feedback type="invalid">
                        {errores.direccion}
                    </Form.Control.Feedback>  

                </FormGroup>

                <FormGroup className="mb-3 ">
                    <FormLabel>Celular</FormLabel>
                    <FormControl 
                    type="Text" 
                    placeholder="Numero de celular" 
                    value={celular}
                    onChange={e=>setCelular(e.target.value)}
                    isInvalid={errores.celular}
                    required/>

                    <Form.Control.Feedback type="invalid">
                        {errores.celular}
                    </Form.Control.Feedback>  
                </FormGroup>


                <FormGroup>
                    <h5>Asignación usuario y contraseña:</h5>
                    <FormLabel>Rol</FormLabel>   
                    <Form.Control
                    as="select"
                    type="select"
                    aria-label="Rol"                     
                    value={nombreRol}
                    onChange={e=>setNombreRol(e.target.value)}
                    isInvalid={errores.nombreRol}
                    required>
                        <option value="">seleccione</option>
                        <option value="1">Administrador</option>
                        <option value="2">Doctor</option>
                        <option value="3">Recepcion</option>  
                        
                    
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {errores.nombreRol}
                    </Form.Control.Feedback> 
                <p></p>
                </FormGroup>

                <FormGroup className="mb-3 ">
                    <FormLabel>Usuario</FormLabel>
                    <FormControl 
                    type="Text" 
                    placeholder="Usuario" 
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                    isInvalid={errores.username}
                    required/>

                    <Form.Control.Feedback type="invalid">
                        {errores.username}
                    </Form.Control.Feedback> 
                </FormGroup>

                <FormGroup className="mb-3 ">
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    isInvalid={errores.password}
                    required/>

                    <Form.Control.Feedback type="invalid">
                        {errores.password}
                    </Form.Control.Feedback> 
                </FormGroup>


                <Button  type="submit" variant="outline-primary mt-3" >Registrarse</Button>
            
            

        </Form>   
    </Container>
    )
};

export { RegistrarseFormulario };
