import { NavLink } from "react-router-dom";
import "../diseño/Login.css";

export default function Registro() {
  return (
    <div className="login-body">
      <section class="from-login">
        <h5>Crea tu cuenta</h5>
        <input
          class="controls"
          type="text"
          name="nombre_comp"
          value=""
          placeholder="Nombre Completo"
        />
        <input
          class="controls"
          type="e-mail"
          name="correo"
          value=""
          placeholder="Correo electronico"
        />
        <input
          class="controls"
          type="num_telefono"
          name="telefono"
          value=""
          placeholder="Numero Telefono"
        />
        <input
          class="controls"
          type="password"
          name="contrasena"
          value=""
          placeholder="Contraseña"
        />
        <input
          class="controls"
          type="revicion"
          name="Confirmar Contrasena"
          value=""
          placeholder="Confirmar contraseña"
        />
        <NavLink to="/">
          <button>Ingresar</button>
        </NavLink>
        <h4>
          <NavLink to="/login">¿Ya tienes una cuenta?</NavLink>
        </h4>
      </section>
    </div>
  );
}
