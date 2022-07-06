import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Produc from "../component/Produc";

export default function Teclados() {
  return (
    <div className="tienda-body">
      <Navbar />
      <div class="Fondo">
        <div class="titulo">
          <h1>Teclados</h1>
        </div>
        <div className="page-content2">
          <div className="contenedor-produc">
            <Produc
              marca="Spektra®"
              modelo="Teclado KB-700W Multimedia Wireless Negro"
              img="teclado/Teclado.jpg"
              precio="$6.990"
            />
            <Produc
              marca="Trust®"
              modelo="Teclado Gamer GXT856 Torac Membrana Español"
              img="teclado/Teclado2.jpg"
              precio="$23.990"
            />
            <Produc
              marca="Corsair®"
              modelo="Teclado Gamer K68 Mecánico Cherry Red Backlight Red Español USB"
              img="teclado/Teclado8.jpg"
              precio="$103.990"
            />
            <Produc
              marca="Steelseries®"
              modelo="Teclado Gamer Apex 100 Membrana Inglés USB"
              img="teclado/Teclado3.jpg"
              precio="$37.990"
            />
          </div>
          <div className="contenedor-produc">
            <Produc
              marca="Gear Gamer®"
              modelo="Teclado Gamer Volt Mecánico USB Inglés Negro"
              img="teclado/Teclado4.jpg"
              precio="$35.990"
            />
            <Produc
              marca="Corsair®"
              modelo="Teclado Gamer k55 RGB PRO Membrana USB"
              img="teclado/Teclado5.jpg"
              precio="$49.990"
            />
            <Produc
              marca="Gamdias®"
              modelo="Teclado Gamer Hermes M5 Mecánico USB Blanco"
              img="teclado/Teclado6.jpg"
              precio="$60.990"
            />
            <Produc
              marca="Logitech®"
              modelo="Teclado Gamer G413 Carbon Mecánico Inglés USB"
              img="teclado/Teclado7.jpg"
              precio=">$89.990"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
