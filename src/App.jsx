
import ProductCard from "./ProductCard";

const productos = [
  { id: 1, nombre: "Auriculares Bluetooth", precio: 25000, imagen: "https://via.placeholder.com/300x180?text=Auriculares", stock: 12 },
  { id: 2, nombre: "Teclado Mecánico", precio: 48000, imagen: "https://via.placeholder.com/300x180?text=Teclado", stock: 0 },
  { id: 3, nombre: "Mouse Inalámbrico", precio: 15000, imagen: "https://via.placeholder.com/300x180?text=Mouse", stock: 5 },
];

function App() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Catálogo de Productos</h1>
      <div className="row g-4">
        {productos.map((producto) => (
          <div className="col-12 col-sm-6 col-md-4" key={producto.id}>
            <ProductCard
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              stock={producto.stock}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
