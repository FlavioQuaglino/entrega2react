import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto p-8 mt-8 bg-white shadow-xl rounded-lg text-center border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4 font-inter">
        {greeting} {}
      </h1>
      <p className="text-lg text-gray-600">
        Aquí es donde se mostrará el catálogo de productos. ¡Pronto estará lleno de increíbles ofertas!
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {}
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
            <img
              src={`https://placehold.co/150x150/E0F2F7/333333?text=Producto+${item}`}
              alt={`Producto ${item}`}
              className="rounded-md mb-3"
              // Manejo de error para la imagen en caso de que no cargue
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/cccccc/000000?text=Error'; }}
            />
            <h3 className="text-xl font-semibold text-gray-700">Nombre del Producto {item}</h3>
            <p className="text-blue-600 font-bold mt-1">$XX.XX</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Ver Detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer; 
