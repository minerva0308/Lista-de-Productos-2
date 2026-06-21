import styles from "./productoApp.module.css";

function ProductoApp(props) {

  return (
    <div className={styles.card}>

      <img
        src={props.imagen}
        alt={props.nombre}
        className={styles.imagen}
      />

      <h2>{props.nombre}</h2>

      <p>
        <strong>Precio:</strong> Bs. {props.precio}
      </p>

      <p>
        <strong>Categoría:</strong> {props.categoria}
      </p>

      <p
        className={
          props.disponible
            ? styles.disponible
            : styles.agotado
        }
      >
        {props.disponible
          ? "Disponible"
          : "Agotado"}
      </p>

    </div>
  );
}

export default ProductoApp;