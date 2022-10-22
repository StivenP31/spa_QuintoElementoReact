import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const VerUsuariosLista =({usuario})=> {
   const listaUsuarios=
        
    <Container>

        <Link to={`/admin/${usuario.idUsuario}`}>
            <Table className='TablaUsuarios'  bordered hover size="sm" >

                    <thead className='TituloTabla'>
                        <tr>
                        <th >#</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Documento</th>
                        <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody className='DatosTabla'>
                        <tr>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombres}</td>
                        <td>{usuario.apellidos}</td>
                        <td>{usuario.documento}</td>
                        <td>{usuario.rolEntity.nombreRol}</td>
                    </tr>
                </tbody>
            </Table>
        </Link>
    </Container>

    return listaUsuarios;
}

export {VerUsuariosLista}