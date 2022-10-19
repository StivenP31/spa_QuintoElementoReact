
import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navegacion} from "./layouts/Navegacion"
// import {PartidosCreados} from "./pages/partidosCreados"
// import { IniciarSesion } from './pages/IniciarSesion';
// import { Footer} from "./layouts/Footer"
import {CrearUsuario} from "./pages/CrearUsuario"
function App() {
  return (
    <div>
      <Navegacion />
      <CrearUsuario />
      

    </div>
  );
}

export default App;
