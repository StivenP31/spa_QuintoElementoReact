import { Col, Container, FormGroup, Row } from "react-bootstrap";

const CrearHistorialFormulario = () => {
    const formularioCrearHistorial = 
      
    <Container justify-content-md-center>

    <FormGroup>
    
        <Row className="row ">
        
        <Col md="6" lg="6" xl="6">
        
            <div className="col">    
                
                    <div className="mb-3">
                        <label for="documento" className="form-label" >Número de identificación</label>
                        <input type="number" className="form-control" placeholder="numero de identificación" id="tel" name="document" autocomplete="document" required/>
                    </div>

                    <div className="mb-3">
                        <label for="documento" className="form-label" >Nombres</label>
                        <input type="number" className="form-control" placeholder="Nombres" id="tel" name="document" autocomplete="document" required/>
                    </div>
    
    
                
                </div>
                </Col>
    
            
            <div className="col-md-6 col-lg-6 col-xl-6 ">
                <div className="col"> 
                    
                        <div className="mb-3 mt-2">
                            <label for="nacimiento">Fecha de la consulta</label>
                            <input type="date" id="nacimiento"  name="nacimiento"  className="form-control" required/>
                        </div>
    
 
                        <div className="mb-3">
                            <label for="documento" className="form-label" >Apellidos</label>
                            <input type="number" className="form-control" placeholder="Apellidos" id="tel" name="document" autocomplete="document" required/>
                        </div>
    
            
            
            </div>
            
            </div>
            
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Antecedentes Personales:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Antecedentes Patológicos:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Motivo de Consulta:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Enfermedad Actual:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Revisión por Sistema:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Examen Físico:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Diagnóstico:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Formula:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>


            
                </Row>
            <button type="submit" className="btn btn-outline-primary mt-3 " >Guardar Historial</button>
        </FormGroup>    
    
    </Container>
    
      
    return formularioCrearHistorial;
  }
  
  export { CrearHistorialFormulario };
  