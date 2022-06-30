import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "../diseño/Legal.css";

export default function TerminosCons() {
  return (
    <div className="body-legal">
      <Navbar />
      <div class="container-legal">
        <h3>Términos y Condiciones</h3>
        <p>
          1) Registro. Antes de la primera compra, cada cliente se registrará de
          la siguiente forma:La compra se realiza en www.computer.cl ingresando
          datos requeridos.
        </p>
        <br />
        <p>
          1.1) El registro del cliente y compra efectuada en www.computer.cl
          implica conocimiento y aceptación de los datos requeridos.
        </p>
        <br />
        <p>
          1.2) Para compras posteriores se requerirá correo y clave secreta, sin
          que sea necesario volver a registrase.
        </p>
        <br />
        <p>
          1.3) Contraseña. La administración de la clave secreta es de absoluta
          responsabilidad de cada cliente, su entrega o utilización de terceras
          personas, no implicara responsabilidad alguna de Computer.
        </p>
        <br />
        <p>
          1.4) Los datos proporcionados por el cliente al momento del registro
          serán considerado fidedigno y sera responsabilidad del cliente
          mantenerlos actualizados. Es decir, Computer queda liberada de
          cualquier responsabilidad derivada de datos no actualizados o falsos.
          Estos serán tratados de manera confidencial y serán utilizados
          exclusivamente para procesador la compra y el despacho.
        </p>
      </div>
      <Footer />
    </div>
  );
}
