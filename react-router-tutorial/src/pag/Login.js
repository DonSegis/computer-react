import { NavLink } from "react-router-dom";
import "../diseño/Login.css";
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuario: "", clave: "" };
    this.setUsuario = this.setUsuario.bind(this);
    this.setClave = this.setClave.bind(this);
    this.enviarDatos = this.enviarDatos.bind(this);
  }
  setUsuario(event) {
    this.setState({ usuario: event.target.value });
  }
  setClave(event) {
    this.setState({ clave: event.target.value });
  }
  enviarDatos(event) {
    alert("usuario:" + this.state.usuario + " clave:" + this.state.clave);
  }
  render() {
    return (
      <div className="login-body">
        <div>
          <div className="from-login">
            <h5>Iniciar sesión</h5>
            <img src={require("../img/login/icono.jpg")} alt="" />
            <input
              className="controls"
              type="text"
              name="Usuario"
              value={this.state.usuario}
              onChange={this.setUsuario}
              placeholder="Usuario"
            />
            <input
              className="controls"
              type="password"
              name="contrasena"
              value={this.state.clave}
              onChange={this.setClave}
              placeholder="Contraseña"
            />
            <NavLink to="/">
              <button>Ingresar</button>
            </NavLink>
            <p>
              <NavLink to="/recuperar_password">
                ¿Olvidaste tu contraseña?
              </NavLink>
            </p>
            <h4>
              ¿No tienes una cuenta?<NavLink to="/registro">Registrate</NavLink>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
