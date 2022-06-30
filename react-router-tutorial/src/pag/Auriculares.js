import Produc from "../component/Produc";

export default function Auriculares() {
  return (
    <div>
      <div class="Fondo">
        <div class="titulo">
          <h1>Auriculares</h1>
        </div>
        <div className="page-content">
          <div className="contenedor-produc">
            <Produc
              marca="Gear Gamer®"
              modelo="Audífono Gamer Einherr"
              img="Auriculares.jpg"
              precio="$12.990"
            />
            <Produc
              marca="NjoyTech®"
              modelo="Audífono Gamer USB Retroiluminado"
              img="Auriculares2.jpg"
              precio="$16.990"
            />
            <Produc
              marca="Trust®"
              modelo="Audífono Gamer GXT310 Multiplataforma"
              img="Auriculares3.jpg"
              precio="$19.990"
            />
            <Produc
              marca="NjoyTech®"
              modelo="Audífono Gamer Pro Pink Edition"
              img="Auriculares4.jpg"
              precio="$23.990"
            />
          </div>
          <div className="contenedor-produc">
            <Produc
              marca="NjoyTech®"
              modelo="Audífono Gamer Iluminado RGB Sonido 7.1"
              img="Auriculares5.jpg"
              precio="$29.090"
            />
            <Produc
              marca="Trust®"
              modelo="Audífono Gamer GXT422G Multiplataforma"
              img="Auriculares6.jpg"
              precio="$28.490"
            />
            <Produc
              marca="HyperX®"
              modelo="Audífono Gamer Cloud Stinger Core"
              img="Auriculares7.jpg"
              precio="$29.990"
            />
            <Produc
              marca="Turtle Beach®"
              modelo="Audífono Gamer Recon 70X"
              img="Auriculares8.jpg"
              precio="$39.990"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
