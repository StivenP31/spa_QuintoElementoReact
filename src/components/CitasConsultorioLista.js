import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';




const CitasConsultorioLista =({cita})=> {

    console.log(cita)
    
   const VerCitaConsultorio=
        
    <Container>

          
            <Table className='TablaUsuarios'  bordered hover size="sm" >
                    
                    <thead className='TituloTabla'>
                        <tr>
                        
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Documento</th>
                        <th>consultorio</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody className='DatosTabla'>
                        <tr>
                       
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td> 
                        <td>{}</td>
                        <td>{}</td> 

                        
                    </tr>
                </tbody>

            </Table>
        
         

    </Container>

    return VerCitaConsultorio;
}

export {CitasConsultorioLista}