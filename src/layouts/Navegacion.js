// import logo from "../img/android-chrome-512x512.png"
import { Navbar } from "react-bootstrap";
import banner from "../img/banner.jpg"

const Navegacion = () => {
  const vistaNav = 

    
    <Navbar className="col-lg-12">

      <img id="imgNav" src={banner} className="img-fluid" alt="banner"></img>
      
    </Navbar>


    // <nav className="navbar navbar-expand-lg bg-light">
      
    //   <p></p>
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/" >
            
    //             {/* <img id="logo" src="../img/android-chrome-512x512.png" alt="logo">
    //           </img> */}
              
    //             <img id="logo" src={logo} alt="logo" ></img>
              
    //       </a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
          
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">

    //         <ul className="navbar-nav me-auto mb-lg-0">
    //             <li className="nav-item">
    //                 <a className="nav-link" aria-current="page" href="#/crearpartido/">Crear Partido</a>
    //               </li>
    //         </ul>    


    //         <ul className="navbar-nav ms-auto mb-lg-0">    
    //             <li className="nav-item">
    //                 <a className="nav-link" aria-current="page" href="#/registrarse/">Registrarse</a>
    //             </li>

    //             <li className="nav-item">
    //                 <a className="nav-link" aria-current="page" href="#/login/">Iniciar Sesión</a>
    //             </li>

    //             <li className="nav-item dropdown">
    //                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                 Usuario
    //                 </a>
    //                 <ul className="dropdown-menu dropdown-menu-end">
    //                     <li><a className="dropdown-item" href="#/mispartidos/">Mis partidos</a></li>
    //                     <li><hr className="dropdown-divider"></hr></li>
    //                     <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
    //                 </ul>
    //             </li>

    //         </ul>

    //       </div>
    //     </div>
    //   </nav>
  

  return vistaNav;
};

export { Navegacion };
