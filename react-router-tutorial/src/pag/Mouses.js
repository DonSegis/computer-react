import Produc from "../component/Produc";

export default function Mouses() {
  return (
    <div>
      <div class="Fondo">
        <div class="titulo">
          <h1>PC</h1>
        </div>
        <div className="page-content">
          <div className="contenedor-produc">
            <Produc
              marca="Gear Gamer®"
              modelo="Mouse Gamer Pendulum Óptico USB Negro"
              img="mause.jpg"
              precio="$5.990"
            />
            <Produc
              marca="Trust®"
              modelo="Mouse Gamer Ziva Óptico Cable USB"
              img="mause2.jpg"
              precio="$7.590"
            />
            <Produc
              marca="Trust®"
              modelo="Mouse Gamer GXT101P GAV Óptico Cable USB Pink"
              img="mause3.jpg"
              precio="$10.990"
            />
            <Produc
              marca="Trust®"
              modelo="Mouse Gamer GXT107 Izza Óptico Wireless"
              img="mause4.jpg"
              precio="$17.090"
            />
          </div>
          <div className="contenedor-produc">
            <Produc
              marca="Trust®"
              modelo="Mouse Gamer GXT 133 Locx USB Negro"
              img="mause5.jpg"
              precio="$14.990"
            />
            <Produc
              marca="Logitech®"
              modelo="Mouse Gamer G203 RGB Lightsync USB Negro"
              img="mause6.jpg"
              precio="$21.990"
            />
            <Produc
              marca="Trust®"
              modelo="Mouse Gamer GXT 164 Sikanda MMO USB Negro"
              img="mause7.jpg"
              precio="$32.990"
            />
            <Produc
              marca="HyperX®"
              modelo="Mouse Gamer HyperX Pulsefire Haste RGB Cable USB Negro"
              img="mause8.jpg"
              precio="$49.990"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
