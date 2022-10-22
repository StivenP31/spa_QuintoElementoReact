
const RegistrarseFormulario = () => {
  const formularioRegistro = 
    
    <div className="container">
   
        <form>

            <div className="mb-3 mb-lg-3 ">
                <label for="nombres" className="form-label" >Nombres</label>
                <input type="text" className="form-control" placeholder="nombres" id="nombres" name="nombres" autocomplete="name" required/>
            </div>

            <div className="mb-3">
                <label for="Apellidos" className="form-label" >Apellidos</label>
                <input type="text" className="form-control" placeholder="primer y segundo apellido" id="Apellidos" name="Apellidos" required/>
            </div>

            <div>
            <label for="correo" className="form-label" >Tipo de documento</label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Elige: </option>
                <option value="1">Cedula (cc)</option>
                <option value="2">Cedula Extranjería (CE)</option>
                
            </select>
            <p></p>
            </div>
          
            <div className="mb-3">
                <label for="documento" className="form-label" >Numero de identificación</label>
                <input type="number" className="form-control" placeholder="numero de identificación" id="tel" name="document" autocomplete="document" required/>
            </div>

            

            <div className="mb-3">
                <label for="nacimiento">Fecha de nacimiento</label>
                <input type="date" id="nacimiento"  name="nacimiento"  className="form-control"/>
            </div>

            <div className="mb-3">
                <label for="email">Correo</label>
                <input type="email" id="email" placeholder="correo" name="email"  className="form-control"/>
            </div>

            <div className="mb-3 ">
                <label for="tel" className="form-label" >Celular</label>
                <input type="number" className="form-control" placeholder="celular" id="tel" name="tel" autocomplete="tel" required/>
            </div>

            <div className="mb-3 ">
                <label for="Direccion" className="form-label" >Direccion</label>
                <input type="text" className="form-control" placeholder="direccion"  id="Direccion" name="Direccion" required/>
            </div>


            
            <p><h4>Asignación usuario y contraseña:</h4></p>

            <div>
            <label for="correo" className="form-label" >Rol</label>
            <select className="form-select" aria-label="Default select example">
                <option selected>seleccione</option>
                <option value="1">Administrador</option>
                <option value="2">Doctor</option>
                <option value="3">Recepcion</option>   
            </select>
            <p></p>
            </div>

            <div className="mb-3">
                <label for="correo" className="form-label" >Usuario</label>
                <input type="email" className="form-control" id="correo" name="correo" autocomplete="email" required/>
                
            </div>

            <div className="mb-3">
                <label for="password" className="form-label" >Contraseña</label>
                <input type="password" className="form-control" id="password" name="password"  required/>
            </div>

            <button type="submit" className="btn btn-outline-primary mt-3 " >Registrarse</button>
        
        </form>
    </div>
    
  return formularioRegistro;
};

export { RegistrarseFormulario };
