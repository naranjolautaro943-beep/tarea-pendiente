export default function ProductCard({ nombre, precio, imagen, stock }) {
  const sinStock = stock === 0;

  return (
    <div className={`card ${sinStock ? "has-background-danger-light" : ""}`}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imagen} alt={nombre} style={{ objectFit: "cover" }} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5">{nombre}</p>
        <p className="subtitle is-6 has-text-weight-bold">${precio}</p>
        <p className={sinStock ? "has-text-danger" : "has-text-grey"}>
          {sinStock ? "Sin stock" : `Stock: ${stock}`}
        </p>
      </div>
      <footer className="card-footer">
        <button
          disabled={sinStock}
          className={`card-footer-item button is-fullwidth ${
            sinStock ? "is-static" : "is-primary"
          }`}
        >
          Agregar
        </button>
      </footer>
    </div>
  );
}