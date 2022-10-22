import { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";


function IniciarSesionFormulario({errores,callback}){

  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");

  const enviarFormulario = (e) => {
      
      e.preventDefault();
      
      callback({username, password});
      console.log("username formulario   "+username+"password "+password)

  }


return (    

    <Form onSubmit={enviarFormulario}>
        <Form.Group className="mb-3">
            <Form.Label >Usuario</Form.Label>
            <Form.Control  
              type="text" 
              placeholder="Ingrese su usuario"  
              autoComplete="username" 
              value={username}
              onChange={e=>setUsername(e.target.value)}
              isInvalid={errores.username}
              required/>
              
        </Form.Group>
         

        <Form.Control.Feedback type="invalid">
          {errores.username}
        </Form.Control.Feedback>

        <Form.Group className="mb-3">
            <FormLabel >Contraseña</FormLabel>
            <Form.Control 
              type="password" 
              placeholder="Ingrese su contraseña"  
              value={password}
              onChange={e=>setPassword(e.target.value)}
              isInvalid={errores.password}
              required/>
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          {errores.password}
        </Form.Control.Feedback>


        <Button type="submit" className="mt-3 " variant="outline-primary">Iniciar sesión</Button>
    </Form>
)
}

export {IniciarSesionFormulario}
 
