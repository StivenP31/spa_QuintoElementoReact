import {  Col, Container, Form, Row } from "react-bootstrap";



const CrearCitaFormulario = () => {
    const formularioCrearCita = 

<Container className="justify-content-md-center">

<Form>

    <Row>
    
    <Col className="col-md-6 col-lg-6 col-xl-6 ">
    
                <Form.Group className="mb-3">
                    <label for="cita">Fecha de la cita</label>
                    <input type="date" id="cita"  name="cita"  className="form-control" required/>
                </Form.Group>

                <div className="mb-3">
                    <label for="documento" className="form-label" >Numero de identificación</label>
                    <input type="number" className="form-control" placeholder="numero de identificación" id="tel" name="document" autocomplete="document" required/>
                </div>

                <div>
                    <label for="correo" className="form-label" >Estado de la cita</label>
                        <select className="form-select" aria-label="Default select example" required>
                            <option selected>seleccione</option>
                            <option value="Confirmada">Confirmada</option>
                            <option value="Cancelada">Cancelada</option>
                             
                        </select>
                <p></p>
                </div>


            
          
            </Col>

        
        <div className="col-md-6 col-lg-6 col-xl-6 ">
            <div className="col"> 
                
                <div className="mb-3">
                        <label for="nacimiento">Hora de la consulta</label>
                        <input type="time" id="nacimiento"  name="nacimiento"  className="form-control" required/>
                </div>

                <div>
                    <label for="correo" className="form-label" >Tipo de cita</label>
                        <select className="form-select" aria-label="Default select example" required>
                            <option selected>seleccione</option>
                            <option value="1">Administrador</option>
                            <option value="2">Doctor</option>
                            <option value="3">Recepcion</option>   
                        </select>
                <p></p>
                </div>

                <div>
                    <label for="correo" className="form-label" >Tipo de cita</label>
                        <select className="form-select" aria-label="Default select example" required>
                            <option selected>seleccione</option>
                            <option value="Prioritaria - Medicina General">Prioritaria - Medicina General</option>
                            <option value="Medicina Genera">Medicina General</option>
                            <option value="RCV">RCV - Medicina General</option>
                             
                        </select>
                <p></p>
                </div>
                

        
        
        </div>
        
        </div>
        
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Notas:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        
            </Row>
        <button type="submit" className="btn btn-outline-primary mt-3 " >Registrarse</button>
    </Form>    

</Container>

        
      
      
    return formularioCrearCita;
  }
  
  export { CrearCitaFormulario };