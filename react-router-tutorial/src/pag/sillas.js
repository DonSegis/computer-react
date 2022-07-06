import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Produc from "../component/Produc";

export default function Sillas() {
  return (
    <div className="tienda-body">
      <Navbar />
      <div class="Fondo">
        <div class="titulo">
          <h1>Sillas</h1>
        </div>
        <div className="page-content2">
          <div className="contenedor-produc">
            <Produc
              marca="Gear Gamer®"
              modelo="Silla Gamer Wanku V2 Black/Red"
              img="silla/silla.jpg"
              precio="$69.990"
            />
            <Produc
              marca="Gamdias®"
              modelo="Silla Gamer Zelus E1 Black/White"
              img="silla/silla2.jpg"
              precio="$85.990"
            />
            <Produc
              marca="Gear Gamer®"
              modelo="Silla Gamer Omilen V2 Black/Blue"
              img="silla/silla3.jpg"
              precio="$139.990"
            />
            <Produc
              marca="Gamdias®"
              modelo="Silla Gamer Zelus E1 Black"
              img="silla/silla4.jpg"
              precio="$179.990"
            />
          </div>
          <div className="contenedor-produc">
            <Produc
              marca="Gear Gamer®"
              modelo="Silla Gamer Kuden V2 White/Pink"
              img="silla/silla5.jpg"
              precio="$159.900"
            />
            <Produc
              marca="Gear Gamer®"
              modelo="Silla Gamer I-Tam V2 Black/Blue (RGB)"
              img="silla/silla6.jpg"
              precio="$193.990"
            />
            <Produc
              marca="Newskill®"
              modelo="Silla Gamer Kitsune Black/Blue"
              img="silla/silla7.jpg"
              precio="$193.990"
            />
            <Produc
              marca="Diablo®"
              modelo="Silla Gamer X-Player Black/Red"
              img="silla/silla8.jpg"
              precio="$202.090"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
