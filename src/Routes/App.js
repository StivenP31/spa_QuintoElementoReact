
import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navegacion} from "../layouts/Navegacion"
 import { IniciarSesion } from '../pages/IniciarSesion';
import  {Footer} from "../layouts/Footer"
import {Registrarusuario} from "../pages/RegistrarUsuario"
import { CrearCitas } from "../pages/CrearCitas"
import { CrearHistorial } from '../pages/CrearHistorial';
import { PrincipalAdmin } from '../pages/PrincipalAdmin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "../states/store"
import { getAuthentucacionToken } from '../Connections/helpers/token';
import { RutaPrivada } from './RutaPrivada';
import { VerUsuarios } from '../pages/VerUsuarios';
import { UsuarioDetalle } from '../pages/UsuarioDetalle';
import { EliminarUsuariosPagina } from '../pages/EliminarUsuariosPagina';
import { PrincipalRecepcion } from '../pages/PrincipalRecepcion';
import { CrearPaciente } from '../pages/CrearPacientes';
import { VerPacientes } from '../pages/VerPacientes';
import { VerCitas } from '../pages/VerCitas';
import { PacienteDetalle } from '../pages/DetallePaciente.';
import { PrincipalDoctor } from '../pages/PrincipalDoctor';

import { Consultorio101 } from '../pages/Consultorio101';


getAuthentucacionToken()

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path='/' element={<IniciarSesion/>}/>

          <Route element={<RutaPrivada/>}>
            {/* Administrador */}
          <Route path='/admin' element={<PrincipalAdmin/>}/>
            <Route path='/admin/registrarusuario' element={<Registrarusuario/>}/>
            <Route path='/admin/verusuarios' element={<VerUsuarios/>}/>
            <Route path='/admin/:id' element={<UsuarioDetalle/>}/>
            <Route path='/admin/eliminarusuariopagina' element={<EliminarUsuariosPagina/>}/>
            {/* Recepcion */}
          <Route path='/recepcion' element={<PrincipalRecepcion/>}/>  
          <Route path='/recepcion/crearcita' element={<CrearCitas/>}/>
          <Route path='/recepcion/crearpaciente' element={<CrearPaciente/>}/>
          <Route path='/recepcion/verpacientes' element={<VerPacientes/>}/>
          <Route path='/recepcion/crearcita' element={<CrearCitas/>}/>
          <Route path='/recepcion/vercita' element={<VerCitas/>}/>
          <Route path='/recepcion/:id' element={<PacienteDetalle/>}/>

          {/* {medico} */}
          <Route path='/doctor' element={<PrincipalDoctor/>}/>  
          <Route path='/recepcion/crearhistorial' element={<CrearHistorial/>}/>
          <Route path='/citas/consultorio/101' element={<Consultorio101/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
