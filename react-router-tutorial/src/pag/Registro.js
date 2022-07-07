import React from "react";
import { NavLink } from "react-router-dom";
import "../diseño/Login.css";

class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuario: "", correo: "", number: "", clave: "", confirmarClave:"" };
    this.setUsuario = this.setUsuario.bind(this);
    this.setCorreo = this.setCorreo.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.setClave = this.setClave.bind(this);
    this.setConfirmarClave = this.setConfirmarClave.bind(this);
    this.enviarDatos = this.enviarDatos.bind(this);
  }
  setUsuario(event) {
    this.setState({ usuario: event.target.value });
  }
  setCorreo(event) {
    this.setState({ correo: event.target.value });
  }
  setNumber(event) {
    this.setState({ number: event.target.value });
  }
  setClave(event) {
    this.setState({ clave: event.target.value })
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
          <h5>Crea tu cuenta</h5>
          <input
            class="controls"
            type="text"
            name="nombre_comp"
            value={this.state.usuario}
            onChange={this.setUsuario}
            placeholder="Nombre Completo"
          />
          <input
            class="controls"
            type="e-mail"
            name="correo"
            value={this.state.correo}
            onChange={this.setCorreo}
            placeholder="Correo electronico"
          />
          <input
            class="controls"
            type="num_telefono"
            name="telefono"
            value={this.state.number}
            onChange={this.setNumber}
            placeholder="Numero Telefono"
          />
          <input
            class="controls"
            type="password"
            name="contrasena"
            value={this.state.clave}
            onChange={this.setClave}
            placeholder="Contraseña"
          />
          <input
            class="controls"
            type="revicion"
            name="Confirmar Contrasena"
            value={this.state.confirmarClave}
            onChange={this.setConfirmarClave}
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
}
