import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import '../diseño/Nosotros.css'

export default function Nosotros(){
    return(
        <div className="nosotros-body">
            <Navbar/>
            <div class="contein">
                <div class="contei-logo">
                    <img src={require('../img/logo/imagen_2022-05-03_222751225.svg').default} alt=""/>
                    <b>siempre lo mejor</b>
                </div>
                <div class="nosotro">
                    <h2>Nosotros</h2>
                    <p>Somos una empresa familiar donde nuestros objetivos es entregar a nuestros clientes la mejor atención y variación de productos tecnológicos</p>
                    <p>Estamos enfocados en rubros de computadoras de escritorios, tanto como para personas como para pequeñas y medianas empresas contando por el momento con una tienda 100% online donde pueden adquirir los productos que más les haga falta.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}