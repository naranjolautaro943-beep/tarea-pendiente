export default function ProductCard({ nombre, precio, imagen, stock }) {
  const sinStock = stock === 0;

  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden flex flex-col h-full ${
        sinStock ? "border-2 border-red-500 bg-red-50" : "border border-gray-200"
      }`}
    >
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h5 className="text-lg font-semibold mb-1">{nombre}</h5>
        <p className="font-bold mb-1">${precio}</p>
        <p className={`mb-3 ${sinStock ? "text-red-600" : "text-gray-500"}`}>
          {sinStock ? "Sin stock" : `Stock: ${stock}`}
        </p>
        <button
          disabled={sinStock}
          className={`mt-auto py-2 px-4 rounded font-medium text-white ${
            sinStock
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}