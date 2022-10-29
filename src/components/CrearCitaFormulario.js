import moment from "moment";
import {  useState } from "react";
import {  Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";



const CrearCitaFormulario = ({errores,callback}) => {
    
    const [numeroDeDocumento, setNumeroDeDocumento] = useState("")
    const [consultorio,setConsultorio]=useState("")
    const [fechaDeCita,setFechaDeCita]=useState("")
    const [hora,setHora]=useState("")
    const [tipoDeCita,setTipoDeCita]=useState("")
    const [notas,setNotas]=useState("")


    const enviarFormulario = (e) => {

        e.preventDefault();

        callback({numeroDeDocumento,consultorio,fechaDeCita,hora,notas,tipoDeCita})
    }
    
    return (

        

        <Form onSubmit={enviarFormulario}>

            <Row>
            <Container className="justify-content-md-center">
                <Col className="col-md-12 col-lg-12 col-xl-12 ">
            
                <FormGroup className="mb-3">
                    <FormLabel>Fecha de cita</FormLabel>
                    <FormControl
                    className="form-control" 
                    type="date"
                    value={moment(fechaDeCita).format('yyyy-MM-DD')}
                    min={moment().format('yyyy-MM-DD')}
                    onChange={e=>setFechaDeCita(e.target.value)}
                    
                    required/>


            </FormGroup>

            <FormGroup className="mb-3 ">
                    <FormLabel>Número de documento</FormLabel>
                    <FormControl 
                    type="Text" 
                    placeholder="Documento" 
                    value={numeroDeDocumento}
                    onChange={e=>setNumeroDeDocumento(e.target.value)}
                   
                    required/>

                </FormGroup>


                <FormGroup>
                    
                    <FormLabel>Tipo de cita</FormLabel>   
                    <Form.Control
                    as="select"
                    type="select"
                    aria-label="cita"                     
                    value={tipoDeCita}
                    onChange={e=>setTipoDeCita(e.target.value)}
                  
                    required>
                        <option value="">seleccione</option>
                        <option value="Prioritaria - Medicina General">Prioritaria - Medicina General</option>
                        <option value="Medicina General">Medicina General</option>
                        <option value="RCV - Medicina General">RCV - Medicina General</option>
                    </Form.Control>

                <p></p>
                </FormGroup>



                    
                
                </Col>
                
                </Container>
                
                    
                    

                        <FormGroup className="mb-3 ">
                            <FormLabel>Hora</FormLabel>
                            <FormControl 
                            type="Time" 
                            placeholder="Hora de la cita" 
                            value={hora}
                            onChange={e=>setHora(e.target.value)}
                        
                            required/>

   
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>numero De Consultorio</FormLabel>   
                            <Form.Control
                            as="select"
                            type="select"
                            aria-label="cita"                     
                            value={consultorio}
                            onChange={e=>setConsultorio(e.target.value)}
                           
                            required>
                                <option value="">Elige</option>
                                <option value="101">Consultorio 101</option>
                                <option value="102">Consultorio 102</option>
                                <option value="103"> Consultorio 103</option>  
                                
                            
                            </Form.Control>

                            <p></p>
                        </FormGroup>
                     {/* Separacion */}
            
                    
                <FormGroup className="mb-3 ">
                            <FormLabel>Notas :</FormLabel>
                            <FormControl
                            as="textarea"
                            rows={3} 
                            type="Text" 
                            placeholder="Notas" 
                            value={notas}
                            onChange={e=>setNotas(e.target.value)}
                            
                            required/>

  
                        </FormGroup>
            </Row>
                <button type="submit" className="btn btn-outline-primary mt-3 " >Registrarse</button>
        </Form>    

        
)
        
      
      
    
  }
  
  export { CrearCitaFormulario };