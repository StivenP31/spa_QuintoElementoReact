
import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navegacion} from "../layouts/Navegacion"
 import { IniciarSesion } from '../pages/IniciarSesion';
import  {Footer} from "../layouts/Footer"
import {CrearUsuario} from "../pages/CrearUsuario"
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
            <Route path='/registrarusuario' element={<CrearUsuario/>}/>
            <Route path='/verusuarios' element={<VerUsuarios/>}/>
            <Route path='/admin/:id' element={<UsuarioDetalle/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
