import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contacto from "./pag/Contacto";
import Garantia from "./pag/Garantia";
import Home from "./pag/Home";
import Login from "./pag/Login";
import Nosotros from "./pag/Nosotros";
import PoliticaPriv from "./pag/PloliticaDePriv";
import PoliticaCompra from "./pag/PoliticaCompra";
import TerminosCons from "./pag/TerminosCon";
import Tienda from "./pag/Tienda";
import Error from "./pag/404";
import Pc from "./pag/Pc";
import Mouses from "./pag/Mouses";
import Teclados from "./pag/Teclados";
import Auriculares from "./pag/Auriculares";
import Componentes from "./pag/Componentes";
import Sillas from "./pag/sillas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/terminos-y-condiciones" element={<TerminosCons />} />
        <Route path="/politica-de-compra" element={<PoliticaCompra />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPriv />} />
        <Route path="/garantia" element={<Garantia />} />
        <Route path="/pc" element={<Pc />} />
        <Route path="/mouse" element={<Mouses />} />
        <Route path="/teclados" element={<Teclados />} />
        <Route path="/auriculares" element={<Auriculares />} />
        <Route path="/componentes" element={<Componentes />} />
        <Route path="/sillas" element={<Sillas />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
