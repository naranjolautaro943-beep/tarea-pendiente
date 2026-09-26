export default function ProductCard({ nombre, precio, imagen, stock }) {
  const sinStock = stock === 0;

  return (
    <div className={`card h-100 shadow-sm ${sinStock ? "border-danger bg-light" : ""}`}>
      <img
        src={imagen}
        className="card-img-top"
        alt={nombre}
        style={{ objectFit: "cover", height: "180px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text fw-bold">${precio}</p>
        <p className={`card-text ${sinStock ? "text-danger" : "text-muted"}`}>
          {sinStock ? "Sin stock" : `Stock: ${stock}`}
        </p>
        <button className="btn btn-primary mt-auto" disabled={sinStock}>
          Agregar
        </button>
      </div>
    </div>
  );
}