import "./App.css";
import ProductoApp from "./components/ProductoApp";

import laptop from "./assets/laptos.webp";
import mouse from "./assets/mause.webp";
import teclado from "./assets/teclado.avif";

function App() {

  const productos = [
    {
      id:1,
      imagen:laptop,
      nombre:"Laptop HP",
      precio:4500,
      categoria:"Computadoras",
      disponible:true
    },
    {
      id:2,
      imagen:mouse,
      nombre:"Mouse ",
      precio:150,
      categoria:"Accesorios",
      disponible:false
    },
    {
      id:3,
      imagen:teclado,
      nombre:"Teclado Mecánico",
      precio:350,
      categoria:"Accesorios",
      disponible:true
    }
  ];

  return (
    <>
      <h1>LISTA DE PRODUCTOS</h1>

      <div className="contenedor">

        {productos.map((producto) => (
          <ProductoApp
            key={producto.id}
            imagen={producto.imagen}
            nombre={producto.nombre}
            precio={producto.precio}
            categoria={producto.categoria}
            disponible={producto.disponible}
          />
        ))}

      </div>
    </>
  );
}

export default App;