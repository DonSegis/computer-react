import Produc from "../component/Produc";

export default function Componentes() {
  return (
    <div>
      <div class="Fondo">
        <div class="titulo">
          <h1>PC</h1>
        </div>
        <div className="page-content">
          <div className="contenedor-produc">
            <Produc
              marca="Intel®"
              modelo="CPU Core i5-9600K 3.70 GHz 9MB (1151-v2)"
              img="Cpu.jpg"
              precio="$269.990"
            />
            <Produc
              marca="Asus®"
              modelo="M/B Intel B360M-A"
              img="Tarjeta Madre.jpg"
              precio="$79.990"
            />
            <Produc
              marca="Kingston FURY®"
              modelo="DDR4 8GB 2666MHz Beast"
              img="Memoria ram.jpg"
              precio="$39.990"
            />
            <Produc
              marca="Asus®"
              modelo="Video NVIDIA GeForce GT1030 2G CSM GDDR5 - Low Profile"
              img="Tarjeta de video.jpg"
              precio="$96.990"
            />
          </div>
          <div className="contenedor-produc">
            <Produc
              marca="Kingston®"
              modelo='Unidad SSD 480GB Sata3 2.5" A400'
              img="Almacenamiento.jpg"
              precio="$58.990"
            />
            <Produc
              marca="Spektra®"
              modelo="Gabinete mATX 230W Slim One S602"
              img="Gabinete.jpg"
              precio="$39.990"
            />
            <Produc
              marca="Gamdias®"
              modelo="Ventilador 120mm - Aeolus M2 1204R RGB (4 Ventiladores)"
              img="Ventiladores.jpg"
              precio="$69.990"
            />
            <Produc
              marca="Corsair®"
              modelo="WaterCooling Hydro H60 2018 version (con luces LED)"
              img="Refigeracion.jpg"
              precio="$94.990"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
