export default function Produc(props) {
  return (
    <div className="div-contenedor">
      <div class="product-container">
        <h2>{props.marca}</h2>
        <h3>{props.modelo}</h3>
        <img src={require(`../img/tienda/${props.img}`)} />
        <h4>{props.precio}</h4>
        <button class="button-add">Agregar</button>
      </div>
    </div>
  );
}
