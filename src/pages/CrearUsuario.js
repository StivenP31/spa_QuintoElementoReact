import { RegistrarseFormulario } from "../components/RegistrarseFormulario"

const CrearUsuario =()=>{
    const VistaRegistrarse=
    
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div class="col col-sm-12 col-md-8 col-lg-6">
                <div class="card-body">
                    <h3 class="text-center">Registrar Usuario</h3>
                    <RegistrarseFormulario/>

                </div>       
            </div>

        </div>
    </div>


    return VistaRegistrarse
}

export {CrearUsuario}