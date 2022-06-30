import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "../diseño/Contacto.css";
import React from "react";

class Contacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuario: "", number: "", correo: "" };
    this.setUsuario = this.setUsuario.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.setCorreo = this.setCorreo.bind(this);
    this.enviarDatos = this.enviarDatos.bind(this);
  }
  setUsuario(event) {
    this.setState({ usuario: event.target.value });
  }
  setNumber(event) {
    this.setState({ number: event.target.value });
  }
  setCorreo(event) {
    this.setState({ correo: event.target.value });
  }
  enviarDatos(event) {
    alert("usuario:" + this.state.usuario + " clave:" + this.state.clave);
  }
  render() {
    return (
      <div className="contacto-body">
        <Navbar />
        <div className="contenedor-flip">
          <div className="titulo">
            <h1>Formulario</h1>
            <br />
          </div>
          <div className="cuadro">
            <form>
              <label for="name">Nombre:</label>
              <br />
              <input
                className="controls"
                type="text"
                id="name"
                name="name"
                value={this.state.usuario}
                onChange={this.setUsuario}
              />
              <br />
              <label for="cel">Telefono:</label>
              <br />
              <input
                className="controls"
                type="number"
                id="cel"
                name="cel"
                value={this.state.number}
                onChange={this.setNumber}
              />
              <br />
              <label for="e-mail">Correo electronico:</label>
              <br />
              <input
                className="controls"
                type="email"
                id="e-mail"
                name="e-mail"
                value={this.state.correo}
                onChange={this.setCorreo}
              />
              <br />
              <label for="mens">Mensaje:</label>
              <br />
              <textarea
                className="controls"
                name="mens"
                id="mens"
                cols="40"
                rows="10"
              ></textarea>
              <br />
            </form>
            <button className="boton-acep">Enviar</button>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {/* <img src={require('../img/contacto/robotito.png')}/> */}
              </div>
              <div className="flip-card-back">
                <h1>Contactanos</h1>
                <p>
                  <a href="mailto:contacto@computer.cl? Subject=Consulta%20o%20Problema">
                    contacto@computer.cl
                  </a>
                </p>
                <br />
                <p>
                  <a href="tel:+56978532865">+56 9 7853 2865</a>
                </p>
                <br />
                <p>
                  <a href="https://www.instagram.com/invites/contact/?¡=j4106vkw7kr2&utm_content=oeizm04">
                    @computer_tk_oficial
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contacto;
