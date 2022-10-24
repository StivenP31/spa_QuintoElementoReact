import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ELIMINAR_USUARIO_DELETE } from "../Connections/helpers/endpoint";


function EliminarPartidoBoton ({id, nombres}){

    const navegar = useNavigate()

    const eliminar = async () =>{

        axios.delete(`${ELIMINAR_USUARIO_DELETE}/${id}`)
            .then(respuesta=>{

                navegar("/admin/verusuarios")


            }).catch(err=>{
                console.error(err)
            })      

    }    

    const crearAlerta =()=>{

        const titulo = `Eliminar Usuario \n ¿Desea eliminar el Usuario ?`
        return (window.confirm(titulo) === true) ? eliminar(): ()=>{}
    }

    return(

        <Button
            variant="danger" size="sm" onClick={crearAlerta}>
                Eliminar
            </Button>

    )


}
export {EliminarPartidoBoton}