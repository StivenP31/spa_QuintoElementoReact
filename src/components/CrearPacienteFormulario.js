import moment from "moment";
import { useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";


const CrearPacientesFormulario = ({errores, callback}) =>{

    const [nombre, setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [tipoDeDocumento,setTipoDeDocumento]=useState("")
    const [numeroDeDocumento,setNumeroDeDocumento]=useState("")
    const [fechaDeNacimiento,setFechaDeNacimiento]=useState("")
    const [edad,setEdad]=useState("")
    const [sexo,setSexo]=useState("")
    const [correo,setCorreo]=useState("")
    const [telefonoDeContacto,setTelefonoDeContacto]=useState("")
    const [direccion,setDireccion]=useState("")
    

    const enviarFormulario = (e)=>{

        e.preventDefault();

        callback({nombre,apellido,sexo,fechaDeNacimiento,edad,numeroDeDocumento,tipoDeDocumento,telefonoDeContacto,correo,direccion})
        console.log("ver datos enviados"+nombre)
        console.log("ver datos enviados"+apellido)
        console.log("ver datos enviados"+sexo)
       
    }


    return (

    <Container className="mb-3 mt-3" sm="12" md="8" lg="6">
       <Form onSubmit={enviarFormulario}>
            

                <FormGroup className="mb-3 ">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                    type="text" 
                    placeholder="Ingrese los nombres del paciente"
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
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
                    placeholder="Primer y segundo apellido del paciente" 
                    value={apellido}
                    onChange={e=>setApellido(e.target.value)}
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
                    aria-label="Tipo De Documento del paciente" 
                    value={tipoDeDocumento}
                    onChange={e=>setTipoDeDocumento(e.target.value)}
                    isInvalid={errores.tipoDocumento}
                    required>
                        <option value="">seleccione</option>
                        <option value="CC">CC - (Cedula de ciudadania)</option>
                        <option value="CE">CE - (Cedula de extranjeria)</option>
                        <option value="TI">TI - (Tarjeta de identidad)</option>
                        <option value="RC">RC - (Registro civil)</option>
                        <option value="pp">PP - (Pasaporte)</option>
                    </Form.Control>

                    <Form.Control.Feedback type="invalid">
                        {errores.tipoDocumento}
                    </Form.Control.Feedback>
                <p></p>
                </FormGroup>
            
                <FormGroup className="mb-3 ">
                    <FormLabel>Número de documento</FormLabel>
                    <FormControl 
                    type="Text" 
                    placeholder="Documento del paciente" 
                    value={numeroDeDocumento}
                    onChange={e=>setNumeroDeDocumento(e.target.value)}
                    isInvalid={errores.numeroDeDocumento}
                    required/>
                    <Form.Control.Feedback type="invalid">
                        {errores.numeroDeDocumento}
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
                    <FormLabel>Edad</FormLabel>
                    <FormControl 
                    type="Text" 
                    placeholder="Edad"
                    value={edad}
                    onChange={e=>setEdad(e.target.value)}
                    isInvalid={errores.edad}
                    required/>

                    <Form.Control.Feedback type="invalid">
                        {errores.edad}
                    </Form.Control.Feedback>  

                </FormGroup>

                <FormGroup>
                    <FormLabel>Sexo</FormLabel>   
                    <Form.Control
                    as="select"
                    type="select"
                    aria-label="Rol"                     
                    value={sexo}
                    onChange={e=>setSexo(e.target.value)}
                    isInvalid={errores.sexo}
                    required>
                        <option value="">seleccione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="No Binario">No binario</option>  
                        
                    
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {errores.sexo}
                    </Form.Control.Feedback> 
                <p></p>
                </FormGroup>

                <FormGroup className="mb-3 ">
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl 
                    type="Email" 
                    placeholder="Correo electrónico" 
                    value={correo}
                    onChange={e=>setCorreo(e.target.value)}
                    isInvalid={errores.correo}
                    required/>
                    <Form.Control.Feedback type="invalid">
                        {errores.correo}
                    </Form.Control.Feedback>  

                </FormGroup>

                <FormGroup className="mb-3 ">
                    <FormLabel>Celular</FormLabel>
                    <FormControl 
                    type="Text" 
                    placeholder="Número de celular" 
                    value={telefonoDeContacto}
                    onChange={e=>setTelefonoDeContacto(e.target.value)}
                    isInvalid={errores.telefonoDeContacto}
                    required/>

                    <Form.Control.Feedback type="invalid">
                        {errores.telefonoDeContacto}
                    </Form.Control.Feedback>  
                </FormGroup>


               

                <FormGroup className="mb-3 ">
                    <FormLabel>Dirección</FormLabel>
                    <FormControl 
                    type="Text" 
                    placeholder="Dirección" 
                    value={direccion}
                    onChange={e=>setDireccion(e.target.value)}
                    isInvalid={errores.direccion}
                    required/>

                    <Form.Control.Feedback type="invalid">
                        {errores.direccion}
                    </Form.Control.Feedback> 
                </FormGroup>

                


                <Button  type="submit" variant="outline-primary mt-3" >Registrarse</Button>
            
            

        </Form>   
    </Container>              


    )

}

export {CrearPacientesFormulario}