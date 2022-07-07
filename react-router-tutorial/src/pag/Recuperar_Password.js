import React from "react";
import { NavLink } from "react-router-dom";
import "../diseño/Login.css";

class Recuperar_Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = { correo: "" };
    this.setCorreo = this.setCorreo.bind(this);
    this.enviarDatos = this.enviarDatos.bind(this);
  }
  setCorreo(event) {
    this.setState({ correo: event.target.value });
  }
  enviarDatos(event) {
    alert("usuario:" + this.state.usuario + " clave:" + this.state.clave);
  }
  render() {
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
              value={this.state.correo}
              onChange={this.setCorreo}
              placeholder="Introduce tu correo electronico o Telefono "
            />
            <NavLink to="/login">
              <button>Siguiente</button>
            </NavLink>
          </section>
        </div>
      );
    }
}
export default Recuperar_Password;