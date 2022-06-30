import { NavLink } from "react-router-dom";
import "../diseño/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-contenedor">
          <div className="footer-contenedor-logo">
            <img
              src={
                require("../img/logo/imagen_2022-05-03_222751225.svg").default
              }
              alt=""
            />
            <p className="p">
              Empresa enfocada en rubros de <br />
              computadoras de escritorios, gran variación <br />
              de productos tecnológicos.
            </p>
          </div>
          <div className="footer-menu1">
            <ul>
              <h4>Menu</h4>
              <br />
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/nosotros">Nosotros</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
              <li>
                <NavLink to="/tienda">Tienda</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-menu2">
            <ul>
              <h4>Legal</h4>
              <br />
              <li>
                <NavLink to="/terminos-y-condiciones">
                  Terminos y Condiciones
                </NavLink>
              </li>
              <li>
                <NavLink to="/politica-de-privacidad">
                  Politicas de Privacidad
                </NavLink>
              </li>
              <li>
                <NavLink to="/politica-de-compra">Politica de Compra</NavLink>
              </li>
              <li>
                <NavLink to="/garantia">Garantia</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-menu3">
            <ul>
              <br />
              <h4>Contacto</h4>
              <li>
                <NavLink to="/">contacto@computer.cl</NavLink>
              </li>
              <li>
                <NavLink to="/">+56 9 7853 2865</NavLink>
              </li>
              <li>
                <NavLink to="/">@computer_tk_oficial</NavLink>
              </li>
              <br />
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
