import { NavLink } from "react-router-dom";
import "../materialize/css/materialize.css";
export default function Navbar() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <header>
        <nav className="nav">
          <div className="nav-Wrapper">
            <NavLink to="/">
              <img
                src={
                  require("../img/logo/imagen_2022-05-03_222751225.svg").default
                }
                alt=""
              />
            </NavLink>
            <NavLink to="/login" className="brand-logo right">
              <i className="material-icons">account_circle</i>
            </NavLink>
            <NavLink to="#" className="brand-logo2 right">
              <i className="material-icons">local_grocery_store</i>
            </NavLink>
            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down container"
            >
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
        </nav>
        <script src="js/materialize.js"></script>
      </header>
    </div>
  );
}
