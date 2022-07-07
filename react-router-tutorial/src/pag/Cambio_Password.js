import React from "react";
import { NavLink } from "react-router-dom";
import "../diseño/Login.css";

class Cambio_Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cambioClave: "", confirmarClave: "" };
    this.setCambioClave = this.setCambioClave.bind(this);
    this.setConfirmarClave = this.setConfirmarClave.bind(this);
    this.enviarDatos = this.enviarDatos.bind(this);
  }
  setCambioClave(event) {
    this.setState({ cambioClave: event.target.value })
  }
  setConfirmarClave(event) {
    this.setState({ confirmarClave: event.target.value})
  }
  enviarDatos(event) {
    alert("usuario:" + this.state.usuario + " clave:" + this.state.clave);
  }
  render() {
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
            value={this.state.cambioClave}
            onChange={this.setCambioClave}
            placeholder="Nueva Contraseña"
          />
          <input
            class="controls"
            type="password"
            name="confi-pass"
            value={this.state.confirmarClave}
            onChange={this.setConfirmarClave}
            placeholder="Confirme su Contraseña"
          />
          <NavLink to="/login">
            <button>Guardar</button>
          </NavLink>
        </section>
      </div>
    );
  }
}
export default Cambio_Password;