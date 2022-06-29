import { NavLink } from "react-router-dom";
import '../diseño/Login.css'

export default function Login(){
    return(
        <div className="login-body">
            <div className="from-login">
                <h5>Iniciar sesión</h5>
                <img src={require('../img/login/icono.jpg')} alt=""/>
                <input classNameName="controls" type="text" name="Usuario" value="" placeholder="Usuario"/>
                <input className="controls" type="password" name="contrasena" value="" placeholder="Contraseña"/>
                <NavLink to='/'><button>Ingresar</button></NavLink>
                <p><NavLink to=''>¿Olvidaste tu contraseña?</NavLink></p>
                <h4>¿No tienes una cuenta?<NavLink to=''>Registrate</NavLink></h4>
            </div>
        </div>
        )
    }