
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Link to={`/item/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover object-center rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2 capitalize">{product.category}</p>
          <p className="text-2xl font-extrabold text-blue-600">${product.price.toFixed(2)}</p>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors shadow-md">
            Ver Detalle
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Item;
