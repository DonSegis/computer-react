import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "../diseño/Legal.css";

export default function PoliticaCompra() {
  return (
    <div className="body-legal">
      <Navbar />
      <div class="container-legal">
        <h3>Políticas de Compra</h3>
        <p>
          Las compras que se efectúen en Computer computación SpA a través de
          medio online o venta telefónica estarán sujeta a los términos y
          condiciones, así como a la legislación chilena vigente, en particular
          a la ley N 19.628 sobre protección de los derechos al consumidor y la
          Ley N 19.628 sobre la protección de la vida privada.
        </p>
        <br />
        <p>
          Debito: Tarjeta de débito bancarias acogida a sistema de Transbank:
          Tarjeta emitida en Chile por Bancos nacionales que se encuentren
          afiliado a Transbank. Las compras hechas por este medio no son
          consideradas en efectivo.
        </p>
        <br />
        <p>
          Credito: Tarjetas de crédito bancarias: Tarjetas emitidas en Chile o
          en el extranjero que se encuentren afiliadas a Transbank.
        </p>
      </div>
      <Footer />
    </div>
  );
}
