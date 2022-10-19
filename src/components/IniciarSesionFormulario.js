const IniciarSesionFormulario = () => {
  const formularioIniciarSesion = 
    
    <form>

        <div className="mb-3">
            <label for="usuario" class="form-label" >Usuario</label>
            <input type="text" class="form-control" id="usuario" name="usuario" autocomplete="username" required/>
        </div>

        <div className="mb-3">
            <label for="password" class="form-label" >Contraseña</label>
            <input type="password" class="form-control" id="password" name="password"  required/>
        </div>

        <button type="submit" class="btn btn-primary mt-3 " >Iniciar sesión</button>
    </form>
    
    
  return formularioIniciarSesion;
}

export { IniciarSesionFormulario };
