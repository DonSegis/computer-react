import { NavLink } from "react-router-dom";
import "../diseño/Login.css";

export default function Cambio_Password() {
  return (
    <div className="login-body">
      <section class="from-login">
        <h5>Cambio de contraseña</h5>
        <div class="izqui">
          <p>Introduce tu nueva contraseña</p>
        </div>
        <input
          class="controls"
          type="password"
          name="contrasena"
          value=""
          placeholder="Nueva Contraseña"
        />
        <input
          class="controls"
          type="password"
          name="confi-pass"
          value=""
          placeholder="Confirme su Contraseña"
        />
        <NavLink to="/login">
          <button>Guardar</button>
        </NavLink>
      </section>
    </div>
  );
}
