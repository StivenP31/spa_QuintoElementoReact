
const RegistrarseFormulario = () => {
  const formularioRegistro = 
    

 
    
    <form>

        <div className="mb-3 mb-lg-3 ">
            <label for="nombres" class="form-label" >Nombres</label>
            <input type="text" class="form-control" placeholder="nombres" id="nombres" name="nombres" autocomplete="name" required/>
        </div>

        <div className="mb-3">
            <label for="Apellidos" class="form-label" >Apellidos</label>
            <input type="text" class="form-control" placeholder="primer y segundo apellido" id="Apellidos" name="Apellidos" required/>
        </div>

        <div>
        <label for="correo" class="form-label" >Tipo de documento</label>
        <select className="form-select" aria-label="Default select example">
            <option selected>Elige: </option>
            <option value="1">Cedula (cc)</option>
            <option value="2">Cedula Extranjería (CE)</option>
            
        </select>
        <p></p>
        </div>

        <div className="mb-3">
            <label for="documento" class="form-label" >Numero de identificación</label>
            <input type="number" class="form-control" placeholder="numero de identificación" id="tel" name="document" autocomplete="document" required/>
        </div>

        

        <div className="mb-3">
            <label for="nacimiento">Fecha de nacimiento</label>
            <input type="date" id="nacimiento"  name="nacimiento"  class="form-control"/>
        </div>

        <div className="mb-3">
            <label for="email">Correo</label>
            <input type="email" id="email" placeholder="correo" name="email"  class="form-control"/>
        </div>

        <div className="mb-3 ">
            <label for="tel" class="form-label" >Celular</label>
            <input type="number" class="form-control" placeholder="celular" id="tel" name="tel" autocomplete="tel" required/>
        </div>

        <div className="mb-3 ">
            <label for="Direccion" class="form-label" >Direccion</label>
            <input type="text" class="form-control" placeholder="direccion"  id="Direccion" name="Direccion" required/>
        </div>


        
        <p><h4>Asignación usuario y contraseña:</h4></p>

        <div>
        <label for="correo" class="form-label" >Rol</label>
        <select className="form-select" aria-label="Default select example">
            <option selected>seleccione</option>
            <option value="1">Administrador</option>
            <option value="2">Doctor</option>
            <option value="3">Recepcion</option>   
        </select>
        <p></p>
        </div>

        <div className="mb-3">
            <label for="correo" class="form-label" >Usuario</label>
            <input type="email" class="form-control" id="correo" name="correo" autocomplete="email" required/>
            
        </div>

        <div className="mb-3">
            <label for="password" class="form-label" >Contraseña</label>
            <input type="password" class="form-control" id="password" name="password"  required/>
        </div>

        <button type="submit" class="btn btn-primary mt-3 " >Registrarse</button>
    
    </form>
    
    
  return formularioRegistro;
};

export { RegistrarseFormulario };
