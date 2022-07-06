import { NavLink } from "react-router-dom";
import "../diseño/Login.css";

export default function Recuperar_Password() {
  return (
    <div className="login-body">
      <section className="from-login">
        <h5>Busca tu dirección de correo electrónico</h5>
        <p>
          Introduce tu número de teléfono o tu dirección de correo electrónico
          de recuperación
        </p>
        <input
          class="controls"
          type="text"
          name="e-mail"
          value=""
          placeholder="Introduce tu correo electronico o Telefono "
        />
        <NavLink to="/login">
          <button>Siguiente</button>
        </NavLink>
      </section>
    </div>
  );
}
