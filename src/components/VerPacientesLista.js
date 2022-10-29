import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';



const VerPacientesLista =({idPaciente,paciente})=> {
   const listaPacientes=
        
    <Container>

        <Link to={`/recepcion/${paciente.idPaciente}`}> 
            <Table className='TablaUsuarios'  bordered hover size="sm" >

                    <thead className='TituloTabla'>
                        <tr>
                        
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Género</th>
                        <th>Documento</th>
                        </tr>
                    </thead>
                    <tbody className='DatosTabla'>
                        <tr>
                        <td>{paciente.nombre}</td>
                        <td>{paciente.apellido}</td>
                        <td>{paciente.sexo}</td>
                        <td>{paciente.numeroDeDocumento}</td>
                        
                    </tr>
                </tbody>

            </Table>
        
         </Link> 

    </Container>

    return listaPacientes;
}

export {VerPacientesLista}