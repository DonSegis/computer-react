import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Produc from "../component/Produc";
import '../diseño/Tienda.css'

export default function Tienda(){
    return(
        <div className="tienda-body">
            <Navbar/>
            <div class="Fondo">
                <div class="Titulo">
                    <h1>Tienda</h1>
                    <ul class="lista-links">
                        <li><a href="PC.html">PC</a></li>
                        <li><a href="Auriculares.html">Auriculares</a></li>
                        <li><a href="Teclados.html">Teclados</a></li>
                    </ul>
                    <ul class="lista2-links">
                        <li><a href="Sillas.html">Sillas</a></li>
                        <li><a href="Mauses.html">Mauses</a></li>
                        <li><a href="Componentes.html">Componentes</a></li>
                    </ul>
                </div>
                <div class="page-content">
                    <Produc
                        marca='Gear®'
                        modelo='Desktop Pentium Gold G6405 4GB 1TB'
                        img='producto1.jpg'
                        precio='$259.990' />
                    <Produc
                        marca='Gear Gamer®'
                        modelo='Capturadora Gamer Leeroy 1080P HD'
                        img='Teclado2.jpg'
                        precio='$49.990' />
                    <Produc
                        marca='Asus®'
                        modelo='Video NVIDIA GeForce GT1030 2G CSM GDDR5 - Low Profile'
                        img='Tarjeta de video.jpg'
                        precio='$96.990' />
                    <Produc
                        marca='Trust®'
                        modelo='Audífono Gamer GXT310 Multiplataforma'
                        img='Auriculares3.jpg'
                        precio='$19.990' />
                    <Produc
                        marca='Gear Gamer®'
                        modelo='Silla Gamer Wanku V2 Black/Red'
                        img='silla.jpg'
                        precio='$69.990' />
                    <Produc
                        marca='Logitech®'
                        modelo='Teclado Gamer G413 Carbon Mecánico Inglés USB'
                        img='Teclado7.jpg'
                        precio='$89.990' />
                    <Produc
                        marca='Asus®'
                        modelo='M/B Intel B360M-A'
                        img='Tarjeta Madre.jpg'
                        precio='$79.990' />
                    <Produc
                        marca='Kingston®'
                        modelo='Unidad SSD 480GB Sata3 2.5" A400'
                        img='Almacenamiento.jpg'
                        precio='$58.990' />
                </div> 
            </div>
            <Footer/>
        </div>
    )
}