import { IniciarSesionFormulario } from "../components/IniciarSesionFormulario";

const IniciarSesion = () => {
  const vistainiciarSesion = 

        <div class="container mt-3 mb-3">
            <div class="row justify-content-md-center">
                <div class="col col-sm-12 col-md-8 col-lg-6">
                    <div class="card-body">
                        <h3 class="text-center">iniciar sesion</h3>
                        <IniciarSesionFormulario />
                    </div>
                    {/* <div class="mt-3 ">
                        <a href="#/registrarse">¿No tienes una cuenta? Regístrate.</a>
                    </div>        */}
                </div>

            </div>
        </div>

    
  return vistainiciarSesion;
};

export { IniciarSesion };
