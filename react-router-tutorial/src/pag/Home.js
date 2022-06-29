import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import '../diseño/Home.css'

export default function Home(){
    return(
        <div className="home-body">
          <Navbar/>
          <div>
            <div className="contenedor">
              <div className="caja1">
                <NavLink to='/'>
                  <button className="boton1">Compuadoras</button>
                </NavLink>
              </div>
              <div className="caja2">
                <NavLink to='/'>
                  <button className="boton2">Auriculares</button>
                </NavLink>    
              </div>
              <div className="caja3">
                <NavLink to='/'>
                  <button className="boton3">Mause</button>
                </NavLink>
              </div>
            </div>
            <div className="contenedor2">
              <div className="caja1">
                <NavLink to='/'>
                    <button className="boton4">Sillas</button>
                </NavLink> 
              </div><div className="caja2">
                <NavLink to='/'>
                    <button className="boton5">Teclados</button>
                </NavLink>
              </div>
              <div className="caja3">
                <NavLink to='/'>
                    <button className="boton6">Componentes</button>
                </NavLink>
              </div>
            </div>
          </div>
          <Footer/>
        </div> 
    )
}