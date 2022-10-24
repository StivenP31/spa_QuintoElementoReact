import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import { EliminarPartidoBoton } from './BotonEliminar';

const VerUsuariosEliminar =({usuario, editable})=> {
   const listaUsuarios=
        
    <Container>

        
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
            { editable && usuario.id ===1 ? 
            ""
            : <EliminarPartidoBoton  id={usuario.idUsuario} nombre={usuario.nombres} />}
            </Table>
        
   

    </Container>

    return listaUsuarios;
}

export {VerUsuariosEliminar}