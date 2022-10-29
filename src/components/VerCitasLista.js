import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';




const VerCitaLista =({cita})=> {

    console.log(cita)
    
   const VerCita=
        
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
                       
                        <td>{cita.pacienteEntity.nombre}</td>
                        <td>{cita.pacienteEntity.apellido}</td>
                        <td>{cita.numeroDeDocumento}</td>
                        <td>{cita.consultorio}</td> 
                        <td>{cita.fechaDeCita}</td>
                        <td>{cita.hora}</td> 

                        
                    </tr>
                </tbody>

            </Table>
        
         

    </Container>

    return VerCita;
}

export {VerCitaLista}