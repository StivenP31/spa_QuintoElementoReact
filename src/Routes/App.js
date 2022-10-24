
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


getAuthentucacionToken()

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path='/' element={<IniciarSesion/>}/>

          <Route element={<RutaPrivada/>}>
          <Route path='/admin' element={<PrincipalAdmin/>}/>
            <Route path='/admin/registrarusuario' element={<Registrarusuario/>}/>
            <Route path='/admin/verusuarios' element={<VerUsuarios/>}/>
            <Route path='/admin/:id' element={<UsuarioDetalle/>}/>
            <Route path='/admin/eliminarusuariopagina' element={<EliminarUsuariosPagina/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
