import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Produc from "../component/Produc";

export default function Pc() {
  return (
    <div className="tienda-body">
      <Navbar />
      <div className="Fondo">
        <div className="titulo">
          <h1>PC</h1>
        </div>
        <div className="page-content">
          <div className="contenedor-produc">
            <Produc
              marca="Asus®"
              modelo="All in One Vivo AiO 22 V222GAK Celeron J4025 4GB 1TB 21,5 FullHD Windows 10 V222GAK-WA199T"
              img="1.jpg"
              precio="$379.990"
            />
            <Produc
              marca="Lenovo®"
              modelo="All In One IdeaCentre A340 23.8 FullHD Intel Celeron J4105 4GB 1TB Windows 10"
              img="2.jpg"
              precio="$409.990"
            />
            <Produc
              marca="HP®"
              modelo="All in One 20.7 FullHD Intel Celeron J4025 4GB 1TB Windows 10 21-b0000la"
              img="3.jpg"
              precio="$397.690"
            />
            <Produc
              marca="HP®"
              modelo="All in One 22 FullHD Intel Pentium J5040 8GB 256GB SSD Windows 11 22-dd0533la"
              img="4.jpg"
              precio="$459.990"
            />
          </div>
          <div className="contenedor-produc">
            <Produc
              marca="Lenovo®"
              modelo="All in One IdeaCentre A340 24 FullHD i3-10110U 4GB 1TB Windows 10"
              img="5.jpg"
              precio="$519.990"
            />
            <Produc
              marca="Asus®"
              modelo="All in One Vivo AIO V222FAK 21.5 FullHD Intel Pentium Gold 8GB 256GB SSD Windows 11 V222FAK-BA173W"
              img="6.jpg"
              precio="$552.890"
            />
            <Produc
              marca="HP®"
              modelo="All in One 23,8 FullHD Intel Core i3-1115G4 4GB 1TB Windows 10 24-df1000la"
              img="7.jpg"
              precio="$581.990"
            />
            <Produc
              marca="Lenovo®"
              modelo='All in One IdeaCenter 5 23.8" FullHD Intel i5-10400T 12GB 512GB SSD Windows 10'
              img="8.jpg"
              precio="$869.990"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
